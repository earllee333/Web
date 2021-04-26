import Link from 'next/link';
import styles from'../styles/Home.module.css'
const Nav = () => {
    return ( 
        <nav>
            <div>
                <img src="../favicon.ico" />
            </div>
            <Link href ="/">Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact us</Link>
            <Link href='/Blog-List'>Blog List</Link>
            <Link href="/recipes">Recipes</Link>
            <Link href="signup/login" ><div className='btw'>Sign/login</div></Link>
        </nav>
       
     );
}
 
export default Nav;