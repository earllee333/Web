import styles from '../styles/Home.module.css';
const about = () => {
    return ( 
      <>
        <div className="About">
          <div className="aboutTitle"><textarea placeholder="Say...">Project</textarea></div>
          <div className="content"><textarea placeholder="Items...."></textarea></div>

          <div><ul>
            <p>1.1111</p>
            <p>2.1111</p>
            <p>3.1111</p>
            </ul></div>

        </div>
        <style jsx>
          {`
          .content textarea{
            min-width:300px;
            min-height:300px;
            position:relative;
            left:300px;
            top:150px;
          }
          .About ul{
            position:relative;
            bottom:200px;
            right:480px
          }
          .aboutTitle{
            padding:20px;
          }`
          
          }
        </style>
      </>
     );
  }
   
  export default about;