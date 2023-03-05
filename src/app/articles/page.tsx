import { ArticleMeta } from "@/types/types";
import { DateToString } from "@/utils/utility";
import fs from "fs"
import matter from 'gray-matter';
import Link from "next/link";

const Posts = () => {
    const articleNames = fs.readdirSync("./src/markdown/articles")
    const metas: ArticleMeta[] = articleNames.map((articleName: string) => {
        const file = fs.readFileSync(`./src/markdown/articles/${articleName}`, "utf-8")
        const mattered = matter(file)
        return mattered.data
    })

    return (        
        <ul className="flex flex-col space-y-[80px] my-20">                        
            {metas.map((meta, idx) => {
                return (
                    <Link href={`articles/${meta.path}`} key={idx}>
                        <div  className="group flex justify-between w-full h-[240px]">
                            {
                                meta.thumnail ? 
                                <img src={meta.thumnail} alt={meta.title} className="h-full aspect-square rounded-lg group-hover:-translate-y-3 transition"/> :
                                <div className="h-full aspect-square bg-slate-600 rounded-lg group-hover:-translate-y-3 transition"></div>
                            }
                            
                            <div className="flex flex-col w-[70%]">
                                <h3 className="text-4xl font-semibold text-slate-800 group-hover:text-blue-600">{meta.title}</h3>
                                <h4 className="text-md text-slate-500 font-medium mt-6">{meta.description}</h4>
                                <h5 className="text-sm text-slate-400 font-light mt-2">{DateToString(meta.date as Date)}</h5>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </ul>        
    )
}

export default Posts