import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (  
     <nav className="navbar">
        <h1>WEB DEVELOPER</h1>
        <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
      </nav>
    );
    
}
 
export default Nav;