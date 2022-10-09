import  {faFacebook, faTwitter, faInstagram}  from "@fortawesome/free-brands-svg-icons"
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome"
import './login.css'
import registerpic from './library.jpg'
import  {Link} from 'react-router-dom'
import React, { useState } from "react"
import Axios from  'axios'
import { toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure();



function Register() {

    const  [userName,  setUserName] = useState('');
    const  [userPass,  setUserPass] = useState('');
    const  [userEmail,  setUserEmail] = useState('');

    
  const Register = ()=> {
     
   
  console.log(userName);
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!userEmail.match(validRegex)) {

  
    toast("Invalid email address!")
  }
  
  else {

    Axios.post("http://localhost:3001/user/register", {
      Name : userName,
      email : userEmail,
      password: userPass
    })
    toast("verify your email")
  
  }}

    return(
        <div>
            <div className="galerie">
                <img src={registerpic} alt="" className="img"></img>
                <Link to="/"><span className="arrow"  title="home">&#8592;</span></Link>
                <div className="article1">
                    <div className="text">
                    <h2>Inscrivez-vous</h2>
                    <input className="input1"
                    type="text" 
                    placeholder="nom"
                    onChange={(event)=>{
                        setUserName(event.target.value)
                    }}></input>

                    <input type="email" className="input1"
                    placeholder="email"
                    onChange={(event)=>{
                        setUserEmail(event.target.value)
                    }}></input>

                    <input type="password"  className="input1"
                    placeholder="password"
                    onChange={(event)=>{
                        setUserPass(event.target.value)
                        
                    }}></input>

                    <button  className="btn1"
                  
                    onClick={Register}>Register </button>
                    </div>
                    <div className="icons">
                    <FontAwesomeIcon className="icon" icon={faFacebook}></FontAwesomeIcon>
      <FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon>
      <FontAwesomeIcon  className="icon" icon={faTwitter}></FontAwesomeIcon>
                </div>
               
                </div>
            </div>
        </div>
    )
}

export default Register;

/*

   <FontAwesomeIcon className="icon" icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon  className="icon" icon={faTwitter}></FontAwesomeIcon>*/