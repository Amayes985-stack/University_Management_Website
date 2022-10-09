import "./adminCss.css"
import React, { useState } from "react"
import Axios from  'axios'
import { toast} from 'react-toastify'



function AffecterProf() {
    const  [id, setId] = useState('');
    const  [prof, setExamen] = useState('');
    const  [salle, setDate1] = useState('');
    const  [heur, setDate2] = useState('');

        const Submit = () =>{
            Axios.post("http://localhost:3001/admin/afp", {
            id:id,
            prof:prof,
            salle:salle,
            heur:heur
        })
      
        toast("affecter prof avec succes")
        
        }
    return (
        <>
            <div className="showUp">
            <input type="text" className="input"
                    placeholder="id prof"
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
                    placeholder="num du salle"
                    onChange={(event)=>{
                        setDate1(event.target.value);
                    }}
                   ></input>
                   
                   <input type="time" className="input"
                    placeholder="heur"
                    onChange={(event)=>{
                        setDate2(event.target.value);
                    }}
                   ></input>
                   
                  
                        
                   
                   <button type="submit" className="btn"
                   onClick={Submit}
                   >submit</button>
            </div>
         
           
        </>
    )
}

export default AffecterProf;