import {useEffect} from 'react';
import {useRouter} from 'next/router'

import styles from "../styles/Home.module.css" 
import Link from 'next/link'
const NotFound = () => {
    const router = useRouter()
    useEffect(() =>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    })

    return ( 
        <div className="not-found">
            <h1>Ooooops.....</h1>
            <h2>that page cannot be found</h2>
            <p className={styles.notfound}>Go back to<Link href='/'>Home page</Link></p>
        </div>
     );
}
 
export default NotFound;