import logo from './logo.svg';
import './App.css';

import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar.js';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './components/Footer.js';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/photography" element={<Photography />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
