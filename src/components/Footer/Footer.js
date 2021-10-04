// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Nav, Row, Button } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="text-light bg-dark p-5">
                <Row>
                    <Col>
                        <h5>Follow us:</h5>
                        <a className="text-light  fs-5" href="/facebook"><i className="fab fa-facebook-square"></i></a>
                        <a className="text-light  fs-5 ms-3" href="/linkedin"><i className="fab fa-linkedin"></i></a>
                        <a className="text-light  fs-5 ms-3" href="/instagram"><i class="fab fa-instagram-square"></i></a>
                    </Col>
                    <Col>
                        <h5>Quick Links</h5>
                        <a className="text-light text-decoration-none" href="/home">Home</a><br />
                        <a className="text-light text-decoration-none" href="/services">Services</a><br />
                        <a className="text-light  text-decoration-none" href="/aboutus">About us</a><br />
                        <a className="text-light text-decoration-none" href="/successstories">Success Stories</a>
                    </Col>
                    <Col>
                        <h5>Be the first to know about new offers</h5>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2" className="text-light">
                                Sign up
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;