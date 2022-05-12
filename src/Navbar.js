
import { Link } from 'react-router-dom';
import React from 'react';


const Navbar = () => {
    return ( 
        <div className="navbar">
            <h3>Skyblog</h3>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
            
        </div>
        </div>
     );
}

 
export default Navbar;