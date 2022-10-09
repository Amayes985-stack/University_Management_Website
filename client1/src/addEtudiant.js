import "./adminCss.css"
import React, { useState } from "react"
import Axios from  'axios'
import { toast} from 'react-toastify'



function AddEtudiant() {
    const  [nom, setNom] = useState('');
    const  [prenom, setPrenom] = useState('');
    const  [adresse, setAdresse] = useState('');
    const  [niveauEtude, setNiveau] = useState('');

        const Submit = () =>{

            const regex = /^[a-z ,.'-]+$/i 

if( !nom.match(regex) || !prenom.match(regex))
    toast(" error l’un des information entrees est erronée ");
    else{

            Axios.post("http://localhost:3001/admin/aet", {
            nom: nom,
            prenom: prenom,
            adresse: adresse,
            niveau: niveauEtude
        })
      
        
toast("add etudiant successfully");
    }}
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

export default AddEtudiant;