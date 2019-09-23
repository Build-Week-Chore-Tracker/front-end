import React from "react";
import {Link} from 'react-router-dom'

    const Dashboard = () => {
        return (
            <div>
                <h1>Chore Tracker!</h1>
                <Link to="/chores">Chores</Link>
                <Link to="/family">Family</Link>
            </div>
        )
    }

    export default Dashboard