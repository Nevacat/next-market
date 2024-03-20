import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav/Navbar";
import { SessionProvider } from "next-auth/react";
import getCurrentUser from "./actions/getCurrentUser";
import { user } from "@/atom/user";
import RecoilRootWrapper from "@/components/RecoilComponents";
import Script from "next/script";
import { useRouter } from "next/navigation";
import ToastifyProvider from "@/components/ToastifyProvider";
import { Noto_Sans_KR } from 'next/font/google';

/**적용하고자 하는 font*/
const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});


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
          <Navbar currentUser={currentUser} />
          <ToastifyProvider/>
          {children}
        </RecoilRootWrapper>
      </body>
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8132d291ef3233702a372a12e190dffe&libraries=services,clusterer&autoload=false"
      />
    </html>
  );
}
