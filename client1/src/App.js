
import Home from './home.js'
import Login from './login.js'
import Register from './register.js'
import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useEffect, useState } from "react";
import ShowProf from './showProf';
import AddExamen from './addExamen.js';
import AddEtudiant from './addEtudiant.js';
import ShowExamen from './showExamen'
import image from './admin.jpg'
import ShowEtudiant from './showEtudiant.js';
import AddProf from './addProf'
import AddModule from './addModule'
import ShowModule from './showModules'
import Sidebar from './components/Sidebar.js';
import ModifyEtudiant from './modifierEtudiant.js';
import ModifyProf from './modifierProf.js';
import ModifierModule from './modifierModule.js';
import ModifierExamen from './modifierExamen.js';
import ModifierNote from './modifierNote.js';
import ShowNote from './showNote';
import AddNote from './ajouterNote'
import ShowP  from "./showP"
import AffecterProf  from "./affecterProf"
import ShowEnsiegnant from './showEnsiegnant.js';
import AffecterPresance from './affecterPresance.js'
import Note from './modifierNote.js';

function App() {

  const [loggin, setLogin] = useState(false);
  const state = localStorage.getItem("loggedIn");
       useEffect(()=>{
        setLogin(state);
       }
       , [state]);
       


        

  return (

<div>
 
 {state ? (
        <div style={{ backgroundImage:`url(${image})`, height:"160vh"}}>
       
        

         <Router>

     <Sidebar />

     <Routes>
      <Route path="/admin/aet" element = {<AddEtudiant/>}/>
      <Route path="/admin/se" element = {<ShowEtudiant/>}/>
      <Route path="/admin/sp" element = {<ShowProf/>}/>
      <Route path="/admin/ap" element = {<AddProf/>}/>
      <Route path="/admin/addEx" element = {<AddExamen/>}/>
      <Route path="/admin/showEx" element = {<ShowExamen/>}/>
      <Route path="/admin/addModule" element = {<AddModule/>}/>
      <Route path="/admin/showModule" element = {<ShowModule/>}/>
      <Route path="/" element = {<ShowP/>}/>
      <Route path="/admin/aet" element = {<AddEtudiant/>}/>
      <Route path="/admin/met/:id" element= {<ModifyEtudiant />}/>
      <Route path="/admin/mp/:id" element= {<ModifyProf/>}/>
      <Route path="/admin/mm/:id" element= {<ModifierModule />}/>
      <Route path="/admin/mex/:id" element= {<ModifierExamen/>}/>
      <Route path="/admin/showNote/:id" element= {<ShowNote />}/>
      <Route path="/admin/mn" element= {<ModifierNote/>}/>
      <Route path="/admin/an" element= {<AddNote/>}/>
      <Route path="/admin/afp" element= {<AffecterProf/>}/>
      <Route path="/admin/showEnseignant/:id" element= {<ShowEnsiegnant/>}/>
      <Route path="/admin/mpr" element= {<AffecterPresance/>}/>
      <Route path="/admin/mnote/:id/:id" element= {<Note/>}/>


     </Routes>
          </Router>
         
        </div>) :
        (<>
          <Router>
      <Routes>
        <Route path="/" element={<Home />} />
             <Route path="/register" element={<Register/>} />
           <Route path="/login" element={<Login />} />
           </Routes>
      </Router>
        </> 
        )

         } </div>
  
    
        );
}

export default App;
