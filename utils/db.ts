import { PrismaClient } from '@prisma/client';
// creating a client and attiching it to global - mostly because of serverless environemnts and connection pooling
// dbs were not meant to be in a serverless environment by default
// we are doing this to reuse the connection
let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma