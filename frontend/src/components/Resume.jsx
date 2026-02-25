
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';
import './Resume.css';

const Resume = () => {
    const resumePath = "/vijay_java_full_stack.pdf";

    return (
        <section id="resume" className="resume-section">
            <div className="section-container">
                <h2 className="section-title">Resume</h2>

                <div className="resume-content">
                    <motion.div
                        className="resume-preview-container"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="resume-window">
                            <div className="window-header">
                                <div className="window-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="window-title">vijay_resume.pdf</span>
                            </div>
                            <div className="resume-viewer">
                                <iframe
                                    src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=0`}
                                    title="Resume Preview"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                ></iframe>
                                <div className="viewer-overlay">
                                    <a href={resumePath} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                        View Full Screen <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="resume-actions">
                        <p>
                            Check out my full resume to see my detailed work history,
                            educational background, and list of certifications.
                        </p>
                        <div className="action-btns">
                            <a href={resumePath} download className="btn btn-primary btn-lg">
                                Download Full Resume <Download size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
