"use client";
import React, { useEffect, useState } from "react";
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

// ArticleDataのデータ構造を反映した型定義
interface Article {
  urlToImage: string;
  title: string;
  description: string;
}

const AspectRatioCard: React.FC = () => {
  // Article型の配列として状態を管理
  const [ArticleData, setArticleData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticleData = async () => {
      const response = await fetch("/api/ArticleData");
      const data = await response.json();
      console.log(data);
      setArticleData(data.articles); // レスポンスデータをそのまま状態にセット
    };

    fetchArticleData();
  }, []);

  return (
    // <div className="grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5 overflow-y-auto h-screen"></div>
    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-5 overflow-y-auto h-screen">
      {ArticleData.map((article, index) => (
        <AlertDialog key={index}>
          <AlertDialogTrigger asChild>
            <div className="cursor-pointer">
              <Card className="w-full">
                <AspectRatio ratio={20 / 9}>
                  <Image
                    src={article.urlToImage}
                    alt="Article Image"
                    className="rounded-md object-cover"
                    layout="fill"
                  />
                </AspectRatio>
                <div className="font-bold text-lg mt-1">{article.title}</div>
                <div className="text-gray-600 text-sm mt-1">{article.description}</div>
              </Card>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AspectRatio ratio={20 / 9}>
                <Image
                  src={article.urlToImage}
                  alt="Article Image"
                  className="rounded-md object-cover"
                  layout="fill"
                />
              </AspectRatio>
              <AlertDialogTitle>{article.title}</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>{article.description}</AlertDialogDescription>
            <AlertDialogFooter>
              <div className="flex justify-center">
                <AlertDialogCancel>
                  <X />
                  {/* <span className="text-white hover:text-gray-200">キャンセル</span> */}
                </AlertDialogCancel>
              </div>
              {/* <AlertDialogAction>続行</AlertDialogAction> */}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ))}
    </div>
  );
};

export default AspectRatioCard;
