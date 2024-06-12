/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { NextPage } from "next";
import { TopCard } from "@/components/NewsCard/TopCard";

const RankingPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full flex flex-col items-center rounded-lg bg-white border border-cyan-800 shadow-md p-4 mt-4">
        <div className="flex items-center mb-4">
          {/* <Lottie loop animationData={Animation02} play style={{ width: 100, height: 100 }} /> */}
          <img src="/images/ranking.gif" alt="Animation" style={{ width: 100, height: 100 }} />
          <div className="ml-4 text-center">
            <h1 className="text-2xl font-bold">TOP10 News Ranking</h1>
            <p>
              "Top10 news ranking shows popular Top10 news in real time, categorized by different
              news categories."
            </p>
          </div>
        </div>
      </div>
      <TopCard />
    </div>
  );
};

export default RankingPage;
