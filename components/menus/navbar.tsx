import {   Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarLabel,
    MenubarCheckboxItem,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarPortal,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarGroup,
    MenubarSub,
    MenubarShortcut, } from "@/components/ui/menubar"
import Link from "next/link"

export default function Navbar(){
    return (
        <Menubar className = "w-1/2 mx-auto flex justify-center items-center mt-10 py-10 bg-primary text-primary-foreground md:text-lg xl:text-xl">
            <MenubarMenu>
            <Link href={'/league'} className="hover:text-blue-500 md:px-8 xl:px-24">League</Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link href={'/team'} className="hover:text-blue-500 md:px-8 xl:px-24">Team</Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link href='/playoffs' className="hover:text-blue-500 md:px-8 xl:px-24">Playoffs</Link>
            </MenubarMenu>
        </Menubar>
    )

}