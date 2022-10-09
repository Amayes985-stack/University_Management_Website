import "./adminCss.css"
import React, { useState } from "react"
import Axios from  'axios'
import { toast} from 'react-toastify'


function AddNote() {
    const  [id, setId] = useState('');
    const  [examen, setExamen] = useState('');
    const  [note, setDate] = useState('');
    const  [module, setModule] = useState('');


        const Submit = () =>{
            Axios.post("http://localhost:3001/admin/an", {
            id:id,
            examen:examen,
            note:note,
            module:module
        })
      
        toast("ajouter note avec succes")
        
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
                    placeholder="id examen"
                    onChange={(event)=>{
                        setExamen(event.target.value);
                    }}
                   ></input>
                   
                   <input type="text" className="input"
                    placeholder="note"
                    onChange={(event)=>{
                        setDate(event.target.value);
                    }}
                   ></input>
                   <input type="text" className="input"
                    placeholder="idModule"
                    onChange={(event)=>{
                        setModule(event.target.value);
                    }}
                   ></input>
                        
                   
                   <button type="submit" className="btn"
                   onClick={Submit}
                   >submit</button>
            </div>
         
           
        </>
    )
}

export default AddNote;