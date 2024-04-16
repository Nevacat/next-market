import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav/Navbar";
import { SessionProvider } from "next-auth/react";
import getCurrentUser, { CurrentUser } from "./actions/getCurrentUser";
import { user } from "@/atom/user";
import RecoilRootWrapper from "@/components/RecoilComponents";
import Script from "next/script";
import { useRouter } from "next/navigation";
import ToastifyProvider from "@/components/ToastifyProvider";
import { Noto_Sans_KR } from 'next/font/google';
import { Metadata } from "next";

/**적용하고자 하는 font*/
const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata:Metadata = {
  title: 'Next.js + Prisma + NextAuth.js + Recoil + Tailwind CSS',
  description: 'Next.js + Prisma + NextAuth.js + Recoil + Tailwind CSS',
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={`${notoSansKr.className}`}>
        <RecoilRootWrapper>
          <Navbar currentUser={currentUser as CurrentUser | null} />
          <ToastifyProvider/>
          {children}
        </RecoilRootWrapper>
      </body>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_KAKAO_APP_KEY}&libraries=services,clusterer&autoload=false`}
      />
    </html>
  );
}
