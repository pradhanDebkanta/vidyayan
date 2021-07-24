import React from 'react';
import { Coding3, procedure } from './procedure';
import Banner from '../banner/Banner';
import './HowWork.css';

const HowWork = () => {
    const item = procedure.map((items, idx) => {
        return (
            <div className="procedure" key={idx}>
                <div className="number-box">
                    {items.tecqunicNo}
                </div>
                <div className="tecqunic-box">
                    <h5 className="reason">
                        {items.tecqunic}
                    </h5>
                    <p className="reason-text">
                        {items.explain}
                    </p>
                </div>

            </div>
        );
    });
    return (
        <div className="work-container-fluid">
            <div className="container">
                <div className="how-work-container">
                    <div className="work-header">
                        <h5 className="learning-text">
                            How It Works
                        </h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="svg-container">
                                {Coding3[0].svg}
                            </div>
                        </div>
                        <div className="col-md-6">
                            {item}
                        </div>
                    </div>
                    <div className="down-box">
                        <Banner
                            content="Book a free trial class"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWork;