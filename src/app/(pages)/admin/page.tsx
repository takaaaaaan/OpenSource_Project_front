"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "chart.js/auto";
import SentimentAnalysisCard from "@/components/Chart/SentimentAnalysisCard"; // 新しいコンポーネントをインポート
import BarChart from "@/components/Chart/BarChart"; // 新しいコンポーネントをインポート
import Newscluster from "@/components/Admin_Card/Newscluster";
import Integraded_news from "@/components/Admin_Card/Integraded_news";

// 型定義
interface SentimentData {
  positive: number;
  neutral: number;
  negative: number;
}

interface AllCountData {
  _id: string;
  category: string;
  count: number;
}

const AdminPage: React.FC = () => {
  const router = useRouter();
  const [sentimentData, setSentimentData] = useState<SentimentData | null>(null);
  const [allCountData, setAllCountData] = useState<AllCountData[]>([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    } else {
      setTimeout(() => {
        fetch("/api/Count")
          .then((response) => response.json())
          .then((data: SentimentData) => {
            setSentimentData(data);
          })
          .catch((error) => {
            console.error("Error fetching sentiment data:", error);
          });
      }, 500); // 500ミリ秒の遅延を追加

      setTimeout(() => {
        fetch("/api/AllCount")
          .then((response) => response.json())
          .then((data: AllCountData[]) => {
            setAllCountData(data);
          })
          .catch((error) => {
            console.error("Error fetching all count data:", error);
          });
      }, 1000); // 1000ミリ秒の遅延を追加
    }
  }, [router]);

  const sentimentChartData = sentimentData
    ? {
        labels: ["Positive", "Neutral", "Negative"],
        datasets: [
          {
            data: [sentimentData.positive, sentimentData.neutral, sentimentData.negative],
            backgroundColor: ["#4CAF50", "#3B82F6", "#F44336"], // bg-green-500, bg-blue-500, bg-red-500
            hoverBackgroundColor: ["#66BB6A", "#60A5FA", "#E57373"], // bg-green-400, bg-blue-400, bg-red-400
          },
        ],
      }
    : null;

  const sentimentChartOptions = {
    maintainAspectRatio: false,
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-4 h-full w-1/3">
          <Newscluster />
          <Integraded_news />
        </div>

        {sentimentChartData ? (
          <div className=" h-full w-1/3">
            <SentimentAnalysisCard
              data={sentimentData}
              chartData={sentimentChartData}
              chartOptions={sentimentChartOptions}
            />
          </div>
        ) : (
          <p>Loading Sentiment Data...</p>
        )}
        {allCountData.length > 0 ? (
          <div className=" h-full w-1/3">
            <BarChart data={allCountData} />
          </div>
        ) : (
          <p>Loading Article Count Data...</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
