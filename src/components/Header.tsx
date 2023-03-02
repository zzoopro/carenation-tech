import Link from "next/link"
import Navigation from "./Navigation"

const Header = () => {
    return (
        <header className="flex justify-center border-b bg-neutral-50">
            <div id="header-wrap" className="flex justify-between max-w-5xl w-full h-14 items-center">
                <h1 className="font-bold text-lg text-[#7E4F40]">
                    <Link href={"/"}>Carenation Tech</Link>
                </h1>           
                <Navigation />
            </div>            
        </header>
    )    
}

export default Header