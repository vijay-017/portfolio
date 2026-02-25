
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import './Resume.css';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <div className="section-container">
                <h2 className="section-title">Resume</h2>

                <div className="resume-content">
                    <motion.div
                        className="resume-preview"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Visual representation of a resume page */}
                        <div className="resume-paper">
                            <div className="paper-header"></div>
                            <div className="paper-body">
                                <div className="line long"></div>
                                <div className="line medium"></div>
                                <div className="line short"></div>
                                <div className="line long margin-top"></div>
                                <div className="line long"></div>
                                <div className="line medium"></div>
                            </div>
                            <div className="resume-overlay">
                                <FileText size={48} className="preview-icon" />
                                <span>Preview Available</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="resume-actions">
                        <p>
                            Check out my full resume to see my detailed work history,
                            educational background, and list of certifications.
                        </p>
                        <a href="/resume.pdf" download className="btn btn-primary btn-lg">
                            Download Full Resume <Download size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
