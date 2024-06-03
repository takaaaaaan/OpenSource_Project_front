/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'

import '../styles/content.css'
import '../styles/setting.css'
import "../styles/locomotive-scroll.css"

import gsap from 'gsap'
import { Poppins, Noto_Sans_KR } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '600', '700'],
})

const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['200', '400', '500', '600', '700'],
})

const teamList = [
  {
    image: '../public/images/main_team_img01.jpg',
    name: '임수연',
    content: '이 크리에이터는 앞으로가 더욱 기대되는 보석같은 저만의 아이돌이에요. 앞으로 얼마나 성장할지 기다려져요.',
  },
  {
    image: '../public/images/main_team_img02.jpg',
    name: 'Philtre',
    content:
      '구독자나 팬 분들에게 기념이 될만한 굿즈를 출시할 수 있어서 좋아요. 이를 통한 부가적인 수익을 창출할 수 있다는 점도 긍정적이고요.',
  },
  {
    image: '../public/images/main_team_img03.jpg',
    name: 'Chloe',
    content:
      '제가 좋아하는 창작자가 만든 기념품을 소장하고 싶었어요. 앞으로도 릴스바이오를 소유하고 있는 팬들에게 더 많은 혜택을 제공했으면 좋겠어요.',
  },
  {
    image: '../public/images/main_team_img04.jpg',
    name: '최민혁',
    content:
      '릴스바이오에서 작품을 전시하고 판매할 수 있어서 좋아요. 더 많은 사람들에게 제 자신과 작품을 노출시킬 수 있고, 다른 창작자의 작업물에서 영감을 얻을 수 있어요.',
  },
  {
    image: '../public/images/main_team_img05.jpg',
    name: 'Isabel',
    content:
      'k-pop을 통해 한국의 대중 문화를 알게 됐고 다양한 한국 유튜버들의 컨텐츠를 즐겨 보고 있어요. 좀 더 개인적인 컨텐츠가 많아졌으면 좋겠어요.',
  },
  {
    image: '../public/images/main_team_img06.jpg',
    name: 'Irene',
    content: '디지털 포카(포토카드)를 모아가는 재미가 있어요. 바라만 보고 있어도 기분이 좋아져요.',
  },
]

export default function Home() {
  const { scroll } = useLocomotiveScroll()
  gsap.registerPlugin(ScrollTrigger)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const teamItemRef = useRef<HTMLDivElement | null>(null)
  const teamWrapRef = useRef<HTMLDivElement | null>(null)
  const mainTeamRef = useRef<HTMLDivElement | null>(null)

  // 스크롤 트리거 애니메이션 (메인 타이틀, 기차)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, rotationX: -80, transformOrigin: 'bottom', duration: 1, ease: 'power2.inOut' },
      })

      tl.fromTo('.mv-copy h2:nth-child(1)', { opacity: 0, rotationX: -80 }, { opacity: 1, rotationX: 0 })
        .fromTo('.mv-copy h2:nth-child(2)', { opacity: 0, rotationX: -80 }, { opacity: 1, rotationX: 0 }, '-=0.8')
        .fromTo('.mv-copy h2:nth-child(3)', { opacity: 0, rotationX: -80 }, { opacity: 1, rotationX: 0 }, '-=0.8')
        .fromTo('.mv-copy div', { opacity: 0, rotationX: -80 }, { opacity: 1, rotationX: 0 }, '-=0.8')
    }, contentRef.current as HTMLElement)

    return () => {
      ctx.revert()
    }
  }, [])

  useLayoutEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false

    if (!isMobile) {
      console.log('isMobile', isMobile)

      // 팀원 //
      let teamWidth = window.innerWidth
      let teamWrap = (teamWidth - 1200) / 2
      document.getElementById('teamWrap')!.style.paddingLeft = teamWrap + 'px'

      let pinWrap = document.querySelector('.team-wrap') as HTMLElement
      let pinWrapWidth = pinWrap.offsetWidth
      let horizontalScrollLength = pinWrapWidth - window.innerWidth
      console.log(pinWrapWidth, horizontalScrollLength)

      // const loco = gsap.to(".team-wrap", {
      //   scrollTrigger: {
      //     scroller: '.wrap',
      //     markers: true,
      //     trigger: ".main-team",
      //     scrub: true,
      //     pin: true,
      //     // anticipatePin: 1,
      //     start: "center center",
      //     end: () => `+=${pinWrapWidth}`,
      //     //end: pinWrapWidth,
      //     invalidateOnRefresh: true
      //   },
      //   x: -horizontalScrollLength,
      //   ease: "sine.out",
      // });

      // return () => {
      //   loco.kill();
      // }
    }
  }, [])

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
            <video  autoPlay muted loop>
              <source src="images/main_visual.mp4" type="video/mp4" />
              {/* <source src="../public/images/main_visual.mp4" type="video/mp4" /> */}
            </video>
            <div className="mv-bottom"></div>
            <div className="mv-copy">
              <h2 className={poppins.className}>
                <span>REELSBio</span> Creator,
              </h2>
              <h2 className={poppins.className}>
                Digital <span>Goods</span>,
              </h2>
              <h2 className={poppins.className}>Platform</h2>
              <div>크리에이터가 생성한 디지털 굿즈의 수익화를 도와주는 플랫폼입니다.</div>
              {/* TODO : 4번요구사항 로그인버튼으로 버튼 링크 수정해야함 */}
              <div className="mv-button">
                <span className="text-[#888]">
                  {/* 릴스바이오 등록을 원하시는 크리에이터시라면 여기를 눌러 양식을 작성해주세요. */}
                  {/* [x]:3번요구사항 문구 수정 */}
                  릴스바이오 등록을 원하시는 크리에이터시라면 여기를 눌러 크리에이터 인증 후에 릴스바이오를
                  등록해주셍요.
                </span>
                <a href="https://8g81t5qrzo8.typeform.com/to/ERJhWUZH" target="_blank">
                  릴스바이오 등록
                </a>
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
                크리에이터가 생성한 포토카드나 창작 아트 형태의 디지털 굿즈를 판매하는 플랫폼으로, 창작자의 꿈을
                지원합니다.
              </h4>
            </div>
          </div>
          <section className="main-intro-img">
            <div>
              <ul>
                <li data-scroll data-scroll-speed="2" data-scroll-delay="0.05">
                  <p>
                    <img src="../public/images/intro_img01.jpg" width="100%" alt="" title="" />
                  </p>
                </li>
                <li data-scroll data-scroll-speed="3" data-scroll-delay="0.05">
                  <p>
                    <img src="../public/images/intro_img02.jpg" width="100%" alt="" title="" />
                  </p>
                </li>
                <li data-scroll data-scroll-speed="1" data-scroll-delay="0.05">
                  <p>
                    <img src="../public/images/intro_img03.jpg" width="100%" alt="" title="" />
                  </p>
                </li>
                <li data-scroll data-scroll-speed="2.5" data-scroll-delay="0.05">
                  <p>
                    <img src="../public/images/intro_img04.jpg" width="100%" alt="" title="" />
                  </p>
                </li>
                <li data-scroll data-scroll-speed="1" data-scroll-delay="0.05">
                  <p>
                    <img src="../public/images/intro_img06.jpg" width="100%" alt="" title="" />
                  </p>
                </li>
                <li data-scroll data-scroll-speed="2.5" data-scroll-delay="0.05">
                  <p>
                    <img src="../public/images/intro_img05.jpg" width="100%" alt="" title="" />
                  </p>
                </li>
              </ul>
            </div>
          </section>

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
                릴스바이오로 여러분의 창작물을 공유하세요! 우리는 창작물을 소유할 수 있는 새로운 방법을 제공합니다.
              </h3>
              <ul>
                <li data-scroll data-scroll-speed="1" data-scroll-delay="0.2">
                  <p>
                    <img src="../public/images/main_guide_img01.png" alt="" title="" />
                  </p>
                </li>
                <li data-scroll data-scroll-speed="3" data-scroll-delay="0.2">
                  <p>
                    <img src="../public/images/main_guide_img02.png" alt="" title="" />
                  </p>
                </li>
              </ul>
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
                유튜브와 트위치의 크리에이터들은 자신의 작품을 판매하고 싶어하고, 팬들은 그 작품을 소장하고 싶어해요.
              </h3>
              <ul>
                <li data-scroll data-scroll-speed="1" data-scroll-delay="0.2">
                  <p>
                    <img src="../public/images/main_needs_img01.svg" alt="" title="" />
                  </p>
                </li>
                <li data-scroll data-scroll-speed="1" data-scroll-delay="0.2">
                  <p>
                    <img src="../public/images/main_needs_img02.svg" alt="" title="" />
                  </p>
                </li>
              </ul>
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
            <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="20">
              <div className="team-wrap" id="teamWrap">
                <div className="team-item" ref={teamItemRef}>
                  <p>
                    <img src="../public/images/main_team_img01.jpg" width="100%" alt="" title="" />
                  </p>
                  <h2>임수연</h2>
                  <h3>
                    “이 크리에이터는 앞으로가 더욱 기대되는 보석같은 저만의 아이돌이에요. 앞으로 얼마나 성장할지
                    기다려져요.”
                  </h3>
                </div>
                <div className="team-item">
                  <p>
                    <img src="../public/images/main_team_img02.jpg" width="100%" alt="" title="" />
                  </p>
                  <h2>Philtre</h2>
                  <h3>
                    “구독자나 팬 분들에게 기념이 될만한 굿즈를 출시할 수 있어서 좋아요. 이를 통한 부가적인 수익을 창출할
                    수 있다는 점도 긍정적이고요.”
                  </h3>
                </div>
                <div className="team-item">
                  <p>
                    <img src="../public/images/main_team_img03.jpg" width="100%" alt="" title="" />
                  </p>
                  <h2>Chloe</h2>
                  <h3>
                    “제가 좋아하는 창작자가 만든 기념품을 소장하고 싶었어요. 앞으로도 릴스바이오를 소유하고 있는
                    팬들에게 더 많은 혜택을 제공했으면 좋겠어요.”
                  </h3>
                </div>
                <div className="team-item">
                  <p>
                    <img src="../public/images/main_team_img04.jpg" width="100%" alt="" title="" />
                  </p>
                  <h2>최민혁</h2>
                  <h3>
                    “릴스바이오에서 작품을 전시하고 판매할 수 있어서 좋아요. 더 많은 사람들에게 제 자신과 작품을
                    노출시킬 수 있고, 다른 창작자의 작업물에서 영감을 얻을 수 있어요.”
                  </h3>
                </div>
                <div className="team-item">
                  <p>
                    <img src="../public/images/main_team_img05.jpg" width="100%" alt="" title="" />
                  </p>
                  <h2>Isabel</h2>
                  <h3>
                    “k-pop을 통해 한국의 대중 문화를 알게 됐고 다양한 한국 유튜버들의 컨텐츠를 즐겨 보고 있어요. 좀 더
                    개인적인 컨텐츠가 많아졌으면 좋겠어요.”
                  </h3>
                </div>
                <div className="team-item">
                  <p>
                    <img src="../public/images/main_team_img06.jpg" width="100%" alt="" title="" />
                  </p>
                  <h2>Irene</h2>
                  <h3>“디지털 포카(포토카드)를 모아가는 재미가 있어요. 바라만 보고 있어도 기분이 좋아져요.”</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="main-title">
            <div>
              <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="10">
                <em>REELSBio &nbsp;</em>
              </h2>
              <h3 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-10">
                How it works
              </h3>
            </div>
          </div>

          <div className="main-how">
            <div>
              <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
                크리에이터와 팬을 연결하는 <span>플랫폼을 제공</span>하겠습니다.
              </h2>
              <h3 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
                크리에이터의 아트와 굿즈를 소장하세요.
              </h3>
              <ul>
                <li data-scroll data-scroll-speed="4" data-scroll-delay="0.2">
                  <p>
                    <img src="../public/images/main_how_img01.svg" alt="" title="" />
                  </p>
                  <h2>첫번째.</h2>
                  <h3>창작자는 SNS에 게시물 올리듯 쉽게 창작물을 올릴 수 있습니다.</h3>
                </li>
                <li data-scroll data-scroll-speed="3" data-scroll-delay="0.2">
                  <p>
                    <img src="../public/images/main_how_img02.svg" alt="" title="" />
                  </p>
                  <h2>두번째.</h2>
                  <h3>사용자는 원하는 작품을 쉽게 구매할 수 있어요.</h3>
                </li>
                <li data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
                  <p>
                    <img src="../public/images/main_how_img03.svg" alt="" title="" />
                  </p>
                  <h2>세번째.</h2>
                  <h3>구매한 작품은 내 소유물이 되어서 마이페이지에서 언제든 감상할 수 있어요.</h3>
                </li>
                <li data-scroll data-scroll-speed="1" data-scroll-delay="0.2">
                  <p>
                    <img src="../public/images/main_how_img04.svg" alt="" title="" />
                  </p>
                  <h2>네번째.</h2>
                  <h3>언제든지 내 소유권을 다른 사람에게 양도할 수 있어요.</h3>
                </li>
              </ul>
            </div>
          </div>

          <div className="main-title">
            <div>
              <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="10">
                <span>분산 저장소에</span>
              </h2>
              <h3 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-10">
                안전하게 저장됩니다.
              </h3>
            </div>
          </div>

          <div className="main-technology1">
            <div className="mt-area" data-scroll>
              <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
                크리에이터의 모든 디지털 컨텐츠는 <span>분산 저장소</span>에 안전하게 저장됩니다.
              </h2>
              <h3 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
                분산 저장소(IPFS)에 저장된 데이터는 위변조가 불가능합니다. 창작자와 소유자 모두를 위한 안전한 거래
                환경을 제공하고, 모든 정보는 분산 저장소에 기록되어 누구나 검증이 가능합니다.
              </h3>
              <div data-scroll data-scroll-speed="1" data-scroll-delay="0.2">
                <img src="../public/images/main_technology_img02.png" className="mt-pc" width="100%" alt="" title="" />
                <img src="../public/images/main_technology_img02M.png" className="mt-mobile" width="100%" alt="" title="" />
              </div>
            </div>
          </div>
          {/* <div className="main-technology2">
            <div className="mt-area" data-scroll>
              <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.2"><span>NFT로 변환</span>도 가능합니다.</h2>
              <h3 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">누구나 Ethereum 블록체인에 릴스바이오를 저장할 수 있어요. 이를 위해서는 메타마스크와 같은 개인지갑과 NFT를 생성하는 데 필요한 암호화폐(ETH)가 필요합니다.</h3>
              <div data-scroll data-scroll-speed="1" data-scroll-delay="0.2">
                <img src="../public/images/main_technology_img01.png" className="mt-pc" width="100%" alt="" title="" />
                <img src="../public/images/main_technology_img01M.png" className="mt-mobile" width="100%" alt="" title="" />
              </div>
            </div>
          </div>
          <div className="main-change">
            <div>
              <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">NFT로 변환하면 무엇이 좋을까요?</h2>
              <h3 data-scroll data-scroll-speed="2" data-scroll-delay="0.2">NFT로 변환하면 창작자와 소유자에게 모두 혜택이 있어요.</h3>
              <ul data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
                <li>
                  <p><img src="../public/images/main_change_img01.jpg" width="100%" alt="" title="" /></p>
                  <div>
                    <h2>창작자</h2>
                    <h3>릴스바이오를 만든 크리에이터는 NFT로 변환돼도 창작자 정보는 계속 유지되고, NFT가 거래될 때마다 원작자에게 1%의 수익이 자동으로 돌아가요. 거래량이 많아질수록 크리에이터의 수익도 증가합니다.</h3>
                  </div>
                </li>
                <li>
                  <p><img src="../public/images/main_change_img02.jpg" width="100%" alt="" title="" /></p>
                  <div>
                    <h2>소유자</h2>
                    <h3>소유자는 NFT를 개인지갑 간에 자유롭게 이동시킬 수 있고, 소셜 미디어에서 프로필 사진으로 사용하는 등 NFT만의 독특한 기능을 경험할 수 있어요.</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="main-link">
            <ul>
              <li>
                <h2>
                  <em>REELSBio를 생성</em>하고 더 많은 혜택을 누리세요.
                </h2>
                <h3>
                  발매 기념으로 창작물 등록을 무료로 제공하고 있어요.
                  <br />
                  더 많은 혜택을 누릴 수 있도록 이번 기회를 놓치지 마세요.
                  <br />
                  <br />
                  릴스바이오 등록을 원하시는 크리에이터시라면 여기를 눌러 양식을 작성해주세요.
                </h3>
                <div>
                  <a href="https://8g81t5qrzo8.typeform.com/to/ERJhWUZH" target="_blank">
                    릴스바이오 등록
                  </a>
                </div>
              </li>
              <li>
                <h2>
                  REELSBio 구경하고 <em>나만의 포토카드 구매</em>하러 가기
                </h2>
                <h3>
                  릴스바이오는 창작자와 팬들의 소통 공간입니다.
                  <br />
                  좋아하는 크리에이터가 생성한 새로운 창작물을 미리 만나보세요.
                </h3>
                <div>
                  <a href="/market">마켓플레이스 바로 가기</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="main-footer">
            <h2 className="footer-business-name gap-y-2">
              <span className="font-bold">Copyright © 2023 Acai block. All rights reserved.</span>
              <div className="flex flex-row">
                <span>상호: 아사이블록(Acai block)</span>
                <span className="before:content-['|'] before:m-1 before:text-middlegray before:font-bold">
                  사업자등록번호 476-86-03135
                </span>
                <span className="before:content-['|'] before:m-1 before:text-middlegray before:font-bold">
                  통신판매신고 제2024-서울서초-0034호
                </span>
              </div>
              <div className="flex flex-row justify-between w-full">
                <div>
                  <span>대표: 윤필주</span>
                  <span className="before:content-['|'] before:m-1 before:text-middlegray before:font-bold">
                    서울특별시 서초구 효령로 391, 101동 2802호
                  </span>
                  <span className="before:content-['|'] before:m-1 before:text-middlegray before:font-bold">
                    010-2514-7450
                  </span>
                </div>
                <div className="footer-link">
                  <a href="/tos" target="_blank" className="transition delay-75 text-middlegray hover:text-white">
                    Terms of Use
                  </a>
                  <a
                    href="/privacy"
                    target="_blank"
                    className="text-middlegray hover:text-white transition delay-75 before:content-['|'] before:m-1 before:text-middlegray before:font-bold"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </h2>
          </div>
        </div>
        <style jsx global>{`
          body {
            background-color: black;
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
  )
}
