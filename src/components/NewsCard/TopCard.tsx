"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

interface NewsContent {
  title: string;
  url: string;
  image: string;
  content: string;
}

interface NewsData {
  _id: string;
  cluster_id: number;
  news_content: NewsContent[];
  date: string;
}

type Category = "Politics" | "Society" | "World";

export const TopCard: React.FC<CardProps> = ({ className, ...props }) => {
  const [rankingsdata, setRankingsData] = useState<Record<Category, NewsData[]>>({
    Politics: [],
    Society: [],
    World: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories: Category[] = ["Politics", "Society", "World"];
        const promises = categories.map((category) =>
          fetch(`/api/Top10?category=${category}`).then((res) => res.json())
        );

        const results = await Promise.all(promises);

        const newData = categories.reduce(
          (acc, category, index) => {
            acc[category] = results[index];
            return acc;
          },
          {} as Record<Category, NewsData[]>
        );

        console.log("Fetched data:", newData); // 取得したデータをコンソールに表示
        setRankingsData(newData);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4">TOP10 뉴스 랭킹</h1>
      <div className="grid grid-cols-3 gap-8">
        {Object.keys(rankingsdata).map((category) => (
          <Card key={category} className={cn("w-full", className)} {...props}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
              <CardDescription>오늘의 주요 뉴스</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                {rankingsdata[category as Category].slice(0, 10).map(
                  (newsData, index) =>
                    newsData.news_content.length > 0 && (
                      <a
                        key={newsData._id}
                        href={newsData.news_content[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-start pb-4 last:mb-0 last:pb-0"
                      >
                        <span className="flex-shrink-0 flex items-center justify-center text-[#007eff] w-6">
                          {index + 1}
                        </span>
                        <div className="flex flex-col">
                          <p className="text-sm font-medium leading-none line-clamp-1">
                            {newsData.news_content[0].title}
                          </p>
                        </div>
                        <p className="text-xs text-gray-500">({newsData.news_content.length})</p>
                      </a>
                    )
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
