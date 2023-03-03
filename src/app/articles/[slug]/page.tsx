import dynamic from "next/dynamic"


const Post = ({params}: any) => {
    const Post = dynamic(() => import(`../../../markdown/articles/${params.slug}.mdx`))
    
    return <Post />            
}

export default Post