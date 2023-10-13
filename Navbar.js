import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (  
        <nav className="navbar">
        <h1>WEB DEVELOPER</h1>
        <div className="links">
            <Link to ="/">Home</Link>
            <Link to="/">Projects</Link>
            <Link to="/">Contact</Link>
        </div>
    </nav>
    );
    
}
 
export default Navbar;