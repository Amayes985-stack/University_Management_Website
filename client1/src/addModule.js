import "./adminCss.css"
import React, { useState } from "react"
import Axios from  'axios'
import { toast} from 'react-toastify'


function AddModule() {
    const  [module, setNom] = useState('');
    const  [niveau, setNiveau] = useState('');

        const Submit = () =>{
            Axios.post("http://localhost:3001/admin/am", {
          
           module:module,
       
            niveau:niveau
        })
      
        toast("add Module successfully")
        
        }
    return (
        <>
            <div className="showUp">
            <input type="text" className="input"
                    placeholder=" nom module"
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

export default AddModule;