'use server'
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import prisma from "@/helper/prismadb"


export async function getSession(){
  return await getServerSession(authOptions)
}

export interface CurrentUser {
  id:string,
  email:string,
  username:string,
  role:string,
  favorites:string[],
  products:string[],
  createdAt:string,
  updatedAt:string,
}

const getCurrentUser = async () => {
  try{
    const session = await getSession()
    if(!session?.user?.email){
      return null
    }
    const current = await prisma?.user.findUnique({
      where:{
        email:session.user.email
      },
    })
    if(!current){
      return null
    }
    return current
  }catch(err){
    console.log(err)
  }
}

export default getCurrentUser