import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import WelcomeSection from './components/WelcomeSection.jsx';
import CardsSection from './components/CardsSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <CardsSection />
      <Footer />
    </div>
  );
}

export default App;
