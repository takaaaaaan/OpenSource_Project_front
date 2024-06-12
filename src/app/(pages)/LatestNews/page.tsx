"use client";
import React, { useEffect, useState } from "react";
import CategorizeNavigation from "@/components/CategorizeNavigation";
import CategoryRatioCard02 from "@/components/NewsCard/CategoryRatioCard02";
import Lottie from "react-lottie-player";
import { PaginationDemo } from "@/components/Pagination";
import lottieJson from "../../../../public/lottie/loading.json";
import { Article } from "../../../../types/Article"; // Import the correct Article type
import Animation02 from "../../../../public/lottie/Animation02.json";
import { Separator } from "@/components/ui/separator";

const checkImageUrl = (url: string) => {
  if (!url || url === "이미지 없음") {
    return "/default-image.jpg";
  }
  return url;
};

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageArticles, setPageArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage = 30;

  useEffect(() => {
    const fetchArticleData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/CategoryNewsAricle${selectedCategory ? `?category=${selectedCategory}` : ""}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          const formattedData = data.map((item: any) => ({
            urlToImage: checkImageUrl(item.urlToImage),
            title: item.title,
            content: item.content,
            publishedAt: item.publishedAt,
            sentiment: "neutral",
            newsurlList: item.newsurlList || "", // Ensure this property is included
          }));
          setArticles(formattedData);
          setPageArticles(formattedData.slice(0, articlesPerPage));
        } else {
          console.error("Invalid data structure: ", data);
        }
      } catch (error) {
        console.error("Failed to fetch articles: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleData();
  }, [selectedCategory]);

  useEffect(() => {
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    setPageArticles(articles.slice(indexOfFirstArticle, indexOfLastArticle));
  }, [currentPage, articles]);

  const categories = ["경제", "정치", "사회", "생활", "세계", "IT", "기타"];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // 카테고리 변경 시 페이지 초기화
  };

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= Math.ceil(articles.length / articlesPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="w-full flex flex-col items-center bg-white border border-cyan-800 shadow-md p-4 mt-4">
        <div className="flex items-center mb-4">
          <Lottie loop animationData={Animation02} play style={{ width: 100, height: 100 }} />
          <div className="ml-4 text-center">
            <h1 className="text-2xl font-bold">Competitions</h1>
            <p>
              Grow your data science skills by competing in our exciting competitions. Find help in
              the documentation or learn about Community Competitions.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <CategorizeNavigation categories={categories} onSelect={handleCategorySelect} />
      </div>
      <Separator className="my-1" />

      {loading ? (
        <div className="flex justify-center items-center flex-grow">
          <Lottie loop animationData={lottieJson} play style={{ width: 200, height: 200 }} />
        </div>
      ) : (
        <CategoryRatioCard02 articles={pageArticles} />
      )}
      <Separator className="my-1" />
      <div className="fixed bottom-0 w-full flex justify-center bg-white  shadow-md z-50">
        <PaginationDemo
          paginate={paginate}
          currentPage={currentPage}
          totalPages={Math.ceil(articles.length / articlesPerPage)}
        />
      </div>
    </div>
  );
}
