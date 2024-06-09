"use client";
import React from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import ctl from "@netlify/classnames-template-literals";
import { AspectRatioCardProps, Article } from "../../../types/Article";

const CategoryRatioCard02: React.FC<AspectRatioCardProps> = ({ articles }) => {
  return (
    <div className="pt-4 grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-5 overflow-y-auto h-screen">
      {articles.map((article, index) => {
        const sentiment = article.sentiment ?? "neutral";
        const sentimentClass =
          sentiment === "negative"
            ? badgeNegative
            : sentiment === "neutral"
              ? badgeNeutral
              : badgePositive;

        return (
          <AlertDialog key={index}>
            <AlertDialogTrigger asChild>
              <div className="relative border border-gray-300 rounded-md">
                <div className="relative w-full" style={{ paddingBottom: "45%" }}>
                  <Image
                    src={article.urlToImage ?? ""}
                    alt="Article Image"
                    className="absolute inset-0 w-full h-full rounded-md object-cover"
                    layout="fill"
                    unoptimized
                  />
                  <div className={notificationDot}></div>
                </div>
                <div className="p-2 h-full">
                  <div
                    className="font-bold text-lg mt-1 overflow-hidden text-ellipsis"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {article.title}
                  </div>
                </div>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <div className="relative w-full" style={{ paddingBottom: "45%" }}>
                  <Image
                    src={article.urlToImage ?? ""}
                    alt="Article Image"
                    className="absolute inset-0 w-full h-full rounded-md object-cover"
                    layout="fill"
                    unoptimized
                  />
                </div>
                <AlertDialogTitle>{article.title}</AlertDialogTitle>
                <div>{article.publishedAt}</div>
                <div className="flex justify-end mt-2">
                  <div className={sentimentClass}>
                    {sentiment === "negative" && "negative"}
                    {sentiment === "neutral" && "normal"}
                    {sentiment === "positive" && "positive"}
                  </div>
                </div>
              </AlertDialogHeader>
              <AlertDialogDescription className="max-h-48 overflow-y-auto">
                {article.content}
              </AlertDialogDescription>
              <AlertDialogFooter>
                <div className="flex justify-center">
                  <AlertDialogCancel>
                    <X />
                  </AlertDialogCancel>
                </div>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        );
      })}
    </div>
  );
};

export default CategoryRatioCard02;

const badge = ctl(`
  inline-block
  p-1
  text-xs
  font-bold
  text-center
  whitespace-nowrap
  align-baseline
  rounded-md
`);

const badgeNegative = ctl(`
  ${badge}
  text-white
  bg-red-600
`);

const badgeNeutral = ctl(`
  ${badge}
  text-white
  bg-gray-600
`);

const badgePositive = ctl(`
  ${badge}
  text-white
  bg-green-600
`);

const notificationDot = ctl(`
  absolute
  -top-4
  -right-2
  h-6
  w-6
  bg-green-500
  rounded-full
  my-1
`);

