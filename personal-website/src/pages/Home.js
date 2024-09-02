import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    const roles = ["Student", "Software Engineer", "Photographer", "Innovator", "Puzzler"];
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
                        className={'roles'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {roles[index]}
                    </motion.span>
                </motion.h1>
                <a href="/personalsite/UmangJainResume.pdf" target="_blank" className='button'>resume 📄</a>
    
                <a href="#about-section" className="button scroll-down">more about me 👇🏽</a>
            </div>

            {/* About Me Section */}
            <section id="about-section" className="about-section">
                <h2 className="about-header">About Me 🙋🏽‍♂️</h2>
                <div className="about-content">
                    <img src="/personalsite/umangjain.jpg" alt="Umang Jain" className="about-image" />
                    <div className="about-text">
                        <p>
                            I'm Umang Jain, a senior at the University of Maryland, College Park where I'm studying computer science! Currently I am searching for fulltime new grad roles as an
                            associate product manager or software engineer.
                        </p>
                        <p>
                             My journey and passion for technology has been driven by a deep curiosity to solve the worlds most pressing problems. Specifically, I thrive on bringing new ideas to life.
                             from creating apps to help those with disabilities, a device to fight opioid addiction, attachments to escape house fires, services to reduce clothing waste - I've jumped at dozens of my ideas.
                        </p>
                        <p> <b>My Hobbies:</b><br></br><br></br>
                            photography 📸
                            volleyball 🏐
                            puzzles/boardgames 🧩
                            travelling 🛩️  [Currently in Spain 🇪🇸]</p>

                            <p><b>Fun Facts:</b></p>
                            <ol>
                                <li>I recently just sold 100 copies of my very own board game - the PartyBox!</li>
                                <li>I've had a letter to the editor published in the Washinton Post</li>
                                <li>I've been to 26 airports</li>
                            </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
