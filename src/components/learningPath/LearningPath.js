import React from 'react';
import './LearningPath.css';
import { TimeLine } from './TimeLine';

const LearningPath = () => {
    return (
        <div className="container-fluid">
            <div className="learning-container">
                <h5 className="learning-text">
                    {TimeLine[0].heading}
                </h5>
                <div className="svg-container">
                    {TimeLine[0].svg}
                </div>
            </div>
        </div>
    );
}

export default LearningPath;