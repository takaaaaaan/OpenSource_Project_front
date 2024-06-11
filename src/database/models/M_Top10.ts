import mongoose from "mongoose";
import { array } from "zod";

// TopNewsSchema 정의
const TopNewsSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  cluster_id: { type: Number, required: true },
  news_content: { type: Array, required: true },
  date: { type: Date, required: true },
});

// 모델 생성
const Top_News_Society =
  mongoose.models.Society ||
  mongoose.model("Politics", TopNewsSchema, "Politics");

export { Top_News_Society };
