import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "Etudiants",
	path: "/",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "add Etudiant",
		path: "/admin/aet",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "show Etudiant",
		path: "/admin/se",
		icon: <IoIcons.IoIosPaper />,
	},

	],
},
{
	title: "Profs",
	path: "/",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "add prof",
		path: "/admin/ap",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "show prof",
		path: "/admin/sp",
		icon: <IoIcons.IoIosPaper />,
	},
	
	],
},

{
	title: "Examen",
	path: "/Examen",
	icon: <FaIcons.FaPhone />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
		{
			title: "add Examen",
			path: "/admin/addEx",
			icon: <IoIcons.IoIosPaper />,
		},
		{
			title: "show examen",
			path: "/admin/showEx",
			icon: <IoIcons.IoIosPaper />,
		},
		
		],
},
{
	title: "modules",
	path: "/",
	icon: <FaIcons.FaEnvelopeOpenText />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "add module",
		path: "/admin/addModule",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "show module",
		path: "/admin/showModule",
		icon: <IoIcons.IoIosPaper />,
	},
	
	],
},
{
	title: "ajouter note",
	path: "/admin/an",
	icon: <IoIcons.IoMdHelpCircle />,
},

{
	title: "affecter prof",
	path: "/admin/afp",
	icon: <IoIcons.IoMdHelpCircle />,
},
{
	title: "marquer presance",
	path: "/admin/mpr",
	icon: <IoIcons.IoMdHelpCircle />,
},


];
