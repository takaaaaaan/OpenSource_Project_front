import mongoose from 'mongoose';

const NewsArticlesSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    category: { type: Number, required: true },
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true },
    publishedAt: { type: String, required: true }
  }
);

const NewsArticle_Economy = mongoose.models.NewsArticle_Economy || mongoose.model('NewsArticle_Economy', NewsArticlesSchema, '경제');
const NewsArticle_IT = mongoose.models.NewsArticle_IT || mongoose.model('NewsArticle_IT', NewsArticlesSchema, 'IT');
const NewsArticle_Other = mongoose.models.NewsArticle_Other || mongoose.model('NewsArticle_Other', NewsArticlesSchema, '기타');
const NewsArticle_Social = mongoose.models.NewsArticle_Social || mongoose.model('NewsArticle_Social', NewsArticlesSchema, '사회');
const NewsArticle_Life = mongoose.models.NewsArticle_Life || mongoose.model('NewsArticle_Life', NewsArticlesSchema, '생활');
const NewsArticle_Worlds = mongoose.models.NewsArticle_Worlds || mongoose.model('NewsArticle_Worlds', NewsArticlesSchema, '세계');
const NewsArticle_Government = mongoose.models.NewsArticle_Government || mongoose.model('NewsArticle_Government', NewsArticlesSchema, '정치');

export { NewsArticle_Economy, NewsArticle_IT, NewsArticle_Other, NewsArticle_Social, NewsArticle_Life, NewsArticle_Worlds, NewsArticle_Government };
