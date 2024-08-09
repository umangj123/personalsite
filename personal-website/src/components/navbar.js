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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/photography">Photography</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><a href="/resume.pdf" target="_blank">Resume</a></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
                {isMobile ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
    );
};

export default Navbar;
