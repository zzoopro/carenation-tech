import Link from "next/link"

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center space-x-6 text-md text-slate-500">                
            <Link href={"/articles"}>블로그</Link>
            <Link href={"/introduce"}>프론트 팀소개</Link>
        </nav>
    )
}

export default Navigation