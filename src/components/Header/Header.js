import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, FormControl, InputGroup } from 'react-bootstrap';
import Menu from '../Menu/Menu';
import "./Header.css"
const Header = () => {
    return (
        <div className="header ">
            <div className="w-75">
                <div className="text-white p-5">
                    <h1 >Programming World</h1>
                    <h4>Be The Friend <br /> Of Computers, <br /> And Change Your Life</h4>
                </div>
                <div>
                    <Card className="ms-5 opacity-75" style={{ width: '25rem', height: '300px' }}>
                        <Card.Body>
                            <Card.Title className="mb-2 text-muted">Want to enjoy free demo class?</Card.Title>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Course Name"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">Course Name</InputGroup.Text>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Phone number"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    Send OTP
                                </Button>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="OTP"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                            </InputGroup>
                            <div className="text-center">
                                <Card.Link href="/submit" > <Button variant="info" className="bg-primary bg-gradient" >Submit</Button></Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Header;