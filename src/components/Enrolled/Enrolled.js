import React from 'react';

import useCourses from '../../Hooks/useCourses';
import EnrolledCourses from '../EnrolledCourses/EnrolledCourses';
const Enrolled = () => {
    const [courses] = useCourses();
    const enrolledcourses = courses.slice(0, 3);
    return (
        <div>
            <h1 className="p-3 text-center bg-success p-4 text-white bg-opacity-75 ">Enrolled Courses</h1>
            <div className="row row-cols-lg-3">
                {
                    enrolledcourses.map(course => <EnrolledCourses key={course._id} course={course}></EnrolledCourses>)
                }
            </div>
        </div>
    );
};

export default Enrolled;