import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/database/dbConnect';
import { Integrated_News_Society } from '@/database/models/M_gce';
import { createClient } from '@google/maps';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
const googleMapsClient = createClient({
  key: GOOGLE_MAPS_API_KEY,
});

/**
 * /api/Integrated
 * @description 데이터베이스에서 모든 기사를 가져와 JSON 형식으로 반환하고, '장소' 단어 다음의 단어를 지오코딩한다.
 * @param {NextRequest} req - 요청 객체. 쿼리 파라미터를 포함할 수 있다.
 * @returns {NextResponse} 데이터베이스에서 가져온 기사 데이터를 포함한 응답. 오류가 발생한 경우 오류 메시지를 포함한 응답을 반환한다.
 */
export async function GET(req: NextRequest) {
  await dbConnect();
  console.log('NewDatabase connected');

  try {
    const articles = await Integrated_News_Society.find({});
    const results = [];

    for (const article of articles) {
      const { full_contents } = article;

      // "장소: "라는 단어의 인덱스를 찾기
      const placeIndex = full_contents.indexOf('장소: ');

      if (placeIndex !== -1) {
        // "장소: " 단어 다음의 단어 추출
        const nextWord = extractNextWord(full_contents, placeIndex);

        // 抽出された単語をコンソールにログ出力
        // console.log(`Extracted word: ${nextWord}`);

        if (nextWord) {
          // geocoder를 사용하여 위치 정보를 가져오기
          const locationData = await geocodeLocation(nextWord);
          results.push({ article, location: locationData });
        } else {
          results.push({ article, location: null });
        }
      } else {
        results.push({ article, location: null });
      }
    }

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ message: 'Error fetching articles' }, { status: 500 });
  }
}

function extractNextWord(text: string, index: number): string | null {
  const afterPlaceText = text.slice(index + 4).trim(); // "장소: "の後のテキストを取得
  const words = afterPlaceText.split(/\s+/);
  return words.length > 0 ? words[0] : null;
}

async function geocodeLocation(location: string): Promise<{ lat: number; lng: number } | null> {
  return new Promise((resolve, reject) => {
    googleMapsClient.geocode({ address: location }, (err, response) => {
      if (err) {
        console.error('Geocoding error:', err);
        reject(err);
      } else {
        resolve(response.json.results[0]?.geometry.location || null);
      }
    });
  });
}
