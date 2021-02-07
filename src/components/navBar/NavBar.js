import React from 'react';
import './Styles.scss';
import { Link } from 'react-router-dom';
import Toggle from '../toggle/Toggle';

const NavBar = () => {
    return(
        <div className="navbar-container navBar">
            <div className="navbar-row">
                <Toggle/>
            </div>
            <div className="navbar-row link-row">
                <div className="navbar-col">
                    <Link className="navLink" to="/">Home</Link>
                </div>
                <div className="navbar-col">
                    <Link className="navLink" to="/projects">Projects</Link>
                </div>
            </div>
        </div>
    );
}
export default NavBar;