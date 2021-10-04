import React from 'react';
import { Card, Image, ListGroup, ListGroupItem } from 'react-bootstrap';

const Course = (props) => {
    const { name, instructor, fee, difficulty,picture } = props.course;
    return (
        <div className="col-lg-4">
            <Card style={{ width: '18rem',marginLeft:"10%"}} className="shadow-sm bg-body rounded">
            <Image src={picture} width="286px" height="161px" />
                <Card.Body>
                    <Card.Title className="text-center fs-3"><b>{name}</b></Card.Title>
  {/*                   <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><b>Instructor: </b>{instructor}</ListGroupItem>
                    <ListGroupItem className="text-uppercase"><b>{difficulty}</b></ListGroupItem>
                    <ListGroupItem><b>Price: </b>{fee} tk</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <div className="text-center">
                    <Card.Link href="/enrollnow" className="w-50"><button className="btn btn-primary ">Enroll now</button></Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;