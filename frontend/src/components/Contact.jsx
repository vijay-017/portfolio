
import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        alert('Message sent! (Demo only)');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="section-container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p className="contact-desc">
                            Whether you have a question, want to collaborate on a project, or just want to say hi,
                            I'd love to hear from you.
                        </p>

                        <div className="info-item">
                            <Mail className="info-icon" size={24} />
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:student@gmr.edu.in">student@gmr.edu.in</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <MapPin className="info-icon" size={24} />
                            <div>
                                <h4>Location</h4>
                                <p>GMR Institute of Technology, Rajam, AP</p>
                            </div>
                        </div>

                        <div className="info-socials">
                            <h4>Follow Me</h4>
                            <div className="social-links-contact">
                                <a href="#" aria-label="Github"><Github size={24} /></a>
                                <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your@email.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="What's on your mind?"
                                rows="5"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
