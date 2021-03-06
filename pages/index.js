import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
const Home = () => {
  return ( 
    <>
      <Head>
      <meta name="viewport" contentcontent="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
      <title>Home|pages</title>
      </Head>
    
      <div className="Pofile">
        <p>Scope...</p>
        <ul>
          <li>1.</li>
          <li>2.</li>
          <li>3.</li>
        </ul>
        <p id="aim">Aim.....</p>
      </div>
      <style jsx> {`
      .Pofile{
      position:relative;
      top:100px;
      right:500px;
      }
      #aim{
        left:750px;
        top:50px;
        text-decoration:underline;
      }
      `}
      </style>
    
    </>
   );
}
 
export default Home;
