import Link from 'next/link'
import { RegisterForm } from './form'

export default function RegisterPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white sm:bg-background">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-secondary rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl">Create your Account</h1>
        <RegisterForm />
        <p className="text-center">
          Have an account?{' '}
          <Link className="text-blue-500 hover:underline" href="/login">
            Sign in
          </Link>{' '}
        </p>
      </div>
    </div>
  )
}