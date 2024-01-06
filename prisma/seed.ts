import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const env_email = process.env.SEED_USER_EMAIL;
  const env_username = process.env.SEED_USER_USERNAME;
  const env_password = process.env.SEED_USER_PASSWORD;

  if (!env_email || !env_username || !env_password) {
    throw new Error('SEED_USER_EMAIL, SEED_USER_USERNAME, and SEED_USER_PASSWORD must be defined');
  }
  const password = await hash(env_password,12)
  const user = await prisma.user.upsert({
    where: { email: env_email},
    update: {},
    create: {
      email: env_email,
      username: env_password,
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