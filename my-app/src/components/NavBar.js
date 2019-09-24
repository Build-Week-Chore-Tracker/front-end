import React from "react";
import Chores from "./Chores"
import Family from "./Family"
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to="/">Family</Link>
            <Link to="/Chores">Chores</Link>
        </div>
    )
}


export default NavBar 