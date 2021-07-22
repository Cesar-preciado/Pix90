

const SearchFts = ({QueryFotos})=>{

	return(
			<div className="Search-f">
				<input type="text" id="input" onKeyPress={QueryFotos} placeholder="Buscar foto"></input>
				<button onClick={QueryFotos} title="buscar foto">Buscar</button> 
			</div>
		)
}

export default SearchFts;
