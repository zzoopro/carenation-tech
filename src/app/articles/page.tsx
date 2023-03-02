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
        <ul className="flex flex-col space-y-10 mt-10">                        
            {metas.map((meta, idx) => {
                return (
                    <Link href={`articles/${meta.path}`} key={idx}>
                        <div  className="flex justify-between">
                            <img src={meta.thumnail} alt="" className="max-w-[200px] w-full"/>
                            <div className="w-2/5">
                                <h3>{meta.title}</h3>
                                <h4>{meta.description}</h4>
                                <h5>{DateToString(meta.date as Date)}</h5>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </ul>        
    )
}

export default Posts