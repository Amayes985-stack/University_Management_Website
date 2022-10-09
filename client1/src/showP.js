import {Card} from 'react-bootstrap'
import React, { useState, useEffect } from "react";
import  Axios  from 'axios'
import Chart from "react-apexcharts";
import './adminCss.css'



function ShowP() {



const [isLoading, setIsLoading] = useState(false);
const [data, setData] = useState([]);
const [data1, setData1] = useState([]);
const [data2, setData2] = useState([]);


useEffect(()=>{
  
   setIsLoading(true);
  Axios.get("http://localhost:3001/admin/posts").then(response=>{
    var count = 0;

    for (var i= 0; i < response.data.length; i++)
    count = Object.values(response.data[i])[1]

    var series = [];
    for (var i= 0; i < response.data.length; i++)
    series.push( Object.values(response.data[i])[1])

    for (var i= 0; i < 5-response.data.length; i++)
    series.push( 0)


console.log(series)


	setData(count)
  setData2(series)
})
Axios.get("http://localhost:3001/admin/ap").then(response=>{
	setData1(response.data.length)
})


},[]);

const options= {
  chart: {
    id: "basic-bar"
  },
  xaxis: {
    categories: ["1cp", "2cp", "1sc", "2sc", "3sc"]
  }
};

 const series= [
  {
    name: "series-1",
    data:data2
  }
]
const imprimer = ()=> {
  var printContents = document.getElementById("tezz").innerHTML;
  var originalContent = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContent;
  window.location.reload();
}


    return (
        <div id="tezz">             
 <button onClick={imprimer} className="btn" style={{transform:"translate(600px, 20px)"}}>imprimer</button>

            	<div style={{ margin:"150px 400px"  ,display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}} >


  <Card style={{ width: '18rem', backgroundColor:"#53a8b6", height:"100px"  }}>
  <Card.Body>
    
    <Card.Text style={{fontSize:"20px", color:"#fff"}}>
      nombre d'etudiant
	  
    </Card.Text>
	<Card.Text style={{fontSize:"12px", color:"#fff", margin:" 0 70px"}}>
	{data}
	</Card.Text>
  
  </Card.Body>
</Card>




<Card style={{ width: '18rem', backgroundColor:"#e84a5f" ,marginLeft:"50px", height:"100px"}}>
  <Card.Body>
    
    <Card.Text style={{fontSize:"20px", color:"#fff"}}>
      nombre de prof
	
    </Card.Text>
	<Card.Text style={{fontSize:"12px", color:"#fff",margin:" 0 70px"}}>
	{data1}
	</Card.Text>
  
  </Card.Body>
</Card>
</div>

<div style={{
    marginLeft:"450px",
    background:"#f2f2f2",
    width:'500px'
}}>


<Chart
              options={options}
              series={series}
              type="bar"
              width="500"
             
            />
           </div>


        </div>
    )
}

export default ShowP;