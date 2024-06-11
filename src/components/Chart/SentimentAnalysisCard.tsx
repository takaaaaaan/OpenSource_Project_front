import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// 型定義
interface SentimentData {
  positive: number;
  neutral: number;
  negative: number;
}

interface SentimentAnalysisCardProps {
  data: SentimentData | null;
  chartData: any; // chart.jsのデータ型
  chartOptions: any; // chart.jsのオプション型
}

const SentimentAnalysisCard: React.FC<SentimentAnalysisCardProps> = ({ data, chartData, chartOptions }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sentiment Analysis Results</CardTitle>
        <CardDescription>Overview of sentiment analysis on recent news articles</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ height: "400px", width: "400px" }}>
          <Pie data={chartData} options={chartOptions} />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col space-y-1.5">
          <p>Updated regularly to reflect the latest sentiment trends.</p>
          {data && (
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-green-500"></span>
                <p className="text-lg font-semibold text-gray-700">Positive: {data.positive}건</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                <p className="text-lg font-semibold text-gray-700">Neutral: {data.neutral}건</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-red-500"></span>
                <p className="text-lg font-semibold text-gray-700">Negative: {data.negative}건</p>
              </div>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default SentimentAnalysisCard;
