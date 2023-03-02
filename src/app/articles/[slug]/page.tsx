import dynamic from "next/dynamic"


const Post = () => {
    const Post = dynamic(() => import(`../../../markdown/articles/${"intro"}.mdx`))
    
    return (
        <div>
            <Post />
        </div>
    )
}

export default Post