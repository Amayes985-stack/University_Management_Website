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

function ShowEnsiegnant() {

    const [data, setData] = useState([]);
    const [personne, setData1] = useState([]);
    const [data3, setData3] = useState('');
    const [niveau, setniveau] = useState([]);

    

    const [isLoading, setIsLoading] = useState(false);


     useEffect(()=>{
        setIsLoading(true);

        var c = window.location.pathname.split('/');
         
          
          Axios.get("http://localhost:3001/admin/am").then((response)=>{
          
            let data3 = response.data;

            
         

            
          setData3(data3)
          console.log(data3[0].idModule)
          })


          Axios.get("http://localhost:3001/admin/afp/"+c[c.length-1]).then((response)=>{
          
            let data = response.data;

            for(var i = 0; i  < data3.length; i++)
            for(var j = 0; j < response.data.length; j++){
            if(response.data[j].codeModule == data3[i].idModule)
            response.data[j].nomModule = data3[i].nomModule
            }

            setData(response.data) 

           
          })

          Axios.get("http://localhost:3001/admin/sp/"+c[c.length-1]).then((response)=>{
          
            let personne = response.data;
          setData1(personne)
          })

          Axios.get("http://localhost:3001/admin/ap/"+c[c.length-1]).then((response)=>{
          
            let personne = response.data;
          setniveau(personne)
          })


          
      },[]);
     
   
        
     
           
     
         const columns = [
            { dataField: 'numSalle', text: 'numSalle',  sort: true,  filter: textFilter() },
            { dataField: 'nomModule', text: 'nomModule',  sort: true,  filter: textFilter() },
            { dataField: 'heur', text: 'heur',  sort: true,  filter: textFilter() }
            
          
        
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


<div style={{background:"#f1f1f1", display:"flex",borderRadius:"50px", flexDirection:"row", width:"400px", justifyContent:"space-evenly", marginLeft:"450px", marginTop:"20px"}}>
<img src={majhoul} alt='' />

    <div className='card'>



<h3>{(personne.length!=0) ?
            personne[0].nom : "rien"}</h3>
<h3>{(personne.length!=0) ?
            personne[0].prenom : "rien"}</h3>

<h3>{(personne.length!=0) ?
            personne[0].adresse : "rien"}</h3>


<p>{(niveau.length!=0) ?
            niveau[0].grade : "rien"}</p>

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
              
           
         <button Onclick={imprimer}></button>
      </div>
     </>
 
    )

}


export default ShowEnsiegnant;