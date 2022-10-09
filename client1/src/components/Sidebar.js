import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import {Card} from 'react-bootstrap'
import { IconContext } from "react-icons/lib";
import { useEffect} from "react";
import  Axios  from 'axios'
const Nav = styled.div`
background: #15171c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #15171c;
width: 260px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);

const logout = ()=>{
	localStorage.clear();
	window.location.replace("localhost:3000/");

	window.location.reload();
}

const showSidebar = () => setSidebar(!sidebar);


const [isLoading, setIsLoading] = useState(false);
const [data, setData] = useState([]);
const [data1, setData1] = useState([]);


useEffect(()=>{
  
   setIsLoading(true);
  Axios.get("http://localhost:3001/admin/aet").then(response=>{
	setData(response.data.length)
})
Axios.get("http://localhost:3001/admin/ap").then(response=>{
	setData1(response.data.length)
})


},[]);

return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<Nav style={{ display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
		<NavIcon to="#">
			<FaIcons.FaBars onClick={showSidebar} />
		</NavIcon>
		<h1
			style={{ textAlign: "center",
					marginLeft: "200px",
					color: "green" }}
		>
			hello {localStorage.getItem("username")}
		</h1>


		<button className="btn btn-danger "style={{float : "right", marginLeft:"25px"}} onClick={logout}>logout</button>
		</Nav>
		<SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			<NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon>
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>


		</SidebarNav>
	</IconContext.Provider>
	



	</>
);
};

export default Sidebar;
