
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo">
          &lt;Dev<span className="accent">Portfolio</span>/&gt;
        </a>

        {/* Desktop Menu */}
        <div className="nav-menu desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="/resume.pdf" download className="btn-sm btn-primary">
            Resume <Download size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle">
          <button onClick={toggleTheme} className="theme-toggle-mobile">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="/resume.pdf" download className="mobile-link highlight">
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
