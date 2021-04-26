export const getStaticPaths = async()=>{
    const res = await fetch('http://localhost:8000/blogs');
    const blogs = await res.json();
    
    const paths = blogs.map(blog=>{
        return{
            params: {id:blog.id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}
export const getStaticProps = async(context)=>{
    const id = context.params.id;
    const res = await fetch('http://localhost:8000/blogs/'+id);
    const data = await res.json()
    return{
        props:{data}
    }
}

const BlogDetails = ({data}) => {
    return ( 
        <div>
            <h1>{data.title}</h1>
            <h2>By...{data.author}</h2>
            <p><strong>{data.body}</strong></p>
            <p>{data.id}</p>
            <h1>hhhhhh</h1>
            <h1><span>hhhhhh</span></h1>
            <h1>
                <a>s<span>s</span></a>
            </h1>
        </div>
     );
}
 
export default BlogDetails;