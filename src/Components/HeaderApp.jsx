import { Link } from "react-router-dom"
import SearchFts from "./SearchFts";

const HeaderApp  = ({QueryFotos, OpenSideBar}) =>{

    return (
        <div className="HeaderApp">
            <div id="WraperHeader">
                <Link to="/" title="Photos">Pix90</Link>
                <div className="MenuHamburguesa" onClick={OpenSideBar}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>    
                </div>  
            </div>
            <SearchFts QueryFotos={QueryFotos} />
        </div>
    )
}

export default HeaderApp;