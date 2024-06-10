/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { LocomotiveScrollProvider, useLocomotiveScroll } from "react-locomotive-scroll";

import "./styles/content.css";
import "./styles/setting.css";
import "./styles/locomotive-scroll.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Poppins, Noto_Sans_KR } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700"],
});

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const mainTeamRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          opacity: 0,
          rotationX: -80,
          transformOrigin: "bottom",
          duration: 1,
          ease: "power2.inOut",
        },
      });

      tl.fromTo(
        ".mv-copy h2:nth-child(1)",
        { opacity: 0, rotationX: -80 },
        { opacity: 1, rotationX: 0 }
      )
        .fromTo(
          ".mv-copy h2:nth-child(2)",
          { opacity: 0, rotationX: -80 },
          { opacity: 1, rotationX: 0 },
          "-=0.8"
        )
        .fromTo(
          ".mv-copy h2:nth-child(3)",
          { opacity: 0, rotationX: -80 },
          { opacity: 1, rotationX: 0 },
          "-=0.8"
        )
        .fromTo(
          ".mv-copy div",
          { opacity: 0, rotationX: -80 },
          { opacity: 1, rotationX: 0 },
          "-=0.8"
        );
    }, contentRef.current as HTMLElement);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.04,
        tablet: {
          smooth: true,
        },
        smartphone: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={contentRef}
    >
      <div className={`wrap ${noto_sans_kr.className}`}>
        <div className="container max-w-full" data-scroll-container ref={contentRef}>
          <div className="main-visual">
            <div className="mv-copy">
              <h2 className={poppins.className}>
                <span>REELSBio</span> Creator,
              </h2>
              <h2 className={poppins.className}>
                Digital <span>Goods</span>,
              </h2>
              <h2 className={poppins.className}>Platform</h2>
              <div>크리에이터가 생성한 디지털 굿즈의 수익화를 도와주는 플랫폼입니다.</div>
              <div className="mv-button">
                <span className="text-[#000]">
                  릴스바이오 등록을 원하시는 크리에이터시라면 여기를 눌러 크리에이터 인증 후에
                  릴스바이오를 등록해주셍요.
                </span>
              </div>
            </div>
          </div>

          <div className="main-intro">
            <div>
              <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.05">
                REELSBio는
              </h2>
              <h3 data-scroll data-scroll-speed="2.3" data-scroll-delay="0.05">
                크리에이터가 생성한 디지털 굿즈의 수익화를 도와주는 플랫폼입니다.
              </h3>
              <h4 data-scroll data-scroll-speed="2.6" data-scroll-delay="0.05">
                크리에이터가 생성한 포토카드나 창작 아트 형태의 디지털 굿즈를 판매하는 플랫폼으로,
                창작자의 꿈을 지원합니다.
              </h4>
            </div>
          </div>
          <div className="main-title">
            <div data-scroll>
              <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="10">
                <span>REELSBio &nbsp;</span>
              </h2>
              <h3 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-10">
                창작물을 공유하세요!
              </h3>
            </div>
          </div>

          <div className="main-guide">
            <div>
              <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
                아직도 <span>돈 안되는 인스타그램에서 창작물을 공유</span>하고 계신가요?
              </h2>
              <h3 data-scroll data-scroll-speed="2" data-scroll-delay="0.4">
                릴스바이오로 여러분의 창작물을 공유하세요! 우리는 창작물을 소유할 수 있는 새로운
                방법을 제공합니다.
              </h3>
            </div>
          </div>
          <div className="main-title">
            <div data-scroll>
              <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="10">
                <i>크리에이터는 판매!</i>
              </h2>
              <h3 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-10">
                팬들은 구매!
              </h3>
            </div>
          </div>

          <div className="main-needs">
            <div>
              <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
                크리에이터는 <span>판매</span>를 원하고 팬들은 <span>구매</span>를 원합니다.
              </h2>
              <h3 data-scroll data-scroll-speed="2" data-scroll-delay="0.4">
                유튜브와 트위치의 크리에이터들은 자신의 작품을 판매하고 싶어하고, 팬들은 그 작품을
                소장하고 싶어해요.
              </h3>
            </div>
          </div>

          <div className="main-title">
            <div data-scroll>
              <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="10">
                <em>REELSBio &nbsp;</em>
              </h2>
              <h3 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-10">
                사용자들은 이렇게 말해요!
              </h3>
            </div>
          </div>

          <div className="main-team" ref={mainTeamRef}>
            <div className="team-title">
              <h2>
                <span>커뮤니티의 일원</span>이 돼서 창작자와 소통해 보세요.
              </h2>
            </div>
          </div>
        </div>
        <style jsx global>{`
          body {
            // background-color: black;
            width: 100%;
          }
          .main-footer {
            display: flex;
            flex-direction: row;
            width: 100%;
          }
          .footer-business-name {
            font-size: 0.8rem;
            color: lightgray;
            line-height: 1.5;
            text-align: center;
            padding: 30px 0;
            display: flex;
            flex-direction: column;
            justify-content: between;
            align-items: start;
            width: 90%;
          }
        `}</style>
      </div>
    </LocomotiveScrollProvider>
  );
}
