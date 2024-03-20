import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      setArticleData(data); // レスポンスデータをそのまま状態にセット
    };

    fetchArticleData();
  }, []);

  return (
    // <div className="grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5 overflow-y-auto h-screen"></div>
    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 lg:gap-5 overflow-y-auto h-screen">
      {ArticleData.map((article, index) => (
        <div key={index} className="mb-4">
          <Card className="w-full">
            <AspectRatio ratio={20 / 9}>
              <Image
                src={article.urlToImage}
                alt="Article Image"
                className="rounded-md object-cover"
                layout="fill"
              />
            </AspectRatio>
            {/* titleとdescriptionをTailwind CSSでスタイル適用 */}
            <div className="font-bold text-lg mt-1">{article.title}</div>
            <div className="text-gray-600 text-sm mt-1">
              {article.description}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AspectRatioCard;
