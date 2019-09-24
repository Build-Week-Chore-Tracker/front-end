import React from "react";
import Chores from "./Chores"
import Family from "./Family"
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
            <Link to="/">Family</Link>
            <Link to="/Chores">Chores</Link>
            <Link to="/settings">Settings</Link>
        </NavDiv>
    )
}


export default NavBar 