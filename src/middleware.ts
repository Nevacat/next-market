import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

export async function middleware(req: NextRequest) {
  const session = await getToken({req, secret: process.env.NEXTAUTH_SECRET})
  const pathname = req.nextUrl.pathname
  if(pathname.startsWith('/admin') && !session){
    return NextResponse.redirect(new URL('/auth/login',req.url))
  }
  if(pathname.startsWith('/admin') && session?.role !== 'admin'){
    return NextResponse.redirect(new URL('/',req.url))
  }
  if(pathname.startsWith('/auth') && session){
    return NextResponse.redirect(new URL('/',req.url))
  }
  if (['/user', '/products/upload', '/chat','likes'].some(path => pathname.startsWith(path)) && !session) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
  return NextResponse.next()
}


export default middleware