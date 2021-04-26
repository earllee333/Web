import styles from '../styles/Home.module.css'
const Hello = () => {
    return ( 
      <>
        <div className="Contact">
          <p>LINE:<a>123@line</a></p>
          <p>IG:<a>123@ig</a></p>
          <p>FaceBook:<a>123@facebook</a></p>
          <p>Phone number:<a>123456789</a></p>
          <p>Address:<a>xxx street xxxroad No.123,Kaohsiung,Taiwan</a></p>
          <textarea placeholder="Google map"></textarea>
        </div>
        <style jsx>
          {`
          .Contact p,a{positon:relative;left:-380px;top:100px}
          .Contact textarea{
            position:relative;

            left:250px;
            top:80px;
            min-width:450px;
            min-height:300px;
          }
          `}
        </style>
      </>
     );
  }
   
  export default Hello;