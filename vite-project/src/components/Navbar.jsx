import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="C:\Users\chanakya\Desktop\HAAC\vite-project\src\assets\images\Screenshot 2024-10-05 131842.png" alt=" Logo" />
        <span>HAAC</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Hackathons</a></li>
        <li><a href="#">Coding</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
