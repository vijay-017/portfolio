
import React from 'react';
import './Footer.css';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="section-container footer-container">
                <p className="copyright">
                    &copy; {currentYear} Aspiring Java Developer. All rights reserved.
                </p>
                <p className="credit">
                    Made with <Heart size={16} className="heart-icon" /> and React
                </p>
            </div>
        </footer>
    );
};

export default Footer;
