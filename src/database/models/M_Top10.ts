import mongoose from 'mongoose';

const NewsContentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    imageUrl: { type: String, required: true },
    content: { type: String, required: true },
  },
  { _id: false }
);

const TopNewsSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    cluster_id: { type: Number, required: true },
    news_content: { type: [[NewsContentSchema]], required: true },
    date: { type: Date, required: true },
  }
);

const Top_News_Society = mongoose.models.Top_News_Society || mongoose.model('Top_News_Society', TopNewsSchema, 'Top_Society');

export { Top_News_Society };
