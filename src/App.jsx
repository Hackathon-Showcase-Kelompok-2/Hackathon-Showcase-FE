import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      {/* Konten lainnya */}
    </div>
  );
}

export default App;
