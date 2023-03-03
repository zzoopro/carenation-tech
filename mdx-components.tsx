import { ArticleMeta } from "@/types/types";
import type { MDXComponents } from 'mdx/types'
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

function H2({ children }: MDXComponents) {  
  let meta: ArticleMeta = {}
  children.toString().split("\n").forEach((field: string) => {
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
        <span>{meta.date as String}</span>
      </div>
    </section>
  )
}

function Code({ children, className }: any) {
  const language = className?.replace(/language-/, '') || 'javascript';
  const highlightedCode = Prism.highlight(children, Prism.languages[language], language);
  
  return (
    <pre className={`language-${language}`}>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents | any {
  return {
    h2: H2,
    code: Code,
    ...components,
  }
}