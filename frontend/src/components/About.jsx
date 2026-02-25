
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Code, Brain, X, ChevronRight } from 'lucide-react';
import './About.css';

const About = () => {
    const [selectedId, setSelectedId] = useState(null);

    const educationData = [
        {
            title: "B.Tech in CSE",
            school: "GMR Institute of Technology",
            year: "3rd Year (Current)",
            grade: "CGPA: 8.1" // Assuming current, or leave blank if not provided
        },
        {
            title: "Diploma in Engineering",
            school: "Government Polytechnic Srikakulam",
            year: "1st Year - 3rd Year",
            grade: "83%"
        },
        {
            title: "Secondary School",
            school: "Govt. High School Hiramandalam",
            year: "6th - 10th Standard",
            grade: "93%"
        }
    ];

    const handleCardClick = (id) => {
        if (id === 'education') {
            setSelectedId(selectedId === 'education' ? null : 'education');
        }
    };

    return (
        <section id="about" className="about-section">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>

                    <div className="about-content">
                        <div className="about-main">
                            <p className="about-text">
                                I am a passionate <strong>3rd Year Computer Science & Engineering</strong> student at
                                <strong> GMR Institute of Technology</strong>. My journey in tech is driven by a curiosity
                                to build scalable web applications and solve real-world problems through code.
                            </p>
                            <p className="about-text">
                                As an aspiring <strong>Java Full Stack Developer</strong>, I am constantly honing my skills
                                in both frontend and backend technologies. I thrive in collaborative environments and am
                                always eager to learn new tools and frameworks.
                            </p>
                        </div>

                        <div className="about-cards">
                            <motion.div
                                className="card clickable-card"
                                layoutId="education-card"
                                onClick={() => setSelectedId('education')}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <motion.div layoutId="edu-icon">
                                    <GraduationCap className="card-icon" size={32} />
                                </motion.div>
                                <motion.h3 layoutId="edu-title">Education</motion.h3>
                                <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
                                    <p>B.Tech in CSE</p>
                                    <p className="sub-text">Click for Full Timeline</p>
                                </motion.div>
                            </motion.div>

                            <div className="card">
                                <Code className="card-icon" size={32} />
                                <h3>Passion</h3>
                                <p>Web Development</p>
                                <p className="sub-text">Problem Solving</p>
                                <p className="sub-text">Full Stack Architecture</p>
                            </div>

                            <div className="card">
                                <Brain className="card-icon" size={32} />
                                <h3>Future Focus</h3>
                                <p>AI Integration</p>
                                <p className="sub-text">Adapting to AI Tools</p>
                                <p className="sub-text">Continuous Learning</p>
                            </div>


                        </div>
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedId === 'education' && (
                    <div className="modal-overlay" onClick={() => setSelectedId(null)}>
                        <motion.div
                            className="education-modal"
                            layoutId="education-card"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <motion.div layoutId="edu-icon">
                                    <GraduationCap className="card-icon" size={32} />
                                </motion.div>
                                <motion.h3 layoutId="edu-title">Education Timeline</motion.h3>
                                <button className="close-btn" onClick={() => setSelectedId(null)}>
                                    <X size={24} />
                                </button>
                            </div>

                            <motion.div
                                className="education-list"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                {educationData.map((edu, index) => (
                                    <div key={index} className="edu-item">
                                        <div className="edu-header">
                                            <ChevronRight size={16} className="edu-bullet" />
                                            <span className="edu-title">{edu.title}</span>
                                        </div>
                                        <div className="edu-details">
                                            <p className="edu-school">{edu.school}</p>
                                            <div className="edu-meta">
                                                <span className="edu-year">{edu.year}</span>
                                                {edu.grade && <span className="edu-grade">{edu.grade}</span>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default About;
