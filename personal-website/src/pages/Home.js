import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    const roles = ["Software Engineer", "Photographer", "Innovator", "Puzzler"];
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [roles.length]);

    return (
        <div className="home-container">
            {/* Landing Section */}
            <div className="landing-section">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Hi! 👋🏽 I'm Umang Jain - I'm a{" "}
                    <motion.span
                        key={roles[index]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {roles[index]}
                    </motion.span>
                </motion.h1>
                <div className="resume">
                    <a href="/resume.pdf" target="_blank">Download My Resume</a>
                </div>
                <a href="#about-section" className="scroll-down">Scroll to learn more about me</a>
            </div>

            {/* About Me Section */}
            <section id="about-section" className="about-section">
                <img src="./umang.JPG" alt="Umang Jain" className="about-image" />
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        I'm Umang Jain, a multifaceted individual with a passion for technology, creativity, and solving complex puzzles.
                    </p>
                    <p>
                        My journey as a Software Engineer has been driven by a deep curiosity to understand and create, while photography allows me to capture the beauty of the world around me. As an innovator, I thrive on bringing new ideas to life, and my love for puzzles fuels my problem-solving skills.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
