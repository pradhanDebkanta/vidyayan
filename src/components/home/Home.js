import React from 'react';
import Coding1 from './Coding1';
import CoursesIcon from './CoursesIcon';
import './Home.css';

const Home = () => {
    let coursesList = CoursesIcon.map((course, idx) => {
        return (
            <div className="col-md-2 col-sm-4 col-6" key={idx}>
                <div className="course-item-box">
                    <div className="course-item">
                        {course.svg}
                    </div>
                    <a href={course.courseLink} className="course-link" >
                        <p className="course-name">
                            {course.courseName}
                        </p>
                    </a>

                </div>

            </div>
        );
    })
    return (
        <div className="container">
            <div className="home">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box-1">
                            <h3 className="box-1-heading">
                                <span className="heading-orange">Creating Future</span> Tech Leaders
                            </h3>
                            <p className="home-content">
                                Live coding classes for age 6 -15 to help your child learn to code
                            </p>
                            <button className="btn">
                                <a href="#join" className="btn-link">
                                    Join Now
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="codindg1-box d-flex justify-content-center">
                            <Coding1 />
                        </div>

                    </div>
                </div>
                <h4 className="heading-bottom">
                    Cutting edge courses to make your child future ready
                </h4>
                <div className="row course-box">
                    {coursesList}
                </div>
            </div>

        </div>
    );
};

export default Home;