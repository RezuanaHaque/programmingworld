import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
            <Navbar variant="light" className="pt-3 bg-dark">
                <Container>
                    <Nav className="ms-auto me-2 ">
                        <Nav.Link className="text-white me-2 fw-bold fs-5" href="/home">Home</Nav.Link>
                        <Nav.Link className="text-white me-2 fw-bold fs-5"  href="/services">Services</Nav.Link>
                        <Nav.Link className="text-white me-2 fw-bold fs-5"  href="/aboutus">About us</Nav.Link>
                        <Nav.Link className="text-white me-2 fw-bold fs-5"  href="/enrolledcourses">Enrolled-Courses</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;