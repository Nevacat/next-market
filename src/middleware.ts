import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

export async function middleware(req: NextRequest) {
  const session = await getToken({req, secret: process.env.JWT_SECRET})
  const pathname = req.nextUrl.pathname
  console.log(req.url)
  if(pathname.startsWith('/admin') && !session){
    return NextResponse.redirect(new URL('/auth/login',req.url))
  }
  if(pathname.startsWith('/admin') && session?.role !== 'admin'){
    return NextResponse.redirect(new URL('/',req.url))
  }
  if(pathname.startsWith('/auth') && session){
    return NextResponse.redirect(new URL('/',req.url))
  }
  if((pathname.startsWith('/user')||pathname.startsWith('/products/upload')) && !session){
    return NextResponse.redirect(new URL('/auth/login',req.url))
  }
  return NextResponse.next()
}


export default middleware