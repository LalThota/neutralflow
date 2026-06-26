import React, { useState, useEffect } from 'react';
import { LogoIcon, MenuIcon, CloseIcon } from './Icons';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''} animate-fade-in`} style={{ '--dur': '200ms', '--delay': '0ms' }}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#" className="navbar-logo" onClick={closeMobileMenu} aria-label="NeuralFlow home">
          <LogoIcon size={32} />
          <span className="navbar-brand">NeuralFlow</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          <a href="#features" className="navbar-link">Features</a>
          <a href="#pricing" className="navbar-link">Pricing</a>
          <a href="#testimonials" className="navbar-link">Customers</a>
          <a href="#faq" className="navbar-link">Docs</a>
        </nav>

        {/* Desktop CTA actions */}
        <div className="navbar-ctas">
          <button className="btn btn-ghost" aria-label="Sign in to your account">Sign in</button>
          <button className="btn btn-primary" aria-label="Get started building pipelines">Get started</button>
        </div>

        {/* Mobile menu trigger button */}
        <button 
          className="navbar-toggle" 
          onClick={toggleMobileMenu} 
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
        >
          {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Slide-down Navigation Panel */}
      <div className={`mobile-nav-panel ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <nav className="mobile-nav-links" aria-label="Mobile Navigation">
          <a href="#features" className="mobile-link" onClick={closeMobileMenu}>Features</a>
          <a href="#pricing" className="mobile-link" onClick={closeMobileMenu}>Pricing</a>
          <a href="#testimonials" className="mobile-link" onClick={closeMobileMenu}>Customers</a>
          <a href="#faq" className="mobile-link" onClick={closeMobileMenu}>Docs</a>
          
          <div className="mobile-nav-ctas">
            <button className="btn btn-ghost w-full" onClick={closeMobileMenu} aria-label="Sign in to your account">Sign in</button>
            <button className="btn btn-primary w-full" onClick={closeMobileMenu} aria-label="Get started building pipelines">Get started</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
