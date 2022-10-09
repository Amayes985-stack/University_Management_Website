import "./adminCss.css"
import React, { useState } from "react"
import Axios from  'axios'
import ModifierModule from "./modifierModule";
import { toast} from 'react-toastify'


function ModifierEtudiant() {
    const  [nom, setNom] = useState('');
    const  [prenom, setPrenom] = useState('');
    const  [adresse, setAdresse] = useState('');
    const  [niveauEtude, setNiveau] = useState('');
    const  [id, setId] = useState('');

        const Submit = () =>{
            var c = window.location.pathname.split('/');
            Axios.put("http://localhost:3001/admin/met", {
            id:c[c.length-1],
            nom: nom,
            prenom: prenom,
            adresse: adresse,
            niveau: niveauEtude
        })
      
        
toast("modify successfully");        }
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

export default ModifierEtudiant