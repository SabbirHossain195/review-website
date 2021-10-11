import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">Meet Our <span>Team</span></h1>
            <img src="https://media.istockphoto.com/vectors/happy-young-employees-giving-support-and-help-each-other-vector-id1218490893?k=20&m=1218490893&s=612x612&w=0&h=svJxkZEFiciFHufK4LNn13TpNip1cVPW9Ig0Ahuugqs=" className=" rounded-start" alt="..." />
            <p>We are group of enthusiastic people who are continously working to make you skilled. Here we organised courses to improve your skill and trying to make sure your job oppurtunity. All the courses have a highly experienced trainee and a mentor to imprvove your skil. You just need to do hgard work. Our team always with you all the time and we try our best to make you best.</p>
        </div>
    );
};

export default About;