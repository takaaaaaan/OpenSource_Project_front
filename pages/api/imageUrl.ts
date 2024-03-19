// pages/api/imageUrl.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../src/lib/dbConnect';
import NewsModel from '../../src/models/articleModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  try {
    // NewsModelを使用してデータベースから記事を取得し、urlToImageのみを抽出
    const news = await NewsModel.findById('65f9530bae17c3259b0d253e');
    const imageUrls = news?.articles.map(article => article.urlToImage);
    res.status(200).json({ imageUrls });
  } catch (error) {
    console.error('Failed to fetch image URLs:', error);
    res.status(500).json({ message: '画像URLの取得中にエラーが発生しました。' });
  }
}


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         await connectToDatabase();
//         const articles = await ArticleModel.find();
//         res.status(200).json(articles);
//     } catch (error) {
//         console.error('Failed to fetch articles:', error);
//         res.status(500).json({ message: '記事の取得中にエラーが発生しました。' });
//     }
// }
