import mongoose from "mongoose";

// 환경 변수에서 MongoDB URI 가져오기
const PRIMARY_DB_URI = process.env.PRIMARY_DB_URI as string;
const INTEGRATION_DB_URI = process.env.INTEGRATION_DB_URI as string;
const TODAY_NEWS_DB_URI = process.env.TODAY_NEWS_DB_URI as string;

if (!PRIMARY_DB_URI) {
  throw new Error(
    "Please define the PRIMARY_DB_URI environment variable inside .env.local"
  );
}

async function connectPrimaryDB() {
  await mongoose.connect(PRIMARY_DB_URI);
}

async function connectIntegrationDB() {
  await mongoose.connect(INTEGRATION_DB_URI);
}

async function connectTodayNewsDB() {
  await mongoose.connect(TODAY_NEWS_DB_URI);
}

export { connectPrimaryDB, connectIntegrationDB, connectTodayNewsDB };
// // export default dbConnect;
// import mongoose from 'mongoose';
// // const MONGODB_URI='mongodb+srv://theBuleocean:opensource418@newssun.ts97rhi.mongodb.net/news_database?retryWrites=true&w=majority'
// const MONGODB_URI = process.env.MONGODB_URI as string;
// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// async function DbConnect() {
//   await mongoose.connect(MONGODB_URI);
// }

// export default DbConnect;
