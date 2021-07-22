import {useEffect, useState} from 'react'

import ListFts from '../Components/ListFts'

import HeaderApp from '../Components/HeaderApp'
import ListCategoria from '../Components/ListCategoria'

const Category = (props,{Fts, QueryFotos, UpdateList}) =>{

	const [Cat, setCategory] = useState(props.Fts)

	const categoria = props.match.params.categoria

	useEffect(()=>{ setCategory(props.Fts) },[props.Fts])


	useEffect(()=>{

	var lista = document.getElementsByTagName('li')

	for(var i = 0; i < lista.length; i++){
		if(lista[i].children[1].getAttribute("title") === categoria){

			lista[i].style.backgroundColor = "red"
			lista[i].children[1].style.color = "#fff"
			lista[i].children[1].style.fontWeight = "bold"                
		}else{

			lista[i].style.backgroundColor = ""
			lista[i].children[1].style.color = ""
			lista[i].children[1].style.fontWeight = ""
			
		}
	}

		const fetchDataCategory = async () =>{

			const fotos = await fetch("https://pixabay.com/api/?key=22334813-b26d7829743f79bc384b38e06&category="+categoria)
 	 	    const data = await fotos.json()

    		setCategory(data.hits)
		}

		fetchDataCategory()

	},[categoria])


	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect( () =>{	props.UpdateList(Cat) },[Cat])


	return(

			<div className="Category">
				<HeaderApp QueryFotos={props.QueryFotos} />
				<div className="wrapper-main">
					<ListCategoria />
 					<ListFts Fts={Cat} />
				</div>
			</div> 
		)
}

export default Category;
