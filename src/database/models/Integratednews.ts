import mongoose from "mongoose";

const Integrated_news_Schema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  newsurList: [{ type: String, required: true }], // 배열 필드
  full_contents: { type: String, required: true },
  Thumbnail_image: { type: String, required: true },
});

const IntegratedNewsArticle =
  mongoose.models.Society ||
  mongoose.model("Society", Integrated_news_Schema, "Society");

export default IntegratedNewsArticle;
