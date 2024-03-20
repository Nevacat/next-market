import bcrypt from 'bcryptjs'
import prisma from '@/helper/prismadb'
import { NextResponse } from 'next/server'

export async function POST(req:Request) {
  const body = await req.json()
  const {email, name, password} = body
  const hashedPassword = await bcrypt.hash(password, 10)
  const verifyUser = await prisma.user.findUnique({
    where:{
      email
    }
  })
  if(verifyUser){
    return NextResponse.json({status:400,message:'이미 존재하는 이메일입니다.'})
  }
  const user = await prisma.user.create({
    data:{
      email,
      username:name,
      password: hashedPassword
    }
  })
  return NextResponse.json(user) 
}