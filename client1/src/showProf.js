import Axios from "axios";

import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import React, { useEffect, useState } from "react";
import "./adminCss.css"
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min'
function ShowProf() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const [isLoading, setIsLoading] = useState(false);


      useEffect(()=>{
        setIsLoading(true);

          Axios.get("http://localhost:3001/admin/ap").then((response)=>{
          
            let data = response.data;

            
         

            
          setData(data)
          })
      },[]);
     
   
         const supprimerElement = (element)=>{
          if(window.confirm("t'es sur ? ca va perdre cette infromation carrement ?")){

            console.log(element)
            Axios.delete(`http://localhost:3001/admin/sp/${element}` )
            .then(res => {
              console.log(res.data);
            }).catch(err => {
              console.warn(err.warn);
            });

            window.location.reload();
         }}


     
           
     
         const columns = [
            { dataField: 'idProf', text: 'Id',  sort: true, filter: textFilter() },
            { dataField: 'nom', text: 'Nom',  sort: true,  filter: textFilter() },
            { dataField: 'prenom', text: 'Prenom',  sort: true,  filter: textFilter() },
            { dataField: 'grade', text: 'grade',  sort: true,  filter: textFilter() },
            { dataField: 'Info', text: 'Info' ,  
         formatter : (cellContent, row)=>{
            return (<a href={"/admin/showEnseignant/"+row.idProf}>info
            </a>)
         }},
            
               {  dataField: "remove",
               text: "Delete",
               formatter: (cellContent, row) => {
                 return (
                    <>
                   <button
                     className="btn-danger btn-sm"
                     onClick={() => supprimerElement(row.idProf)}
                   >
delete
                   </button>
                   
                  
                 
                   <a href={"/admin/mp/"+row.idProf} className=" btn-warning " ><button>update</button></a>
              
                 </>
                 );
               },
              }


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
         <div   style={{
           width:"1000px",
           marginLeft:" 200px",
           background:"#fff",
           padding : "40px",
           marginTop:"40px",
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
              
           <button onClick={imprimer}></button>
         
      </div>
     </>
 
    )

}


export default ShowProf