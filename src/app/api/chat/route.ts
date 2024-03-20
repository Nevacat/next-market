import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/helper/prismadb'
export async function GET(request:Request) {
    const currentUser = await getCurrentUser()
    if(!currentUser){
      return NextResponse.error()
    }
    const users = await prisma.user.findMany({
      include:{
        conversations:{
          include:{
            messages:{
              include:{
                sender:true,
                receiver:true
              },
              orderBy:{
                createdAt:"asc"
              }
            },
            user:true
          }
        }
      }
    })
    return NextResponse.json(users)
}

export async function POST(request:Request) {
  const currentUser = await getCurrentUser()
  if(!currentUser){
    return NextResponse.error()
  }
  const body = await request.json()
  const conversations = await prisma.conversation.findFirst({
    where:{
      AND:[
        {
          user:{
            some:{
              id:body.senderId
            }
          }
        },
        {
          user:{
            some:{
              id:body.receiverId
            }
          }
        }
      ]
    }
  });
  if(conversations){
    try{
      const message = await prisma.message.create({
        data:{
          image:body.image,
          text:body.text,
          senderId:body.senderId,
          receiverId:body.receiverId,
          conversationId:conversations.id
        }
      })
      return NextResponse.json(message)
    }catch(e){
      return NextResponse.error()
    }
  }else{
      const conversation = await prisma.conversation.create({
        data:{
          senderId:body.senderId,
          receiverId:body.receiverId,
          user:{
            connect:[
              {
                id:body.senderId
              },
              {
                id:body.receiverId
              }
            ]
          }
        }
      })
      try{
      const message = await prisma.message.create({
        data:{
          image:body.image,
          text:body.text,
          senderId:body.senderId,
          receiverId:body.receiverId,
          conversationId:conversation.id
        }
      })
      return NextResponse.json(message)
    }catch(e){
      return NextResponse.error()
    }
  }
}