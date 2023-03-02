import CodeBlock from "@/components/Codeblock";
import { Struct, ArticleMeta } from "@/types/types";
import type { MDXComponents } from 'mdx/types'

function H2({ children }: MDXComponents) {  
  let meta: ArticleMeta = {}
  const reStructed = children.toString().split("\n").forEach((field: string) => {
    const [key, value] = field.split(":")
    meta[key] = value?.trim()
  })   
  
  return (
    <section style={{marginBottom: 50, backgroundColor: "pink"}}>
      <img src={meta.thumnail} alt="" />
      <h1 id="article_title">{meta.title}</h1>
      <p id="description">{meta.description}</p>
      <div id="article_author_info" className="flex flex-col">
        <div>
          <span>{meta.author}</span>
          <span>{meta.position}</span>
        </div>        
        <span>{meta.date}</span>
      </div>
    </section>
  )
}

function Code({ children, className }: any) {
  return <CodeBlock children={children} className={className}/>
}


// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents | any {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h2: H2,
    code: Code,
    ...components,
  }
}