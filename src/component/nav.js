import'./nav.css';
import React from "react"
import {Link} from "react-router-dom"
class nav extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 ">
                        <div className="container-fluid" id="geser">
                            <Link to="/" className="nav-link navbar-brand ">
                                BERANDA
                            </Link>
                        </div>
                </nav>
            </div>
        );
    }
}


export default nav;