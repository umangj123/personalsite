import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactPopup.css';

const ContactPopup = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, 
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ezid4ib', 'template_y63b2yo', e.target, 'RyWP6j7l-ql8MchSn')
            .then((result) => {
                alert('Message Sent!');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                alert('Failed to send message, please try again later.');
            });
    };

    return (
        <div className="contact-popup">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={formData.message} onChange={handleChange} required />
                    </label>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPopup;
