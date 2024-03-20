// pages/api/Content.ts
// http://localhost:3000/api/Content
import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../src/lib/dbConnect';
import NewsModel from '../../src/models/articleModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  try {
    // NewsModelを使用してデータベースから記事を取得し、urlToImageのみを抽出
    const news = await NewsModel.findById('65f9530bae17c3259b0d253e');
    const Contents = news?.articles.map(article => article.content);
    res.status(200).json({ Contents });
  } catch (error) {
    console.error('Failed to fetch Contents:', error);
    res.status(500).json({ message: 'Contentsの取得中にエラーが発生しました。' });
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
