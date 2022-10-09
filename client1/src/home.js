import tari from './tari.jpeg'
import Faicel from './Faical.jpg'
import sebaa from './sebaa.png'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
import  {faFacebook, faTwitter, faInstagram}  from "@fortawesome/free-brands-svg-icons"
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome"
import logo2 from './ee.gif'
import logo3 from './tezz.jpg'
import './App.css';
import logo from './estin.jpg';
import  {Link} from 'react-router-dom'

function Home() {


  useEffect(() => {
    Aos.init({duration : 2000})
  }, [])
  useEffect(()=>{
    if (localStorage.getItem("loggedIn")===true) {
      localStorage.setItem("loggedIn",false)
    }
  }
, []
  )



    return(
        <div>
            <div className="navbar1">
          <div className="logo"><img src={logo} alt={"estin logo"} style={{height:"80px", width:"120px"}}></img></div>
     
      <div className="navbar">
        <ul>
          <Link to="/"> <li className="different">Home</li></Link>
          <Link to="/about"><li className="different">About us</li></Link>
          <Link to="register"><li className="different">Register</li></Link>
          <Link to="login"><li className="box">login</li></Link>
        </ul>
      </div>
    </div>
        <div className="imgHome">
        <p className="description" data-aos="fade-right"> welcome you in our website  <span >ESTALENTS</span>
        </p>
  
        <img src={logo2} className="logo2" alt="school" data-aos="fade-left"></img>
  
      </div> 
      
      <div className="presantation">
        <div className="intro">
        <h3 className="intro1">A BRIEF INTRODUCTION :</h3>
        <p>
          L'ecole superieur en science et technologie de l'informatique ou simplement ESTIN
          est une ecole recemment inauguré (2019) situé en bejaia "amizour" sousle cadre de ministére d'education superieur didié a donnée des formation 
          assez puissants dans les domaines pertinante au domaine numerique tels que l'intelligence artificielle et securité d'informatique
          et de former des ingnieurs capables et resoudre les problems informatiques et du qualité.
  
          l'estalents est une application web didée aux profs afin de gerer sans 
          difficultés leurs etudiants
          
          </p>   
  
          </div>
          <img src={logo3} alt="" className="logo3"></img>
      </div>
  
      <div className="sponsors">
        <div>
          <h3 className="mana">our managers</h3>
        </div>
          <div className="contain">
          <div className="box3">
       
         <div className="director" data-aos="fade-up"> <img src={tari} alt=""></img></div>
          <div className="tezz">
          <p>Pr A.tari</p>
          <p>Head of LIMED </p>
          <p>Head of ESTIN</p>
          </div>
  
        </div>
  
       
        <div className="box3">
         <div className="director" data-aos="fade-up"><img src={Faicel} alt="" ></img></div>
          <div className="tezz">
          <p>Pr F.Azouaou</p>
          <p>Pr of computer science </p>
          <p>HEAD OF ER departement</p>
          </div>
        </div>
  
        <div className="box3" data-aos="fade-up">
        <div className="director">  <img src={sebaa} alt="" ></img> </div>
          <div className="tezz">
          <p>Pr A.Sebaa</p>
          <p>MCA of computer science </p>
          <p>HEAD OF EAD departement</p>
          </div>
        </div>
  
       
   
  
        </div>
  </div>
  
  <div className="footer">
    <div className="back">
      <span className="br"></span>
    </div>
  
    <div className="content">
      <div >
     <FontAwesomeIcon className="icon" icon={faFacebook}></FontAwesomeIcon>
      <FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon>
      <FontAwesomeIcon  className="icon" icon={faTwitter}></FontAwesomeIcon>
      </div>
      <img src={logo} alt="" style={{height:"80px", width:"120px"}}></img>
      <p>tous les droit reservés &#169; 2022</p>
    </div>
  </div>
  </div>
    )
}

export default Home;
/*

 <FontAwesomeIcon className="icon" icon={faFacebook}></FontAwesomeIcon>
      <FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon>
      <FontAwesomeIcon  className="icon" icon={faTwitter}></FontAwesomeIcon>*/