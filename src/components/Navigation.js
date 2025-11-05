import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ClickSpark from './ClickSpark';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/skills', label: 'Skills' },
    { path: '/certificates', label: 'Certificates' },
    { path: '/contact', label: 'Contact' },
    { path: '/resume', label: 'Resume' },
  ];

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main">
      <div className="nav-container">
        <ClickSpark sparkColor="#3b82f6" intensity="low" size="small">
          <Link to="/" className="nav-logo" aria-label="Homepage">
            <span className="logo-text">Portfolio</span>
          </Link>
        </ClickSpark>
        
        <div
          id="primary-menu"
          className={`nav-menu ${isOpen ? 'active' : ''}`}
          role="menubar"
          aria-hidden={!isOpen}
        >
          {navItems.map((item) => (
            <ClickSpark key={item.path} sparkColor="#3b82f6" intensity="low" size="small">
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </ClickSpark>
          ))}
        </div>
        
        <ClickSpark sparkColor="#3b82f6" intensity="low" size="small">
          <button
            className="nav-toggle"
            onClick={toggleMenu}
            aria-controls="primary-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            {isOpen ? <FaTimes aria-hidden /> : <FaBars aria-hidden />}
          </button>
        </ClickSpark>
      </div>
    </nav>
  );
};

export default Navigation;




