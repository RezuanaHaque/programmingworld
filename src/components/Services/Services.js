import React from 'react';
import useCourses from '../../Hooks/useCourses';
import Course from '../Course/Course';

const Services = () => {
    const [courses] = useCourses()
    return (
        <div>
            <h1 className="p-3 text-center bg-success p-4 text-white bg-opacity-75 ">All Courses</h1>
            {
                <div className="row m-5 g-5">
                    {
                        courses.map(course => <Course key={course._id} course={course}></Course>)
                    }
                </div>
            }
        </div>
    );
};

export default Services;