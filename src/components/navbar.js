import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <div className="nav">
        <div className="boardName"><Link to="/">Game</Link></div>
        <div className="boardName"><Link to="/ranking">Ranking</Link></div>
        </div>
    )
}

export default NavBar;