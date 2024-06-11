"use client";
import Link from "next/link";
import { Newspaper, FlagTriangleRight, Map, Pin, User, Ship } from "lucide-react";
import ctl from "@netlify/classnames-template-literals";

const menuList = [
  {
    group: "Main",
    items: [
      {
        link: "/LatestNews",
        icon: <Newspaper />,
        text: "Latest News",
      },
      {
        link: "/ranking",
        icon: <FlagTriangleRight />,
        text: "TOP10",
      },
      {
        link: "/map",
        icon: <Map />,
        text: "News Map",
      },
      {
        link: "/saved",
        icon: <Pin />,
        text: "Saved",
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        link: "/login",
        icon: <User />,
        text: "Login",
      },
    ],
  },
];

const logo_text = ctl(`
  bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
  bg-clip-text
  text-transparent
  text-xl
  font-bold
`);

export default function MainPageHeader() {
  return (
    <div className="relative bg-white bg-opacity-50">
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50"></div>
      <div className="relative flex justify-between items-center w-full py-4">
        <div className="flex-1 flex justify-start items-center space-x-4">
          <Link href="/login" className="w-full flex justify-center items-center gap-2 hover-scale">
            <Ship className="w-9 h-9" />
            <span className={logo_text}>The Blue Ocean</span>
          </Link>
        </div>
        <div className="flex space-x-4 ">
          {menuList
            .filter((menuGroup) => menuGroup.group === "Main")[0]
            .items.map((item, itemIndex) => (
              <div key={itemIndex} className="relative hover-scale">
                <Link href={item.link} className="flex items-center px-4 py-2">
                  {item.icon}
                  <span className="ml-2">{item.text}</span>
                </Link>
              </div>
            ))}
        </div>
        <div className="flex-1 flex justify-end space-x-4 mr-3">
          {menuList
            .filter((menuGroup) => menuGroup.group === "Settings")[0]
            .items.map((item, itemIndex) => (
              <div key={itemIndex} className="relative hover-scale">
                <Link href={item.link} className="flex items-center px-4 py-2 ">
                  {item.icon}
                  <span className="ml-2">{item.text}</span>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <style jsx>{`
        .hover-scale {
          transition: transform 0.5s ease-in-out;
        }

        .hover-scale:hover {
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
}
