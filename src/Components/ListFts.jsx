
import { Link } from 'react-router-dom'
import tags from '../assets/etiqueta.png'
import like  from '../assets/like.png'

const ListFts = ({Fts})=>{


const Msm = "Imagen no disponible"

	return(
	 <div className="ListFts">
			{
				Fts.length > 1 ? 

				Fts.map( (listfts) =>(
					<div key={listfts.id} className="itemsPhotos">
                  		<div className="Wrapper-img">
							<Link to={`/Pix90/Imagen/${listfts.id}`}>
								<img src={listfts.webformatURL} alt="" title={listfts.tags}></img>
							</Link>
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
				)): Msm
			}	
	</div>
	)

}

export default ListFts;