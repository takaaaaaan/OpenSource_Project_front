// src\app\api\ArticleData\route.ts
import connectToDatabase from '../../../lib/dbConnect';
import NewsModel from '../../../models/articleModel';

// GETメソッドの処理を担当する関数
export async function GET(req:Request, res: Response) {
    try {
        await connectToDatabase();
        // 特定のIDを持つドキュメントを検索
        const document = await NewsModel.findById('65f9530bae17c3259b0d253e');
        // console.log(document);
        if (!document) {
            return Response.json({ message: 'ドキュメントが見つかりませんでした。'  }, { status: 200 })
        }

        // 'articles'フィールドから必要な情報を抽出
        const articles = document.articles.map(articles => ({
            urlToImage: articles.urlToImage,
            title: articles.title,
            description: articles.description
        }));
        return Response.json({articles})
    } catch (error) {
        console.error('Failed to fetch articles:', error);
        return Response.json({ message: '記事の取得中にエラーが発生しました。'   }, { status: 200 })
    }
}
