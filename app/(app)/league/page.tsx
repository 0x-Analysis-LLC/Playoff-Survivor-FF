
import Navbar from "../../../components/menus/navbar"
import Standings from "../../../components/cards/standings"
import Players from "../../../components/cards/players"
import DropdownMenu from "../../../components/menus/dropdown"
import MobileMenu from "../../../components/menus/mobilemenu"

export default function LeaguePage(){

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
            <div className="md:flex flex-grow md:m-6 h-full justify-center">
                <Standings />
                <Players />
            </div>
        </div>
    )
}