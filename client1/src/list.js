import Admin  from "./Admin"
import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ShowP from "./showP"

function  List(){
    return(
        <>
        <Admin />
        <Router>
           
                <Route path="/admin/sp" element={< ShowP/>}/>

            </Router>

        </>
    )
}


export default List