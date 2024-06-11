export interface Article {
  urlToImage: string;
  title: string;
  content: string;
  publishedAt?: string;
  newsurlList: string[]; // 추가된 부분
  sentiment?: string; // 감정 분석 결과를 위한 속성
}

export interface AspectRatioCardProps {
  articles: Article[];
}
