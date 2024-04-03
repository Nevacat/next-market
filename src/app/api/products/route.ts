import { NextResponse } from "next/server";
import prisma from "@/helper/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const current = await getCurrentUser();
  if (!current) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json();
  const { name, price, imageSrc, description, latitude, longitude, category } =
    body;
  Object.keys(body).forEach((key) => {
    if (!body[key]) {
      return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    }
  });
  const product = await prisma.product.create({
    data: {
      name,
      price: parseInt(price, 10),
      imageSrc,
      description,
      latitude,
      longitude,
      category,
      userId: current.id,
    },
  });
  return NextResponse.json(product);
}

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  if(!products) return NextResponse.error();
  return NextResponse.json(products);
}
