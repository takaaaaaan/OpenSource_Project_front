// pages/api/ArticleData.ts
// http://localhost:3000/api/ArticleData
import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../src/lib/dbConnect';
import NewsModel from '../../src/models/articleModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectToDatabase();
        // 特定のIDを持つドキュメントを検索
        const document = await NewsModel.findById('65f9530bae17c3259b0d253e');

        if (!document) {
            return res.status(404).json({ message: 'ドキュメントが見つかりませんでした。' });
        }

        // 'articles'フィールドから必要な情報を抽出
        const articles = document.articles.map(article => ({
            urlToImage: article.urlToImage,
            title: article.title,
            description: article.description
        }));

        res.status(200).json(articles);
    } catch (error) {
        console.error('Failed to fetch articles:', error);
        res.status(500).json({ message: '記事の取得中にエラーが発生しました。' });
    }
}
