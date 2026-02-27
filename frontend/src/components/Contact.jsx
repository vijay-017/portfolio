
import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            // Replace 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms access key
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'YOUR_ACCESS_KEY_HERE',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Contact Form Submission from ${formData.name}`
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus({ submitting: false, submitted: true, error: null });
                setFormData({ name: '', email: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus(prev => ({ ...prev, submitted: false })), 5000);
            } else {
                throw new Error(result.message || 'Something went wrong');
            }
        } catch (err) {
            setStatus({ submitting: false, submitted: false, error: err.message });
        }
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
                                <a href="mailto:vijayasankarkambala008@gmail.com">vijayasankarkambala008@gmail.com</a>
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
                                <a href="https://github.com/vijay-017" target="_blank" rel="noopener noreferrer" aria-label="Github"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/vijaysankarkambala/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24} /></a>
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
                                disabled={status.submitting}
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
                                disabled={status.submitting}
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
                                disabled={status.submitting}
                            ></textarea>
                        </div>

                        {status.error && (
                            <div className="form-status error">{status.error}</div>
                        )}

                        {status.submitted && (
                            <div className="form-status success">Message sent successfully! I'll get back to you soon.</div>
                        )}

                        <button
                            type="submit"
                            className={`btn btn-primary submit-btn ${status.submitting ? 'loading' : ''}`}
                            disabled={status.submitting}
                        >
                            {status.submitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
