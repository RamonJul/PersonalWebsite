import React,{Component} from 'react';
import { Link } from "react-router-dom";
import './style.css'
class SideBar extends Component{
    render(){

        return( 
            <div id="sideBar" className="col-2" > 
                <ul id="options">

                        <li className="link">
                        <Link to="/" className={window.location.pathname==="/"?"nav-link active" : "nav-link" }>
                        <p>Home</p>  
                        </Link>   
                        </li>
                    
                  
                        <li className="link">
                        <Link to="/about" className={window.location.pathname==="/about"?"nav-link active" : "nav-link" }>
                        <p>About</p>  
                        </Link> 
                        </li>
                 
                  
                        <li className="link"> 
                         <Link to="/projects" className={window.location.pathname==="/projects"?"nav-link active" : "nav-link" }>
                        <p>Projects</p>
                        </Link> 
                        </li>
                
                    <li className="link">
                        
                    <Link to="/contact" className={window.location.pathname==="/contact"?"nav-link active" : "nav-link" }>
                        <p>Contact</p> 
                        </Link> 
                    </li>
                   
              
                   

                </ul>

            </div>


        )
    }




}

export default SideBar