import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Blog />
      {/* Konten lainnya */}
    </div>
  );
}

export default App;
