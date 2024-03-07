import NextAuth, { NextAuthOptions, Session } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/helper/prismadb'
import { Adapter } from "next-auth/adapters";

export const authOptions : NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Road@test.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // if(!credentials?.email || credentials?.password){
        //   throw new Error("이메일과 비밀번호를 입력해주세요.")
        // }
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com", role:"admin" }
        if(user){
          return user
        } else {
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.JWT_SECRET,
  callbacks:{
    async jwt({token, user}){
      return {...token, ...user}
    },
    async session({session, token}){
      session.user = token as Session["user"]
      return session
    }
  }
}
export default NextAuth(authOptions)