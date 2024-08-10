import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <h2>Umang Jain</h2>
            </div>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                <li><Link to="/">home</Link></li>
                <li><Link to="/projects">projects</Link></li>
                <li><Link to="/photography">photography</Link></li>
                <li><Link to="/blog">blog</Link></li>
                {/* <li><a href="/resume.pdf" target="/UmangJainResume.pdf">Resume</a></li> */}
                <li><Link to="/contact">contact</Link></li>
            </ul>
            <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
                {isMobile ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
    );
};

export default Navbar;
