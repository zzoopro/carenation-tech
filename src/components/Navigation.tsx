"use client"
import { ARTICLES, LIBRARY } from "@/utils/contants";
import { cls } from "@/utils/utility";
import Link from "next/link"
import { usePathname } from 'next/navigation';


const Navigation = () => {   
    const pathname = usePathname()
    
    return (        
        <nav className="flex justify-between items-center space-x-6 text-md text-slate-600">                
            <Link href={`/${ARTICLES}`} className={cls(pathname === `/${ARTICLES}` ? "font-semibold" : "")}>블로그</Link>
            <Link href={`/${LIBRARY}`} className={cls(pathname === `/${LIBRARY}` ? "font-semibold" : "")}>라이브러리</Link>
        </nav>
    )
}

export default Navigation