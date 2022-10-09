import "./adminCss.css"
import React, { useState } from "react"
import Axios from  'axios'


function Note() {
    const  [nom, setNom] = useState('');
    const  [prenom, setPrenom] = useState('');
    const  [adresse, setAdresse] = useState('');
    const  [grade, setNiveau] = useState('');

        const Submit = () =>{
            var c = window.location.pathname.split('/');

            console.log(nom, prenom,adresse, grade)

            Axios.put("http://localhost:3001/admin/mnote/", {
            id:c[c.length-2],
            module:c[c.length-1],
            
        })
      
        
        console.log(nom, prenom,adresse, grade)
        }
    return (
        <>
            <div className="showUp">
            
                    <input className="input"
                    type="text" 
                    placeholder="note"
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

export default Note;