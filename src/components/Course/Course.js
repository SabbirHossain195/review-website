import React from 'react';
import { Card } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const { courseName, img, details } = props.course;
    return (
        <div className="card-container">
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <h2>{courseName}</h2> </Card.Title>
                    <Card.Text>{details}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;