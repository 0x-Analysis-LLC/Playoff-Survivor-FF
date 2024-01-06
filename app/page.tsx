import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com'
    }
  })

  return (
    <main>
      <div>Hello, {user?.username}</div>
      <pre>{JSON.stringify(session)}</pre>
    </main>
  )
}
