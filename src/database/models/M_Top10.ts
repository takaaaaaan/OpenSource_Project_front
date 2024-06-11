import mongoose from "mongoose";

// TopNewsSchema 정의
const TopNewsSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  cluster_id: { type: Number, required: true },
  news_content: { type: Array, required: true },
  date: { type: Date, required: true },
});

// 모델 생성
const Top_News_Politics =mongoose.models.Politics || mongoose.model("Politics", TopNewsSchema, "Politics");
const Top_News_Society =mongoose.models.Society || mongoose.model("Society", TopNewsSchema, "Society");
const Top_News_World =mongoose.models.World || mongoose.model("World", TopNewsSchema, "World");

export { Top_News_Politics ,Top_News_Society ,Top_News_World};