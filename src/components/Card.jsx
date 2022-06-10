import rasm1 from "../assets/images/img.jpg";


const Card = (props) => {
  
const {title, text}=props.info;


const styles={
  background:"black",
  color:"white",
  borderRadius:"20px",
  padding:"20px"
}

   return (
     <>
       <div className="card" style={{background:props.color}}>
         <img src={rasm1} alt="rasm" />
          <h2>{title}</h2>

          <p style={{...styles}}>

           {text}

         </p>
         

       </div>
     </>
   );
 };

 export default Card;
 