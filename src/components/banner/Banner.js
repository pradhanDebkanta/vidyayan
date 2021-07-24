import React from 'react';
import { bannerItem } from './bannerItem';
import './Banner.css';

const Banner = (props) => {
    return (
        <div className="banner-box">
            <div className="left-item">
                {bannerItem[0].svg}
            </div>
            <div className="middle-item">
                <p className="banner-content">
                    {props.content}
                </p>
                <button className="btn btn-red">
                    <a href="#join" className="btn-link red">
                        Book a free class
                    </a>
                </button>

            </div>
            <div className="right-item">
                <img src={bannerItem[1].svg} className="img-fluid banner-img" alt="banner img"/>
            </div>

        </div>
    );
};

export default Banner;
