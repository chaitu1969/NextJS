import { PrismaClient } from "@prisma/client";

const prismaClientSigleton = () => {
  try {
    return new PrismaClient();
  } catch (error) {
    console.error("Failed to initialize PrismaClient:", error);
    throw error;
  }
};

declare global {
  // eslint-disable-next-line no-var
  var prisma: undefined | ReturnType<typeof prismaClientSigleton>;
}

const prisma = globalThis.prisma ?? prismaClientSigleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;
