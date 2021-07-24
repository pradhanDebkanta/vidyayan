import React from 'react';
import './Footer.css';

const Footer=()=>{
    return(
        <div className="container-fluid footer">
            <p className="footer-text">
            <span className="heart">❤</span> Design by 
                <a href="https://github.com/pradhanDebkanta/" className="debkanta"> Debkanta Pradhan</a>
            </p>
        </div>
    );
};

export default Footer;