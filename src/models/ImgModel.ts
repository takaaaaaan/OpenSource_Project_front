// src\models\ImgModel.ts
import mongoose, { Schema, Document } from 'mongoose';

interface ISource {
  id: string | null;
  name: string;
}

interface IArticle extends Document {
  source: ISource;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string | null;
}

const sourceSchema = new Schema<ISource>({
  id: { type: String, default: null },
  name: { type: String, required: true }
});

const articleSchema = new Schema<IArticle>({
  source: { type: sourceSchema, required: true },
  author: { type: String, default: null },
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  urlToImage: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  content: { type: String, default: null }
});
// krtopnews
const ArticleModel = mongoose.models.krtopnews as mongoose.Model<IArticle> || mongoose.model<IArticle>('krtopnews', articleSchema, "krtopnews");

export default ArticleModel;
