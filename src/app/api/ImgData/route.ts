// src\app\api\ImgData\route.ts
import { ObjectId } from 'mongodb'; // ObjectIdの型をインポート
import connectToDatabase from '../../../lib/dbConnect';
import ArticleModel from '../../../models/ImgModel';

// 記事の型を定義
interface IArticle {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string | null;
}

  // documentの型を定義（IArticleの配列を持つarticlesプロパティを含む）
interface IDocument {
    _id: ObjectId;
    articles: IArticle[];
}


// GETメソッドの処理を担当する関数
export async function GET(req:Request, res: Response) {
    try {
        await connectToDatabase();
        // 特定のIDを持つドキュメントを検索し、必要なフィールドを選択
        const document = await ArticleModel.findOne().lean<IDocument>();
        // console.log(document);
        if (!document) {
            return Response.json({ message: 'ドキュメントが見つかりませんでした。'  }, { status: 200 })
        }

        // `articles` 配列から `title` と `description` を抽出
        const articlesData = document.articles.map(({ title, description,url,urlToImage,publishedAt,content }) => ({
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content
        }));

        return Response.json({articlesData})
    } catch (error) {
        console.error('Failed to fetch articles:', error);
        return Response.json({ message: '記事の取得中にエラーが発生しました。'   }, { status: 200 })
    }
}
