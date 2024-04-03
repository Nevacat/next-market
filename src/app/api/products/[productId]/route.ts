import { NextResponse } from "next/server"
import prisma from "@/helper/prismadb"
export async function GET(request:Request,{params}:{params:{productId:string}}) {
    const {productId} = params
    const product = await prisma.product.findUnique({
      where:{
        id:productId
      },
      include:{
        user:true
      }
    })
    console.log(product)
    if(!product){
      return NextResponse.error()
    }
    return NextResponse.json(product)
}