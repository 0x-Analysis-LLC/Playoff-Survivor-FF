import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link"
import { LoginButton,LogoutButton } from "../../app/auth";
  

export default function MobileMenu (){

    return(
    <div className="fixed">
        <Sheet>
            <SheetTrigger>
                    <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14"><path d="M3 5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </SheetTrigger>
            <SheetContent side = "left" className="w-full">
                <SheetHeader>
                <SheetTitle>Fantasy Football App</SheetTitle>
                </SheetHeader>
            <div className="my-12">
                <Link href={'/league'} className="hover:text-blue-500 flex w-full text-2xl justify-center py-8">League</Link>
                <Link href={'/team'} className="hover:text-blue-500 flex w-full text-2xl justify-center py-8">Team</Link>
                <Link href={'/playoffs'} className="hover:text-blue-500 flex w-full text-2xl justify-center py-8">Playoffs</Link>
            </div>
            <div className ="mt-4">
            <LoginButton className = "rounded-lg my-5" />
            <LogoutButton className="rounded-lg my-5" />
            </div>
            </SheetContent>
        </Sheet>
    </div>
    )
}