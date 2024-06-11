import React from "react";
import { NextPage } from "next";
import { TopCard } from "@/components/NewsCard/TopCard";

const RankingPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <TopCard />
    </div>
  );
};

export default RankingPage;
