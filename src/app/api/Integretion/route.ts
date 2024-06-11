import { NextRequest, NextResponse } from "next/server";
import { connectIntegrationDB } from "@/database/dbConnect";
import IntegratedNewsArticle from "@/database/models/Integratednews";

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
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { message: "Error fetching articles" },
      { status: 500 }
    );
  }
}
