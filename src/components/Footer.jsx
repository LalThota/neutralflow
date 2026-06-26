import React from 'react';
import { LogoIcon, TwitterIcon, GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Brand Column */}
        <div className="footer-brand-col">
          <a href="#" className="footer-logo" aria-label="NeuralFlow home">
            <LogoIcon size={32} />
            <span className="footer-brand-name">NeuralFlow</span>
          </a>
          <p className="footer-tagline">
            Autonomous AI Pipelines. Zero Friction.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="NeuralFlow on Twitter/X">
              <TwitterIcon size={20} />
            </a>
            <a href="#" className="social-link" aria-label="NeuralFlow on GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="#" className="social-link" aria-label="NeuralFlow on LinkedIn">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        {/* 4-Column Link Grid */}
        <div className="footer-links-grid">
          
          {/* Column 1 */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Product</h4>
            <a href="#features" className="footer-link">Features</a>
            <a href="#pricing" className="footer-link">Pricing</a>
            <a href="#" className="footer-link">Integrations</a>
            <a href="#" className="footer-link">Changelog</a>
          </div>

          {/* Column 2 */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Company</h4>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Careers</a>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">Customers</a>
          </div>

          {/* Column 3 */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Resources</h4>
            <a href="#" className="footer-link">Documentation</a>
            <a href="#" className="footer-link">API Reference</a>
            <a href="#" className="footer-link">Status Page</a>
            <a href="#" className="footer-link">Support Center</a>
          </div>

          {/* Column 4 */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Legal</h4>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Security Center</a>
            <a href="#" className="footer-link">SLA Agreement</a>
          </div>

        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="copyright-text">
          © 2026 NeuralFlow Inc. All rights reserved.
        </span>
        
        {/* Compliance Badges */}
        <div className="compliance-badges">
          <span className="badge badge-soc2" aria-label="SOC 2 Type II Certified">
            SOC 2 Type II
          </span>
          <span className="badge badge-gdpr" aria-label="GDPR Compliant">
            GDPR Compliant
          </span>
        </div>
      </div>
    </footer>
  );
}
