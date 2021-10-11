import React from 'react';
import image from '../../images/header.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="title">
                <h1><span>Dream, Learn</span><br /><span>Plan, </span><span>Do</span></h1>
            </div>
            <div className="image">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;