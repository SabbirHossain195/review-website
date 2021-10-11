import Button from '@restart/ui/esm/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Trending.css';

const Trending = () => {
    return (
        <div className="trends-container">
            <div className="trends">
                <h3>Digital Marketing</h3>
                <img src="https://www.springboard.com/library/static/e0b29052b2928958a4daec7dc3355054/c1b63/08-07-_-banner.png"></img>
                <br />
                <NavLink to="/courses" className="navlink"> <Button className="trends-btn" variant="contained">See all</Button> </NavLink>
            </div>
            <div className="trends">
                <h3>Web Development</h3>
                <img src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"></img>
                <br />
                <NavLink to="/courses" className="navlink"> <Button className="trends-btn" variant="contained">See all</Button> </NavLink>
            </div>
            <div className="trends">
                <h3>App Development</h3>
                <img src="https://www.digitalauthority.me/wp-content/uploads/2019/04/shutterstock_572886535.jpg"></img>
                <br />
                <NavLink to="/courses" className="navlink"> <Button className="trends-btn" variant="contained">See all</Button> </NavLink>
            </div>
            <div className="trends">
                <h3>Ethical Hacking</h3>
                <img src="https://www.astatraining.com/wp-content/uploads/2020/03/what-is-an-ethical-hacker.jpg"></img>
                <br />
                <NavLink to="/courses" className="navlink"> <Button className="trends-btn" variant="contained">See all</Button> </NavLink>
            </div>
        </div>
    );
};

export default Trending;