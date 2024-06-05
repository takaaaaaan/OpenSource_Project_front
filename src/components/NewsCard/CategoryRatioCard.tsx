"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
import Lottie from "react-lottie-player";
import lottieJson from "../../../public/default-animation.json";

// ArticleDataのデータ構造を反映した型定義
interface Article {
  urlToImage: string;
  title: string;
  content: string;
  publishedAt?: string;
}

interface AspectRatioCardProps {
  articles: Article[];
}

const ImageUrl = (urlToImage: string) => {
  return urlToImage && urlToImage !== "이미지 없음";
};


const CategoryRatioCard: React.FC<AspectRatioCardProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-5 overflow-y-auto h-screen">
      {articles.map((article, index) => (
        <AlertDialog key={index}>
          <AlertDialogTrigger asChild>
            <div className="border border-gray-300 rounded-md">
              <div className="w-full h-15">
                <AspectRatio ratio={20 / 9}>
                  {isValidImageUrl(article.urlToImage) ? (
                    <Image
                      src={(article.urlToImage)}
                      alt="Article Image"
                      className="rounded-md object-cover"
                      layout="fill"
                    />
                  ) : (
                    <Lottie loop animationData={lottieJson} play />
                  )}
                </AspectRatio>
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
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AspectRatio ratio={20 / 9}>
                {isValidImageUrl(article.urlToImage) ? (
                  <Image
                    src={(article.urlToImage)}
                    alt="Article Image"
                    className="rounded-md object-cover"
                    layout="fill"
                  />
                ) : (
                  <Lottie loop animationData={lottieJson} play />
                )}
              </AspectRatio>
              <AlertDialogTitle>{article.title}</AlertDialogTitle>
              <div>{article.publishedAt}</div>
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
      ))}
    </div>
  );
};

export default CategoryRatioCard;
