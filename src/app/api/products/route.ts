import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/helper/prismadb";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const current = await getCurrentUser();
  if(!current){
    return {
      status: 401,
      body: {message: 'Unauthorized'}
    }
  }
  const body = await req.json();
  const {name, price, imageSrc ,description, latitude, longitude, category} = body;
  Object.keys(body).forEach(key => {
    if(!body[key]){
      return {
        status: 400,
        body: {message: 'Bad Request'}
      }
    }
  })
  const product = await prisma.product.create({
    data:{
      name,
      price:parseInt(price,10),
      imageSrc,
      description,
      latitude,
      longitude,
      category,
      userId: current.id
    }
  })
  return NextResponse.json(product)
}
