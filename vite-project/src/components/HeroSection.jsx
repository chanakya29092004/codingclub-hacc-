import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hackathon<br />N Coding</h1>
        <p>
          Tech doesn’t have to follow a different language. We believe it should be understood by all.<br />
          With passion to code, we bring great people.
        </p>
        <a href="#" className="hero-button">Explore Now</a>

        <div className="social-media">
          <span>Get Social</span>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="C:\Users\chanakya\Desktop\HAAC\vite-project\src\assets\images\Screenshot 2024-10-07 180435.png" alt="Abstract coding illustration" />
      </div>
    </section>
  );
};

export default HeroSection;
