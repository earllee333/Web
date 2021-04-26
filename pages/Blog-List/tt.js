import styles from '../../styles/Home.module.css';
import Link from 'next/link'
export const getStaticProps =( async()=>{
    const res = await fetch('http://localhost:8000/blogs')
    const data = await res.json()
    return{
        props:{datas:data}
    }
})

const BlogList = ({datas}) => {
    return ( 
        <div>
            {datas.map(data=>(
                <Link href={"/Blog-List/"+data.id} key={data.id}>
                    <p className={styles.blog}>{data.title}
                        <h3>{data.author}</h3>
                    </p>
                    
                </Link>
            ))}  
        </div>
     );
}
 
export default BlogList;


