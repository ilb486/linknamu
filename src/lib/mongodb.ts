import { MongoClient } from "mongodb";

const globalForMongo = globalThis as unknown as {
  mongoClient?: Promise<MongoClient>;
};

// 개발 모드의 핫 리로드에도 연결이 늘어나지 않도록 전역에 보관한다
export function getClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
  globalForMongo.mongoClient ??= new MongoClient(uri).connect();
  return globalForMongo.mongoClient;
}

export async function getClicksCollection() {
  const client = await getClient();
  return client.db().collection<{ _id: string; count: number }>("clicks");
}
