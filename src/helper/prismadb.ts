import { PrismaClient } from "@prisma/client";

//Prisma 클라이언트 초기화
declare global{
    var prisma: PrismaClient;
}

//Prisma 클라이언트 인스턴스화
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client  // 4. Prisma 클라이언트 외부 사용을 위해 수출