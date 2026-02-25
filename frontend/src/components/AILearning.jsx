
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Zap, Code2 } from 'lucide-react';
import './AILearning.css';

const AILearning = () => {
    const aiSkills = [
        {
            icon: Bot,
            title: 'AI-Assisted Coding',
            description: 'Leveraging GitHub Copilot and Cursor to accelerate development workflows and write cleaner, more efficient code.'
        },
        {
            icon: Cpu,
            title: 'LLM Integration',
            description: 'Exploring OpenAI and Gemini APIs to build intelligent applications that understand and generate natural language.'
        },
        {
            icon: Zap,
            title: 'Prompt Engineering',
            description: 'Mastering the art of crafting precise prompts to maximize the output quality of Generative AI models.'
        },
        {
            icon: Code2,
            title: 'Modern Stack Adaptation',
            description: 'Continuously updating skills to integrate AI-driven libraries and frameworks into full-stack projects.'
        }
    ];

    return (
        <section id="ai-learning" className="ai-section">
            <div className="section-container">
                <div className="ai-header">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        className="ai-badge"
                    >
                        Future Ready
                    </motion.div>
                    <h2 className="section-title">Embracing the AI Revolution</h2>
                    <p className="ai-subtitle">
                        Technology is evolving, and so am I. Here's how I'm integrating Artificial Intelligence into my development journey.
                    </p>
                </div>

                <div className="ai-grid">
                    {aiSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="ai-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="icon-wrapper">
                                <skill.icon size={32} />
                            </div>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AILearning;
