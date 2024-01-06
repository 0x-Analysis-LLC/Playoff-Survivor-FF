import Navbar from "@/components/menus/navbar"
import DropdownMenu from "@/components/menus/dropdown"
import MobileMenu from "@/components/menus/mobilemenu"
import Playoffs from "@/components/cards/playoffs"

export default function PlayoffsPage(){
    return(
        <div className="relative h-screen w-screen flex flex-col">
            <div className="hidden md:block">
                <Navbar />
                <div className="absolute top-14 xl:right-28 z-10">
                    <DropdownMenu />
                </div>
            </div>
            <div className = "block md:hidden">
                <MobileMenu />
            </div>
            <div className="flex flex-grow md:m-6 justify-center items-center">
                <Playoffs />
            </div>
        </div>
    )

}