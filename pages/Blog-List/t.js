export const getStaticPaths = async() => {
    const res = await fetch('http://localhost:8000/blogs')
    const blogs = await res.json();

    const paths = blogs.map(blog=>{
        return{
            params:{ id:blog.id.toString() }
        }
    })

    return{
        paths,
        fallback:false
    }
}

export const getStaticProps = async(context)=>{
    const id = context.params.id;
    const res = await fetch('http://localhost/8000/blogs/'+id);
    const data = await res.json();
    return{
        props: { ninja:data}
    }
}




const BlogDetails = ({ninja}) => {
    return ( 
        <div>
            <h1>{ninja.title}</h1>
            <h3>By..{ninja.author}</h3>
            <h4>{ninja.id}</h4>
            <p>{ninja.body}</p>
        </div>
     );
}
 
export default BlogDetails;