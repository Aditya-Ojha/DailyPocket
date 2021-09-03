import React from 'react';
import '../components/css/navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <>
            <div className="navBar">
                <NavLink className="navDeco" activeClassName="navActive" to="/news">News</NavLink>
                <NavLink className="navDeco" activeClassName="navActive" to="/weather">Weather Forecast</NavLink>
                <NavLink className="navDeco" activeClassName="navActive" to="/todo">To-Do</NavLink>
            </div>
        </>
    )
}

export default Navbar;