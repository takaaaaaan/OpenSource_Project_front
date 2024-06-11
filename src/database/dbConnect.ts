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
