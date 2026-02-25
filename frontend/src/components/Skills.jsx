
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench, BookOpen } from 'lucide-react';
import './Skills.css';

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
    <motion.div
        className="skill-category"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        <div className="category-header">
            <Icon className="category-icon" size={24} />
            <h3>{title}</h3>
        </div>
        <div className="skills-list">
            {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bg">
                        <motion.div
                            className="progress-bar"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                        />
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const skillsData = [
        {
            title: 'Frontend',
            icon: Code,
            skills: [
                { name: 'HTML/CSS', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'React', level: 80 },
                { name: 'Bootstrap', level: 85 },
            ]
        },
        {
            title: 'Backend',
            icon: Server,
            skills: [
                { name: 'Java', level: 80 },
                { name: 'SQL', level: 75 },
            ]
        },
        {
            title: 'Tools',
            icon: Wrench,
            skills: [
                { name: 'Git & GitHub', level: 80 },
                { name: 'VS Code', level: 90 },
                { name: 'Postman', level: 75 },
                { name: 'Eclipse', level: 70 }
            ]
        },
        {
            title: 'Learning',
            icon: BookOpen,
            skills: [
                { name: 'Spring Boot', level: 50 },
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="section-container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <SkillCategory
                            key={category.title}
                            {...category}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
