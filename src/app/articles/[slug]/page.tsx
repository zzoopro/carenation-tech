import dynamic from "next/dynamic"


const Post = ({params}: any) => {
    const Post = dynamic(() => import(`../../../markdown/articles/${params.slug}.mdx`))
    
    return (
        <div id="post_wrap" className="p-[5%]">
            <Post />
        </div>
    )                
}

export default Post