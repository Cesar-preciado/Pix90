import {useEffect, useState} from 'react'

import HeaderApp from '../Components/HeaderApp'
import ListFts from '../Components/ListFts'
import MenuMovil from '../Components/MenuMovil'
import ListCategoria from '../Components/ListCategoria'


import '../styles/styles.css'

const Home = (props,{Fts, QueryFotos, UpdateList,viewsPhoto, OpenSideBar}) =>{

	const [fts, setFts] = useState(props.Fts)

	useEffect(()=>{ setFts(props.Fts) },[props.Fts])

	useEffect(()=>{
		if(props.location.pathname === "/"){
			document.querySelector('.Component').children[1].children[0].style.background = "red"
			document.querySelector('.Component').children[1].children[0].children[1].style.fontWeight = "bold"
			document.querySelector('.Component').children[1].children[0].children[1].style.color = "#fff"

			document.querySelector('.MenuMovil').children[1].children[0].style.background = "red"
			document.querySelector('.MenuMovil').children[1].children[0].children[1].style.fontWeight = "bold"
			document.querySelector('.MenuMovil').children[1].children[0].children[1].style.color = "#fff"
		}

		const fecthDataHome = async () =>{
			const resp  = await fetch("https://pixabay.com/api/?key=22334813-b26d7829743f79bc384b38e06")
			const data = await resp.json()

			setFts(data.hits)
		}
		fecthDataHome()
	},[props.location.pathname])


	useEffect(()=>{
		props.UpdateList(fts)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[fts])


	
	return(
		<div className="Home">
			<HeaderApp QueryFotos={props.QueryFotos} OpenSideBar={props.OpenSideBar} />
			<div className="wrapper-main">
				<MenuMovil />
				<ListCategoria />
			 	<ListFts Fts={fts} />
			</div>
		</div> 
		)
}

export default Home;
