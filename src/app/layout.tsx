"use client";

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
// import Component from "@/components/Sidebar2";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Inter fontの利用例です。実際のプロジェクトの設定に応じて調整してください。
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarWidth, setSidebarWidth] = useState<string>("50px"); // デフォルトのサイドバー幅

  useEffect(() => {
    function handleResize() {
      // ウィンドウ幅に基づいてサイドバーの幅を設定
      if (window.innerWidth >= 1024) {
        setSidebarWidth("250px"); // lgサイズ
      } else if (window.innerWidth >= 768) {
        setSidebarWidth("115px"); // mdサイズ
      } else {
        setSidebarWidth("50px"); // smサイズ
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // コンポーネントマウント時に初期サイズを設定

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en" className="h-full">
      <body className={`h-full overflow-hidden ${inter.className}`}>
        <div className="fixed top-0 left-0 h-full z-10">
          <Sidebar />
        </div>
        <div className="pl-sidebar-sm md:pl-sidebar-md lg:pl-sidebar-lg flex flex-col w-full">
          <div
            className="fixed top-0 z-20"
            style={{
              width: `calc(100% - ${sidebarWidth})`, // サイドバーの幅を動的に計算
            }}
          >
            <Header />
          </div>
          <main className="flex-grow overflow-auto pt-header p-4">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
