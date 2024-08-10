import React, { useEffect } from 'react';
import './Blog.css';

const Blog = () => {
    useEffect(() => {
        // Define the SubstackFeedWidget globally
        window.SubstackFeedWidget = {
            substackUrl: "thecornucopia.substack.com",
            posts: 4
        };

        // Dynamically load the Substack feed script
        const script = document.createElement('script');
        script.src = 'https://substackapi.com/embeds/feed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="blog-page">
            <h1>My Blog 🗞️</h1>
            <p>
                Check out the full blog at my Substack:{" "}
                <a href="https://thecornucopia.substack.com" target="_blank" rel="noopener noreferrer">
                    The Cornucopia
                </a>
            </p>
            <div id="substack-feed-embed"></div>
        </div>
    );
};

export default Blog;
