import { PrismaClient } from '@prisma/client'

interface CustomPrismaClient extends PrismaClient {
  $use(arg: any): any
}

declare global {
  var prisma: CustomPrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient() as CustomPrismaClient

if (process.env.NODE_ENV !== 'production') global.prisma = prisma