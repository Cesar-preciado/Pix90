
import Home from './Views/Home'
import Category from './Views/Category'
import Imagen from './Views/Imagen'


import React,{useState} from "react"
import { BrowserRouter, Route } from "react-router-dom"



function App() {

const [Lista, setList] = useState([])

const UpdateList = (stateN) =>{ setList(stateN)}


const QueryFotos = async (e) =>{

  var query = document.querySelector("#input").value

    if(e.key === "Enter" || e.type === "click"){

        if(query !== ''){
          const fotos = await fetch("https://pixabay.com/api/?key=22334813-b26d7829743f79bc384b38e06&q="+query)
          const data = await fotos.json()

            setList(data.hits)
        }
        document.querySelector("#input").value = ""
    }

}

var width = 0
const OpenSideBar = (e)=>{
  e.currentTarget.classList.toggle("change")

      if(width === 0){
          width = 50;
            document.querySelector('.MenuMovil').style.width = width+"%"
      }else{
          width = 0;
          document.querySelector('.MenuMovil').style.width = width+"%"
      }
}


return (
        <div className="App" >
            <BrowserRouter>
              <Route exact path="/" render={ (props) =><Home {...props} Fts={Lista} QueryFotos={QueryFotos} UpdateList={UpdateList} OpenSideBar={OpenSideBar} />   } />
              <Route exact path="/Categoria/:categoria" render={ (props)=><Category {...props} Fts={Lista} QueryFotos={QueryFotos} UpdateList={UpdateList} OpenSideBar={OpenSideBar}  /> } />  
              <Route exact path="/Imagen/:id" render={ (props) =><Imagen {...props} QueryFotos={QueryFotos} Fts={Lista} OpenSideBar={OpenSideBar} /> } />
            </BrowserRouter>
        </div>
    )

}

export default App;
