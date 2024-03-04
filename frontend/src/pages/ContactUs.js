import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <>
    <div style ={{boxSizing: "border-box"}}>
      <NavBar/>
      <div className="mainContainer">
        <div className="secureHeading">
          <div className="name" style ={{marginTop : "2.5rem"}}>
            {/* <span className="firstLetter">S</span> */}
            Contact Us.
          </div>
        </div>
      </div>
    </div>

    <div style ={{ marginTop : "29.5rem",backgroundColor : "black", color : "white", height : "20rem", display : "flex", padding : "1rem", width : "100vw",  overflowX : "hidden", flexDirection: "column"}}>

      <div style ={{display : "flex", justifyContent: "center", alignItems: "center", fontSize : "2rem", fontWeight: "bold", marginBottom : "1.5rem"}}>Get In Touch!!</div>
      <div style ={{display : "flex", justifyContent: "center", alignItems: "center"}}><div style ={{}}><input style ={{width : "25rem", textDecoration: "none", height : "2.5rem", padding : "1rem"}} type = "textarea" placeholder='Enter Your Message!!'/></div><div style ={{backgroundColor : "rgb(222, 143, 83)", height : "2.5rem", width : "4rem", display : "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold"}}>Send</div></div>
      <div style ={{display: "flex", justifyContent: "center", alignItems: "center", color : "gray", marginTop : "1.5rem", flexDirection: "column", marginBottom  : "1.5rem"}}><div>We will make every effort to contact you as soon as possible. Please ensure to check your registered email for any further updates.</div>
        <div>You can also reach us using the following contact details.</div>
      </div>




      <div style ={{display : "flex", justifyContent: "space-evenly"}}>
        <div style ={{display : "flex", flexDirection : "column"}}>
          <div className = "firstLetter" style ={{display : "flex", alignItems: "center", justifyContent: "center"}}>Location:</div>
          <div style ={{color : "gray", display: "flex", alignItems: "center", justifyContent: "center"}}>PDPM IIITDM <br/>Jabalpur, MP</div>
        </div>


        <div style ={{display : "flex", flexDirection : "column"}}>
          <div className = "firstLetter" style ={{display : "flex", alignItems: "center", justifyContent: "center"}}>Contact Us:</div>
          <div style ={{color : "gray", display: "flex", flexDirection : "column", alignItems: "center", justifyContent: "center"}}><div>bcs@gmail.com</div><div>+91-XXX-XXX-XXX</div></div>
        </div>  


        <div style ={{display : "flex", flexDirection : "column"}}>
          <div className = "firstLetter" style ={{display : "flex", alignItems: "center", justifyContent: "center"}}>Follow Us: </div>
          <div style ={{color : "gray", display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center"}}><div>@twitter</div><div>@instagram</div></div>
        </div> 
        
             </div>
    </div>


    <div style ={{background : "black", display : "flex", justifyContent: "center", alignItems: "center", color : 'rgb(222, 143, 83)', width : "100vw"}}>
     <Link to = "/home" style ={{textDecoration: "none", color : "rgb(222, 143, 83)"}}>@secure</Link>
    </div>
   </>
  )
}

export default ContactUs
