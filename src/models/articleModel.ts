import mongoose, { Schema, Document } from 'mongoose';

// Source의 스키마 및 타입 정의
interface ISource {
  id: string;
  name: string;
}

const SourceSchema: Schema<ISource> = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

// Article의 스키마 및 타입 정의
interface IArticle extends Document {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

const ArticleSchema: Schema<IArticle> = new mongoose.Schema({
  source: { type: SourceSchema, required: true },
  author: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  urlToImage: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  content: { type: String, required: true },
});

// News의 스키마 및 타입 정의
interface INews extends Document {
  status: string;
  totalResults: number;
  articles: IArticle[];
}

const NewsSchema: Schema<INews> = new mongoose.Schema({
  status: { type: String, required: true },
  totalResults: { type: Number, required: true },
  articles: { type: [ArticleSchema], required: true },
});

// 모델의 생성 및 내보내기
const NewsModel = mongoose.models.URLDATA as mongoose.Model<INews> || mongoose.model<INews>('URLDATA', NewsSchema, "URLDATA");

export default NewsModel;
