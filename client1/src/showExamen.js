import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./adminCss.css"
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min'
function ShowExamen() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch =(event)=>{
       setSearch(event.target.value)
    }

    const [isLoading, setIsLoading] = useState(false);
      useEffect(()=>{
        
        setIsLoading(true);
          Axios.get("http://localhost:3001/admin/aex").then((response)=>{
          
            
            
          setData(response.data)
          })
      },[]);
     
   
         const supprimerElement = (element)=>{
           if(window.confirm("t'es sur ? ca va perdre cette infromation carrement ?")){
            console.log(element)
            Axios.delete(`http://localhost:3001/admin/sex/${element}` )
            .then(res => {
              console.log(res.data);
            }).catch(err => {
              console.warn(err.warn);
            });}
         }


     
           
     
         const columns = [
            { dataField: 'idControl', text: 'Id',  sort: true, filter: textFilter() },
            { dataField: 'jour', text: 'Date',  sort: true, filter: textFilter() },
            { dataField: 'codeModule', text: 'id module',  sort: true, filter: textFilter() },
            { dataField: 'niveau', text: 'Niveau' ,  sort: true,  filter: textFilter()},
           
            
               {  dataField: "remove",
               text: "Delete/Update",
               formatter: (cellContent, row) => {
                 return (
                    <>
                   <button
                     className="btn-danger"
                     onClick={() => supprimerElement(row.idControle)}
                   >delete
                 </button>
                   
                  
                 
                   <a href={"/admin/mex/"+row.idControle } className=" btn-warning " ><button className=" btn-warning " >update</button></a>
              
                 </>
                 );
               }
               },

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


export default ShowExamen