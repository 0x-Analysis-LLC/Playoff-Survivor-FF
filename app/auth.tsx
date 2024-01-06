'use client'

import { signIn, signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"



export const LoginButton = ({ className }) => {
  return <Button onClick={() => signIn()} className={`w-full ${className}`}>Sign in</Button>
}

export const LogoutButton = ({ className }) => {
  return <Button onClick={() => signOut()} variant = 'secondary' className={`w-full ${className}`}>Sign Out</Button>
}