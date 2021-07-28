import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container-fluid px-5 navBar">
            <div className="row no-gutters nav-box">
                <a href="https://www.vidyayan.in/" target="_blank" rel="noreferrer" className="nav-brand-link">
                    <h2 className="nav-brand">Vidyayan</h2>
                </a>

            </div>
        </div>
    );
};

export default Navbar;