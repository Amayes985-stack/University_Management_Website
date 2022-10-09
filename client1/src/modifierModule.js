import "./adminCss.css"
import React, { useState } from "react"
import Axios from  'axios'

import { toast} from 'react-toastify'


function ModifierModule() {
    const  [code, setNom] = useState('');
    
    const  [prof, setAdresse] = useState('');
    const  [niveauEtude, setNiveau] = useState('');

        const Submit = () =>{
            var c = window.location.pathname.split('/');
            Axios.put("http://localhost:3001/admin/mm", {
            id:c[c.length-1],
            code:code,
        
            
            niveau: niveauEtude
        })
      
        
     toast("modify successfully")
        }
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

export default ModifierModule;