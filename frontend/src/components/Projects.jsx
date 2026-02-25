
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Bank Management System',
            description: 'A comprehensive system to manage bank accounts, deposits, withdrawals, and transactions. Features include user authentication, transaction history, and account management.',
            tech: ['React', 'Spring Boot', 'MySQL'],
            github: 'https://github.com/vijay-017/bank-application',
            demo: 'https://bank-application-u3ig.vercel.app/'
        },
        {
            title: 'Challenge Tracker App',
            description: 'A productivity application that allows users to set daily challenges and track their progress streaks. Implements data persistence and visual progress indicators.',
            tech: ['React', 'Node.js', 'MongoDB'],
            github: '#',
            demo: '#'
        },
        {
            title: 'AI-Integrated Spring Boot Backend',
            description: 'A conceptual project aimed at bridging Java backends with LLMs. Focusing on automated data processing and intelligent response generation using Gemini API.',
            tech: ['Java', 'Spring Boot', 'Gemini AI', 'MySQL'],
            github: '#',
            demo: '#'
        },
        {
            title: 'React Mini Projects',
            description: 'A collection of small interactive applications including a Todo List, Weather App, and Calculator to demonstrate core React concepts.',
            tech: ['React', 'CSS', 'API Integration'],
            github: '#',
            demo: '#'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <h2 className="section-title">Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-header">
                                <Folder className="folder-icon" size={40} />
                                <div className="project-links">
                                    <a href={project.github} aria-label="Github Repo" target="_blank" rel="noopener noreferrer">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
