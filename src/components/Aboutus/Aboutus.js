import React from 'react';
import {  FormControl, InputGroup,  Button } from 'react-bootstrap';
const Aboutus = () => {
    return (
        <div className="m-5">
            <h1 className="text-center m-5 fs-1">Programming World - great programmer's home</h1>
            <p className="text-center text-justify">Programming World is building a world free of poverty and unemployment. <br /> We see individual and systemic acts of harm as a symptoms of patriarchal <br /> beliefs that can be transformed.
                We deliver different courses <br /> that helps people who are passionate about their career and programming. <br /> After graduating, Alumni receive support for life. </p>
            <h5 className="text-center mx-5 mt-5">Follow us:</h5>
            <div className="text-center">
            <a className="  fs-2" href="/facebook"><i className="fab fa-facebook-square"></i></a>
            <a className="  fs-2 ms-3" href="/linkedin"><i className="fab fa-linkedin"></i></a>
            <a className="  fs-2 ms-3" href="/instagram"><i class="fab fa-instagram-square"></i></a>
            </div>
            <div className=" mx-auto w-50 my-5">
            <h5>Have more queries?</h5>
            <h6 className="text-muted">Send us an Email</h6>
                        <InputGroup className="mb-3">
                        <FormControl as="textarea" aria-label="With textarea" />
                            <Button variant="outline-secondary" id="button-addon2" className="text-dark">
                                Send
                            </Button>
                        </InputGroup>
            </div>
        </div>
    );
};

export default Aboutus;