import Button from '@restart/ui/esm/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import Banner from '../Banner/Banner';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {

    const [courses] = useCourses();

    return (
        <div className="home-container">
            <Banner></Banner>
            <div className="home-course">
                {
                    courses.slice(0, 3).map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
            <div>
                <NavLink to="/courses" className="navlink"><Button className="show-more-button">Show More Course >> </Button></NavLink>
            </div>
        </div >
    );
};

export default Home;