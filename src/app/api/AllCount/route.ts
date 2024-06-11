import { NextRequest, NextResponse } from 'next/server';
import {connectPrimaryDB} from '@/database/dbConnect';
import  AllCountCollection from '@/database/models/All_Count';

export async function GET(req: NextRequest) {
  await connectPrimaryDB();
  console.log('AllCount Database connected');

  try {
    const articles = await AllCountCollection.find({});
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ message: 'Error fetching articles' }, { status: 500 });
  }
}