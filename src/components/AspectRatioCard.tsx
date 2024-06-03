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
import { Button } from "./ui/button";
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
      try {
        const response = await fetch("/api/ArticleData");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.articles) {
          setArticleData(data.articles); // レスポンスデータをそのまま状態にセット
        } else {
          console.error("Invalid data structure: ", data);
        }
      } catch (error) {
        console.error("Failed to fetch articles: ", error);
      }
    };

    fetchArticleData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-5 overflow-y-auto h-screen">
      {ArticleData && ArticleData.length > 0 ? (
        ArticleData.map((article, index) => (
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
                  </AlertDialogCancel>
                </div>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ))
      ) : (
        <div>No articles found</div>
      )}
    </div>
  );
};

export default AspectRatioCard;
