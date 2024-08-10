import React from 'react';
import './projects.css';

const projects = [
    {
        "id": "project1",
        "image": "personalsite/logo.png",
        "github": "https://github.com/user/project1",
        "youtube": "https://youtube.com/demo1"
    },
    {
        "id": "project2",
        "image": "/terpiez.png",
        "github": "https://github.com/umangj123/FlutterApp/tree/main",
        "youtube": "https://youtube.com/demo2"
    },
    {
        "id": "project3",
        "image": "/othello.jpeg",
        "github": "https://github.com/umangj123/OthelloAI",
        "youtube": "https://youtube.com/demo2"
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div className="projects-container">
            {projects.map(project => (
                <div key={project.id} className="project-card">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <img src={project.image} alt={project.id} className="project-image" />
                        <div className="overlay">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-button">GitHub</a>
                            <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="link-button">Demo</a>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
