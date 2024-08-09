import React, { useState } from 'react';
import ContactPopup from '../components/ContactPopup';
import './Contact.css';

const Contact = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="contact-page">
            <h1>Contact</h1>
            <button className="contact-btn" onClick={openPopup}>Contact Me</button>
            {isPopupOpen && <ContactPopup onClose={closePopup} />}
        </div>
    );
};

export default Contact;
