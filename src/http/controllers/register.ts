import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { hash } from 'bcryptjs'
import { FastifyReply, FastifyRequest } from 'fastify'


export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)
  const password_hash = await hash(password, 6)
  const hasUserWithEmail = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (hasUserWithEmail) {
    return reply.status(409).send('Email in use')
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password_hash,
    },
  })

  // ORM - Object Relational Mapper
  return reply.status(201).send()
}