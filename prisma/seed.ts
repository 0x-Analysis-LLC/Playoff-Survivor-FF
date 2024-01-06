import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const password = await hash('test',12)
  const user = await prisma.user.upsert({
    where: { email: 'fantasy@fantasy.com' },
    update: {},
    create: {
      email: 'fantasy@fantasy.com',
      username: 'fantasy1',
	  password
    },
  })
  console.log({ user })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })