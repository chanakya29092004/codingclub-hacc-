import React from 'react';
import './CardsSection.css';

const CardsSection = () => {
  return (
    <section className="cards">
      <div className="card">
        <img src="C:\Users\chanakya\Desktop\HAAC\vite-project\src\assets\images\isometric-design-business-people-meeting.png" alt="Hackathons illustration" />
        <p className="card-title">Hackathons</p>
      </div>
      <div className="card">
        <img src="C:\Users\chanakya\Desktop\HAAC\vite-project\src\assets\images\pair-programming-concept-illustration.png" alt="Coding Camp illustration" />
        <p className="card-title">Coding Camp</p>
      </div>
      <div className="card">
        <img src="C:\Users\chanakya\Desktop\HAAC\vite-project\src\assets\images\modern-coming-soon-poster-with-stay-tuned-message.png" alt="Coming Soon illustration" />
        <p className="card-title">Coming Soon</p>
      </div>
    </section>
  );
};

export default CardsSection;
