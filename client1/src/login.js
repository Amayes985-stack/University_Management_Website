import  {faFacebook, faTwitter, faInstagram}  from "@fortawesome/free-brands-svg-icons"
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome"
import './login.css'
import register from './library.jpg'
import  {Link} from 'react-router-dom'
import React, { useState } from "react"
import Axios from  'axios'
import { toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure();
function Login() {


   
    const  [userPass,  setUserPass] = useState('');
    const  [userEmail,  setUserEmail] = useState('');
    const [messageDErreur, setMessage] = useState('');

    const Login = ()=> (
        Axios.post("http://localhost:3001/user/login", {
          email : userEmail,
          password: userPass
        })
      .then(response => {
          console.log(response.data.loggedIn)
        if(response.data.loggedIn){
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("username", response.data.username);
            window.location.reload(false);
        } else {
            
           toast('error')
     
        }
      })
    )

    return(
        <div>
            <div className="galerie">
                <img src={register} alt="" className="img"></img>
                <div className="article">
                    <div className="text">
                    <h2>CONNECTEZ-VOUS</h2>
                    <input type="email" className="input1"
                    placeholder="email"
                    onChange={(event)=>{
                        setUserEmail(event.target.value)
                    }}></input>
                    <input className="input1"
                    type="password" 
                    placeholder="password"
                    onChange={(event)=>{
                        setUserPass(event.target.value);
                    }}></input>
                    <Link  to="/login"><button type="submit" className="btn1"
                    onClick={Login}>connecter</button></Link>
                    </div>
                    <div className="icons">
                <FontAwesomeIcon className="icon" icon={faFacebook}></FontAwesomeIcon>
      <FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon>
      <FontAwesomeIcon  className="icon" icon={faTwitter}></FontAwesomeIcon>
                </div>
                </div>
            </div>
            <h1>{messageDErreur}</h1>
            <div className="inscrire"><p>vous n'avez pas de compte?</p> <Link to="/register"><button type="submit" className="btn1">Inscrivez-vous</button> </Link> </div>
        </div>
    )
}

export default Login;

/*
<FontAwesomeIcon className="icon" icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon  className="icon" icon={faTwitter}></FontAwesomeIcon>


*/