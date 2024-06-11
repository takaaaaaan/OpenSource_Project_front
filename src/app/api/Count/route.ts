import { NextRequest, NextResponse } from "next/server";
import { connectIntegrationDB } from "@/database/dbConnect";
import IntegratedNewsArticle from "@/database/models/Integratednews";
import CountCollection from "@/database/models/Count";

const fetchSentiment = async (content: string) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/sentiment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.sentiment;
  } catch (error) {
    console.error("Failed to fetch sentiment:", error);
    return "neutral";
  }
};

/**
 * @description
 * @param {NextRequest} req
 * @returns {NextResponse}
 */
export async function GET(req: NextRequest) {
  await connectIntegrationDB();
  console.log("Top News Database connected");

  try {
    const articles = await IntegratedNewsArticle.find({});
    console.log(articles);

    const sentimentCount = { positive: 0, neutral: 0, negative: 0 };

    const sentimentPromises = articles.map(async (article) => {
      const sentiment = await fetchSentiment(article.full_contents);
      return sentiment;
    });

    const sentiments = await Promise.all(sentimentPromises);

    sentiments.forEach((sentiment) => {
      if (sentiment === "positive") {
        sentimentCount.positive += 1;
      } else if (sentiment === "neutral") {
        sentimentCount.neutral += 1;
      } else if (sentiment === "negative") {
        sentimentCount.negative += 1;
      }
    });

    const newCount = new CountCollection(sentimentCount);
    await newCount.save();

    return NextResponse.json(sentimentCount);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { message: "Error fetching articles" },
      { status: 500 }
    );
  }
}