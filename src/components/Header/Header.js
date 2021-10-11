import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div>
                <h2><span>BlueTech</span> IT Institute</h2>
            </div>
            <nav>
                <NavLink to="/home" className="navlink">Home</NavLink>
                <NavLink to="/courses" className="navlink"> Courses </NavLink>
                <NavLink to="/trending" className="navlink"> Trending </NavLink>
                <NavLink to="/about" className="navlink">About Us </NavLink>
            </nav>
        </div>
    );
};

export default Header;