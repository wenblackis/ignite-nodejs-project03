import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'wenblackis',
    email: 'wenblack012@gmail.com',
  },
})
export const app = fastify()
