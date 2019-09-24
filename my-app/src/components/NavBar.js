import React from "react";

import {Link} from 'react-router-dom'
import styled from "styled-components";

    const NavDiv = styled.div`
        display:flex;
        align-items:center;
        justify-content:space-around;
        
    `;
const NavBar = () => {
    return (
        <NavDiv>
            <h1>Chore Tracker!</h1>
            <Link className="nav-links" to="/">Family</Link>
            <Link className="nav-links" to="/Chores">Chores</Link>
            <Link className="nav-links" to="/rewards">Rewards</Link>
            <Link className="nav-links" to="/settings">Settings</Link>
        </NavDiv>
    )
}


export default NavBar 