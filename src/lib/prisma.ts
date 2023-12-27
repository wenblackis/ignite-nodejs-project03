import { env } from '@/env'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  //Uses log only on delevopment mode
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})