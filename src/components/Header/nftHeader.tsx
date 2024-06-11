"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ctl from "@netlify/classnames-template-literals";
import { usePathname, useRouter } from "next/navigation";

import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["600"], subsets: ["latin"] });

export default function MainHeader() {
  const path = usePathname();
  return (
    <header className={`${wrapper_page} ${poppins.className}`}>
      <h1>
        <Link href="/" className="font-extrabold">
          <span className={h1_white}>The Blue Ocean</span>
          {/* <span className={h1_blue}>Blue Ocean</span> */}
        </Link>
      </h1>
      <nav>
        {/* 이용약관, 개인정보 처리약관 페이지는 숨김 */}
        {path !== "/tos" && path !== "/privacy" && (
          <ul className={nav_list}>
            <li>
              <a href="/" className={button}>
                REELSBio?
              </a>
            </li>
            <li>
              <a href="/LatestNews" className={button}>
                Marketplace
              </a>
            </li>
            <li>
              <a className={button}>Mypage</a>
            </li>
            <li>
              <a className={button}>Support</a>
            </li>
            <li>
              <button className={button}>Login</button>
              <button className={button}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

const wrapper_page = ctl(`
flex
flex-row
justify-between
items-center
bg-black 
bg-opacity-50
fixed
top-0
left-0
w-screen
z-30
px-[5rem]
py-[1.875rem]
backdrop-blur-sm
!font-
!leading-6
`);

const h1_white = ctl(`
text-[2.8rem]
font-bold
text-white
uppercase
`);

const h1_blue = ctl(`
text-[2.8rem]
font-bold
text-blue
`);

const nav_list = ctl(`
flex
flex-row
justify-between
gap-x-[3.5rem]
text-[16px]
font-semibold
capitalize
`);

const button = ctl(`
w-[4.6rem]
text-[16px]
text-white
hover:text-[#4285F4]
hover:transition
hover:duration-300
hover:ease-in-out
tracking-wide
`);
