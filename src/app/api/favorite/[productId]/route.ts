import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/helper/prismadb"
interface Params {
  productId?:string
}

export async function POST(req:Request,{params}:{params:Params}) {
  const currentUser = await getCurrentUser()
  if(!currentUser){
    return NextResponse.json({message:"Unauthorized"},{status:401})
  }
  const {productId} = params
  if(!productId || typeof productId !== "string"){
    throw new Error("옳바르지 않은 제품입니다.")
  } 
  let favorites = [...(currentUser.favorites || [])]
  favorites.push(productId)

  const user = await prisma?.user.update({
    where:{
      id:currentUser.id
    },
    data:{
      favorites:favorites
    }
  })
  return NextResponse.json(user)
}

export async function DELETE(req:Request,{params}:{params:Params}) {
  const currentUser = await getCurrentUser()
  if(!currentUser){
    return NextResponse.error()
  }
  const {productId} = params
  if(!productId || typeof productId !== "string"){
    throw new Error("옳바르지 않은 제품입니다.")
  } 
  let favorites = [...(currentUser.favorites || [])]
  favorites = favorites.filter((id)=>id!==productId)

  const user = await prisma?.user.update({
    where:{
      id:currentUser.id
    },
    data:{
      favorites:favorites
    }
  })
  return NextResponse.json(user)
}
