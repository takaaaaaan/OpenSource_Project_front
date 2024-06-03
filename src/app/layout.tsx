import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REELSBIO",
  description:
    "REELSBio는 크리에이터가 생성한 디지털 굿즈의 수익화를 도와주는 플랫폼입니다. 크리에이터가 생성한 포토카드나 창작 아트 형태의 디지털 굿즈를 판매하는 플랫폼으로, 창작자의 꿈을 지원합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="relative w-screen min-h-full" id="html">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description!} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></Script>
        {/* GA */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-26KW79YNX6" id="GA1" />
        <Script id="GA2">
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-26KW79YNX6');`}
        </Script>
        <Script src="https://cdn.iamport.kr/v1/iamport.js" />
        <Script src="https://democpay.payple.kr/js/v1/payment.js"></Script>
      </head>
      <body className={`${inter.className} no-scrollbar overflow-x-hidden `} id="body">
        <Header />
        {children}
        <Footer />
      </body>
      {/* 이미지 오른쪽 클릭 방지 */}
      <Script id="my-script">
        {`
          document.addEventListener("contextmenu", e => {
            e.target.matches("img") && e.preventDefault()
          })
        `}
      </Script>
    </html>
  );
}
