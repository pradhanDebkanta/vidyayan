import React from 'react';
import { reason1, reason2, coding2 } from './CodingReason';
import './WhyCoding.css';

const WhyCoding = () => {
    const leftReson = reason1.map((reasons, idx) => {
        return (
            <div className="coding-reason-box1" key={idx}>
                <div className="reason-logo">
                    {reasons.svg}
                </div>
                <div className="reason-box">
                    <h5 className="reason">
                        {reasons.reason}
                    </h5>
                    <p className="reason-text">
                        {reasons.explain}
                    </p>
                </div>
            </div>
        );
    });
    const rightReason = reason2.map((reasons, idx) => {
        return (
            <div className="coding-reason-box1" key={idx}>
                <div className="reason-logo">
                    {reasons.svg}
                </div>
                <div className="reason-box">
                    <h5 className="reason">
                        {reasons.reason}
                    </h5>
                    <p className="reason-text">
                        {reasons.explain}
                    </p>
                </div>


            </div>
        );
    });

    const coding2Img = coding2.map((img, idx) => {
        return (
            <div className="svg-container" key={idx}>
                {img.svg}
            </div>
        );
    })

    return (
        <div className="container why-coding">
            <div className="why-coding-header-box">
                <h4 className="why-coding-header">
                    Why Coding?
                </h4>
                <p className="why-coding-text">
                    Vidyayan Focuses on developing ‘skills’ rather than ‘syntax’, to make children
                </p>
            </div>
            <div className="row why-coding-box">
                <div className="col-lg-8 col-md-12">
                    <div className="row">
                        <div className="col-sm-6">
                            {leftReson}
                        </div>
                        <div className="col-sm-6">
                            {coding2Img}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    {rightReason}

                </div>
                <button className="btn">
                    <a href="#join" className="btn-link">
                        Book a free class   
                    </a>
                </button>

            </div>
        </div>
    );
};

export default WhyCoding;