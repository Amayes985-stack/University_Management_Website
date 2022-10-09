import "./adminCss.css"
import React, { useState } from "react"
import Axios from  'axios'
import { toast} from 'react-toastify'



function AddExamen() {
    const  [date, setPrenom] = useState('');
    const  [module, setAdresse] = useState('');
    const  [niveau, setNiveau] = useState('');

        const Submit = () =>{
            Axios.post("http://localhost:3001/admin/aex", {
            date:date,
            module:module,
            niveau:niveau
        })
      
        
        toast("add examen successfully")
        }
    return (
        <>
            <div className="showUp">
           <input className="input"
                    type="date" 
                    placeholder="date examen"
                    onChange={(event)=>{
                        setPrenom(event.target.value);
                    }}
                    ></input>
                    <input type="text" className="input"
                    placeholder="id module"
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

export default AddExamen;