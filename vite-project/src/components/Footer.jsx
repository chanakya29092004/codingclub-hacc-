import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="subscribe">
          <p className="footer-title">HAAC</p>
          <p className="footer-subtitle">Subscribe</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
        <div className="newsletter">
          <p className="footer-title">Newsletter</p>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2024 HAAC. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
