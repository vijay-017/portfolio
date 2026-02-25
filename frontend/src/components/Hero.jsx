
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, Mail, Github, Linkedin, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const roles = ["Full Stack Developer", "Spring Boot Developer", "AI Enthusiast", "AI & Spring Boot Integration"];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="home" className="hero-section">
            {/* Decorative Background Elements */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>

            <div className="section-container hero-container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="hero-content"
                >
                    <motion.span variants={itemVariants} className="greeting">
                        Hello, I'm
                    </motion.span>
                    <motion.h1 variants={itemVariants} className="name">
                        Vijay Sankar Kambala
                    </motion.h1>
                    <motion.div variants={itemVariants} className="role-container">
                        <span className="role-prefix">Aspiring </span>
                        <AnimatePresence mode='wait'>
                            <motion.span
                                key={currentRole}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="highlight"
                            >
                                {roles[currentRole]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>
                    <motion.p variants={itemVariants} className="intro">
                        Building robust web applications with modern technologies. Passionate about solving complex problems and crafting seamless user experiences.
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-actions">
                        <a href="#contact" className="btn btn-primary">
                            Contact Me <Mail size={18} />
                        </a>
                        <a href="/resume.pdf" download className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            Download Resume <FileDown size={18} />
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="social-links">
                        <a href="https://github.com/vijay-017" target="_blank" rel="noopener noreferrer" aria-label="Github">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/vijaysankarkambala/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="hero-image"
                >
                    <div className="avatar-wrapper">
                        <div className="avatar-background"></div>
                        <div className="avatar-placeholder">
                            <div className="avatar-circle"></div>
                        </div>
                        {/* Interactive floating badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="floating-badge badge-1"
                        >
                            <span>React</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                            className="floating-badge badge-2"
                        >
                            <span>Java</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                            className="floating-badge badge-3"
                        >
                            <span>Spring Boot</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                            className="floating-badge badge-4"
                        >
                            <span>AI Integration</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="scroll-indicator"
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
