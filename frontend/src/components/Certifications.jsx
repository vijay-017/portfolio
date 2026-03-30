import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, GraduationCap, Code, Terminal, Trophy } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            title: 'Java Programming',
            issuer: 'GeeksforGeeks',
            date: '2025',
            icon: Award,
            link: '/JAVA certificate from GFG.pdf',
            color: 'var(--accent-color)'
        },
        {
            title: 'ReactJS Development',
            issuer: 'GeeksforGeeks',
            date: '2025',
            icon: Code,
            link: '/ReactJs.pdf',
            color: 'var(--secondary-color)'
        },
        {
            title: 'The Joy of Computing using Python',
            issuer: 'NPTEL / Swayam',
            date: '2025',
            icon: GraduationCap,
            link: '/The Joy of Computing using Python.pdf',
            color: 'var(--primary-color)'
        },
        {
            title: 'CodeClash Competition',
            issuer: 'Programming Event',
            date: '2025',
            icon: Trophy,
            link: '/codeclash certificate.pdf',
            color: 'var(--accent-color)'
        },
        {
            title: 'Code2Debug',
            issuer: 'Technical Challenge',
            date: '2025',
            icon: Terminal,
            link: '/code2Debug certificate.pdf',
            color: 'var(--text-secondary)'
        },
        {
            title: 'Tata Crucible Campus Quiz',
            issuer: 'Tata Group',
            date: '2025',
            icon: Trophy,
            link: '/Tata_Cruible_Prelims_Level1.pdf',
            color: 'var(--secondary-color)'
        }
    ];

    return (
        <section id="certifications" className="certifications-section">
            <div className="section-container">
                <h2 className="section-title">Certifications</h2>
                <div className="certs-grid">
                    {certifications.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <motion.div
                                key={index}
                                className="cert-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="cert-icon-wrapper" style={{ '--cert-color': cert.color }}>
                                    <Icon className="cert-icon" size={32} />
                                </div>
                                <div className="cert-info">
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                    <span className="cert-date">{cert.date}</span>
                                </div>
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link" aria-label={`View ${cert.title} certification`}>
                                    <ExternalLink size={20} />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
