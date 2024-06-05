"use client";
import CategorizeNavigation from "@/components/CategorizeNavigation";
import AspectRatioCard from "../components/AspectRatioCard";

export default function Home() {
  const categories = ["경제", "정치", "사회", "생활/문학", "세계", "스포츠", "IT"]; // 카테고리 목록을 정의합니다.

  const handleCategorySelect = (category: string) => {
    console.log(category);
  };
  return (
    <div>
      <div className="flex flex-row items-start">
        <CategorizeNavigation categories={categories} onSelect={handleCategorySelect} />
      </div>
    </div>
  );
}
