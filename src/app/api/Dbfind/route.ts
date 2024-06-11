import { NextRequest, NextResponse } from "next/server";
import { connectTodayNewsDB } from "@/database/dbConnect";
import { Top_News_Society } from "@/database/models/M_Top10";

/**
 * @description
 * @param {NextRequest} req
 * @returns {NextResponse}
 */
export async function GET(req: NextRequest) {
  await connectTodayNewsDB();
  console.log("Top News Database connected");

  try {
    const articles = await Top_News_Society.find({});
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { message: "Error fetching articles" },
      { status: 500 }
    );
  }
}
