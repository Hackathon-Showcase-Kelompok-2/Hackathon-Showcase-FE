import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import EventGallery from './components/EventGallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Blog />
      <EventGallery />
      <Testimonials />
      <Footer />
      {/* Konten lainnya */}
    </div>
  );
}

export default App;
