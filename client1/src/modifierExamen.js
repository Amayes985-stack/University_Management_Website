import "./adminCss.css"
import React, { useState } from "react"
import Axios from  'axios'


function ModifierExamen() {
    const  [date, setNom] = useState('');
   
    const  [codeModule, setAdresse] = useState('');
    const  [niveauEtude, setNiveau] = useState('');

        const Submit = () =>{
            var c = window.location.pathname.split('/');

            Axios.put("http://localhost:3001/admin/mex", {
            id:c[c.length-1],
            date: date,
            module: codeModule,
            niveau: niveauEtude
        })
      
        }
    return (
        <>
            <div className="showUp">
            <input type="date" className="input"
                    placeholder="date d'examen"
                    onChange={(event)=>{
                        setNom(event.target.value);
                    }}
                   ></input>
                    <input className="input"
                    type="text" 
                    placeholder="id Module"
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

export default ModifierExamen;