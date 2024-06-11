import { NextRequest, NextResponse } from "next/server";
import { connectPrimaryDB } from "@/database/dbConnect";
import { Top_News_Society } from "@/database/models/M_Top10";
/**
 * /api/CategoryNewsArticle
 * @description 지정된 카테고리에 따라 해당 컬렉션에서 전체 데이터를 가져와 JSON 형식으로 반환한다.
 * @param {NextRequest} req - 요청 객체. 카테고리를 포함한 쿼리 파라미터를 포함한다.
 * @returns {NextResponse} 카테고리를 기반으로 가져온 기사 데이터를 포함한 응답. 카테고리가 유효하지 않은 경우 오류 메시지를 포함한 응답을 반환한다.
 */
export async function GET(req: NextRequest) {
  await connectPrimaryDB();
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
