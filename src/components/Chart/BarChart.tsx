import React from "react";
import { Bar } from "react-chartjs-2";
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
interface AllCountData {
  category: string;
  count: number;
}

interface BarChartProps {
  data: AllCountData[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        label: "Article Count",
        data: data.map((item) => item.count),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Category-wise Article Count</CardTitle>
        <CardDescription>Number of articles in each category</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ height: "400px", width: "100%" }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </CardContent>
      <CardFooter>
        <div className="grid grid-cols-2 gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: chartData.datasets[0].backgroundColor }}
              ></span>
              <p className="text-lg font-semibold text-gray-700">
                {item.category}: {item.count}건
              </p>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default BarChart;
