import React from 'react';
import { Card,  Image,  ProgressBar, Button } from 'react-bootstrap';

const EnrolledCourses = (props) => {
    const {name,about,progress,difficulty,picture}=props.course;

    return (
        <div className="col overflow-hidden">
            <Card border="info" style={{ width: '20rem',height:"470px" }} className=" mx-auto my-5 shadow bg-body rounded overflow-hidden">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{difficulty}</Card.Subtitle>
                    <hr />
                    <Image src={picture} width="286px" height="161px" />
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <hr />
                    <ProgressBar className="mt-4 mb-4" now={progress} />

                    <Card.Link href="/continue" className="text-decoration-none m-5 me-4"><Button variant="secondary">Continue Course</Button></Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default EnrolledCourses;