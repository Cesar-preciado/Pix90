import { useState, useEffect } from "react"
import tags from '../assets/etiqueta.png'
import like  from '../assets/like.png'

import HeaderApp from "../Components/HeaderApp"
import ListCategoria from "../Components/ListCategoria"
import ListFts from "../Components/ListFts"


import '../styles/Img.css'

const Imagen = (props,{QueryFotos, Fts})=>{

const [Imagen, setImagen ] = useState([]) 
const [visibilidad, setVisibilidad] = useState('')

const IdImg = props.match.params.id

    useEffect( () =>{

        const showPhoto =  async () =>{

            const response = await fetch('https://pixabay.com/api/?key=22334813-b26d7829743f79bc384b38e06&id='+IdImg)
            const data  = await response.json()
            setImagen(data.hits)
            setVisibilidad('flex')

        }
        showPhoto()

    },[IdImg])

    const ObjStyle = { display: visibilidad }

    return(
        <div className="Photo">
          <HeaderApp 
          QueryFotos={props.QueryFotos}
          />
            <div className="wrapper-main">
                <ListCategoria />
                <ListFts Fts={props.Fts} />
            </div>
            <div className="Items-img" style={ ObjStyle }>
                    {
				    Imagen.map( (listfts) =>(
					    <div key={listfts.id} className="img">
                            <div className="Close"><span title="Cerrar imagen" onClick={ () => setVisibilidad('none') }>X</span></div>
                  		    <div className="Wrapper-img">
                      		    <img src={listfts.webformatURL} alt="" title={listfts.tags}></img>
                  		    </div>
                 		    <div className="Wrapper-inform">
                    		     <div className="inform">
                       			    <img src={tags} title={listfts.tags} alt=""></img>
                       			    <span title={listfts.tags}>{listfts.tags}</span>
                     		    </div>
                    	 		    <div className="inform">
                         			    <img src={like} title={listfts.likes} alt=""></img>
                    	     		    <span title={listfts.likes}>{listfts.likes}</span>
                    			    </div>
                  		    </div> 
            		    </div>
                    ))
                    }
                </div>
        </div>
    )
} 



export default Imagen;