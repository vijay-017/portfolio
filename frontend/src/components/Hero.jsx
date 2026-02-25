
import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Mail, Github, Linkedin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="section-container hero-container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">Vijay Sankar Kambala</h1>
                    <h2 className="role">Aspiring <span className="highlight">Java Full Stack Developer</span></h2>
                    <p className="intro">
                        Building robust web applications with modern technologies. Passionate about solving complex problems and crafting seamless user experiences.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">
                            Contact Me <Mail size={18} />
                        </a>
                        <a href="/resume.pdf" download className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            Download Resume <FileDown size={18} />
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Github">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-image"
                >
                    <div className="avatar-placeholder">
                        {/* Replace with actual image */}
                        <div className="avatar-circle"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
