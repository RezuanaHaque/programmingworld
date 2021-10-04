// import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import Course from '../Course/Course';
import "../../Hooks/useCourses"
import useCourses from '../../Hooks/useCourses';
import Header from '../Header/Header';

const Allcourses = () => {
    const [courses] = useCourses()
    const slicedCourses = courses.slice(0, 6)
    return (
        <div>
            <Header></Header>
            <InputGroup className="m-5 w-50 mx-auto ">
                <FormControl
                    placeholder="Search"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
            {
                <div className="row m-5 g-5">
                    {
                        slicedCourses.map(course => <Course key={course._id} course={course}></Course>)
                    }
                </div>
            }
        </div>
    );
};

export default Allcourses;