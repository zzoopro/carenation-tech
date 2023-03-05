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
    <section id="article_meta">
      <img src={meta.thumnail} alt="" />
      <span id="article_title">{meta.title}</span>
      <span id="article_descrispantion">{meta.description}</span>
      <div id="article_sub_info">
        <div id="article_author_info">
          <span id="article_author">{meta.author}</span>
          <span id="article_position">{meta.position}</span>
        </div>        
        <span id="article_time">{meta.date as String}</span>
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