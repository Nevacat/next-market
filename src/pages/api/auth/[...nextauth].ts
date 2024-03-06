import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions : NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Road@test.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if(!credentials?.email || credentials?.password){
          throw new Error("이메일과 비밀번호를 입력해주세요.")
        }
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        if (user) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }

      }
    }),

  ],
}
export default NextAuth(authOptions)