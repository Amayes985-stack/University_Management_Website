import "./adminCss.css"
import React, { useState } from "react"
import Axios from  'axios'
import { toast} from 'react-toastify'


function ModifyProf() {
    const  [nom, setNom] = useState('');
    const  [prenom, setPrenom] = useState('');
    const  [adresse, setAdresse] = useState('');
    const  [grade, setNiveau] = useState('');

        const Submit = () =>{
            var c = window.location.pathname.split('/');

            console.log(nom, prenom,adresse, grade)

            Axios.put("http://localhost:3001/admin/mp", {
            id:c[c.length-1],
            nom: nom,
            prenom: prenom,
            adresse: adresse,
            grade: grade
        })
      
        
toast("modufy successfully !!")        }
    return (
        <>
            <div className="showUp">
            <input type="text" className="input"
                    placeholder="nom"
                    onChange={(event)=>{
                        setNom(event.target.value);
                    }}
                   ></input>
                    <input className="input"
                    type="text" 
                    placeholder="prenom"
                    onChange={(event)=>{
                        setPrenom(event.target.value);
                    }}
                    ></input>
                    <input type="text" className="input"
                    placeholder="adresse"
                    onChange={(event)=>{
                        setAdresse(event.target.value);
                    }}
                   ></input>
                    <input className="input"
                    type="text" 
                    placeholder="niveau d'etude"
                    onChange={(event)=>{
                        setNiveau(event.target.value);
                    }}
                    ></input>
                        
                   
                   <button type="submit" className="btn"
                   onClick={Submit}
                   >submit</button>
            </div>
         
           
        </>
    )
}

export default ModifyProf;