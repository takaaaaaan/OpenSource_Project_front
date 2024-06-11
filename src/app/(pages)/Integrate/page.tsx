"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CategorizeNavigation from "@/components/CategorizeNavigation";
import CategoryRatioCard03 from "@/components/NewsCard/CategoryRatioCard03";
import Lottie from "react-lottie-player";
import { PaginationDemo } from "@/components/Pagination";
import lottieJson from "../../../../public/lottie/loading.json";

type PaginationLinkProps = React.ComponentProps<typeof Link>;

interface Article {
  urlToImage: string;
  title: string;
  content: string;
  publishedAt?: string;
  newsurlList: string[]; // 추가된 부분
}

const checkImageUrl = (url: string) => {
  if (!url || url === "이미지 없음") {
    return "/default-image.jpg";
  }
  return url;
};

export default function SavedPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageArticles, setPageArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage = 20;

  useEffect(() => {
    const fetchArticleData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/Integretion");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          const formattedData = data.map((item: any) => ({
            urlToImage: checkImageUrl(item.Thumbnail_image),
            title: item.title,
            content: item.full_contents,
            publishedAt: item.publishedAt,
            newsurlList: item.newsurlList
          }));
          setArticles(formattedData);
          setPageArticles(formattedData.slice(0, articlesPerPage));
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



  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset page when category changes
  };

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= Math.ceil(articles.length / articlesPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">

      {loading ? (
        <div className="flex justify-center items-center flex-grow">
          <Lottie loop animationData={lottieJson} play style={{ width: 200, height: 200 }} />
        </div>
      ) : (
        <div className="flex-grow p-4">
          <CategoryRatioCard03 articles={pageArticles} />
        </div>
      )}

      <div className="fixed bottom-0 w-full flex justify-center bg-white py-2 shadow-md z-50" style={{ paddingRight: '16rem' }}>
        <PaginationDemo paginate={paginate} currentPage={currentPage} totalPages={Math.ceil(articles.length / articlesPerPage)} />
      </div>
    </div>
  );
}
