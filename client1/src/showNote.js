import Axios from "axios";
import majhoul from './majhoul.webp'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import React, { useEffect, useState } from "react";
import "./adminCss.css"
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min'


function ShowEtudiant() {

    const [data, setData] = useState([]);
    const [data3, setData3] = useState([]);

    const [personne, setData1] = useState([]);
    const [search, setSearch] = useState('');
    const [niveau, setniveau] = useState([]);
    const [info, setInfo] = useState([]);


    const handleSearch =(event)=>{
       setSearch(event.target.value)
    }
    const  c = window.location.pathname.split('/');
    const [isLoading, setIsLoading] = useState(false);


      useEffect(()=>{


        setIsLoading(true);

          Axios.get("http://localhost:3001/admin/sn/"+c[c.length-1]).then((response)=>{
          
            setInfo(response.data)          
          })


          Axios.get("http://localhost:3001/admin/sp/"+c[c.length-1]).then((response)=>{
          
            let personne = response.data;
          setData1(personne)
          })

          Axios.get("http://localhost:3001/admin/am").then((response)=>{
          
            let data3 = response.data;

            
         

            
          setData3(data3)
          console.log(data3[0].idModule)
          })

          Axios.get("http://localhost:3001/admin/set/"+c[c.length-1]).then((response)=>{
          
            let personne = response.data;
          setniveau(personne)
          })



          Axios.get("http://localhost:3001/admin/mpr/"+c[c.length-1]).then((response)=>{



          for(var i=0; i<info.length; i++)
          for(var j=0; j<response.data.length; j++)
            if(response.data[j].idModule==info[i].idModule){
                response.data[j].idcontrole = info[i].idControle;
                response.data[j].note = info[i].note
            }


           for(var i = 0; i  < data3.length; i++)
              for(var j = 0; j < response.data.length; j++){
              if(response.data[j].idModule == data3[i].idModule)
              response.data[j].nomModule = data3[i].nomModule
              }
             
              setData(response.data) 

        
            })
            
         


          

          
      },[]);
     
   
        
     
           
     
         const columns = [
          { dataField: 'idModule', text: 'nom Module',  sort: true,  filter: textFilter() },

            { dataField: 'nomModule', text: 'nom Module',  sort: true,  filter: textFilter() },
            { dataField: 'idcontrole', text: 'codeExamen',  sort: true ,  filter: textFilter()},
            { dataField: 'note', text: 'note' ,  sort: true},
            { dataField: 'attendance', text: 'assistance',  sort: true,  filter: textFilter() },
            
            
            
            
          
        
          ];


          const defaultSorted = [{
            dataField: 'name',
            order: 'desc'
          }];


          const pagination = paginationFactory({
            page: 2,
            sizePerPage: 5,
            lastPageText: '>>',
            firstPageText: '<<',
            nextPageText: '>',
            prePageText: '<',
            showTotal: true,
            alwaysShowAllBtns: true,
            onPageChange: function (page, sizePerPage) {
              console.log('page', page);
              console.log('sizePerPage', sizePerPage);
            },
            onSizePerPageChange: function (page, sizePerPage) {
              console.log('page', page);
              console.log('sizePerPage', sizePerPage);
            }
          });

          const { SearchBar, ClearSearchButton } = Search;
          const imprimer = ()=> {
            var printContents = document.getElementById("tezz").innerHTML;
            var originalContent = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContent;
            window.location.reload();
         }
      
     return (
     <>


<div style={{background:"#f1f1f1", display:"flex",borderRadius:"50px", flexDirection:"row", width:"500px", justifyContent:"space-evenly", marginLeft:"450px", marginTop:"20px"}}>
<img src={majhoul} alt='' />

<div className='card'>


<h3>{(personne.length!=0) ?
            personne[0].nom : "rien"}</h3>
<h3>{(personne.length!=0) ?
            personne[0].prenom : "rien"}</h3>

<h3>{(personne.length!=0) ?
            personne[0].adresse : "rien"}</h3>


<p>{(niveau.length!=0) ?
            niveau[0].niveau : "rien"}</p>

</div>
</div>

<div   style={{
          width:"1000px",
          marginLeft:" 200px",
           background:"#fff",
           padding : "40px",
           marginTop:"50px"
          }} id="tezz">
        
        
        
        
         <ToolkitProvider
        
        bootstrap4
        keyField='id'
        data={data}
        columns={columns}
        search 
       
      >
        {
          props => (
            <div>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
              <hr />
              <BootstrapTable
                defaultSorted={defaultSorted}
                pagination={pagination}
                {...props.baseProps}
                filter={ filterFactory() }
              ></BootstrapTable>
            </div>
          )
        }
      </ToolkitProvider>
              
           
         <button onClick={imprimer}>imprimer</button>
      </div>
     </>
 
    )

}


export default ShowEtudiant