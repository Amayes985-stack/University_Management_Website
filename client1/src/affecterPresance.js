import "./adminCss.css"
import React, { useState } from "react"
import Axios from  'axios'
import { toast} from 'react-toastify'


function AffecterPresance() {
    const  [id, setId] = useState('');
    const  [prof, setExamen] = useState('');
    const  [note, setDate] = useState('');

        const Submit = () =>{
            Axios.post("http://localhost:3001/admin/mpr", {
            id:id,
            prof:prof,
            note:note
           
        })
      
        toast("affecter presance avec succes")
        
        }
    return (
        <>
            <div className="showUp">
            <input type="text" className="input"
                    placeholder="id etudiant"
                    onChange={(event)=>{
                        setId(event.target.value);
                    }}
                   ></input>
                  
                    <input type="text" className="input"
                    placeholder="id module"
                    onChange={(event)=>{
                        setExamen(event.target.value);
                    }}
                   ></input>
                   
                   <input type="text" className="input"
                    placeholder="presance en %"
                    onChange={(event)=>{
                        setDate(event.target.value);
                    }}
                   ></input>
                
                   
                   <button type="submit" className="btn"
                   onClick={Submit}
                   >submit</button>
            </div>
         
           
        </>
    )
}

export default AffecterPresance;