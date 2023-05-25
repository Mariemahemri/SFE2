import React , {useContext }  from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { AuthContext } from "../../Context/AuthContext";
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar =()=>{

    const { user, loading, error } = useContext(AuthContext);;

    return (
        <div className="navbar">
        
            <div className="navContainer">
                <Link to="/" className="custom-link" >
                  <h1 className="logo" >Myuni travels</h1> 
                </Link>
                
                {user ?(<div> <FontAwesomeIcon   className="icon" icon={faUser} /> {user.username}</div> )   : (
                <div className="navItems">
                        <Link to="/login">
                        <button className="navButton">Register</button>
                        </Link>
                        <Link to="/register">
                            <button className="navButton">Login</button>
                        </Link>
                        </div> )}



            </div>
                

        </div>
    )
}
export default Navbar;