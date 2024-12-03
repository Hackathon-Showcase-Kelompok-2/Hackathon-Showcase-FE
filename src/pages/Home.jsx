import React from 'react';
import HeroSection from '../home/HeroSection';
import About from '../home/About';
import HomeProjects from '../home/HomeProjects';
import Blog from '../home/Blog';
import EventGallery from '../home/EventGallery';
import Testimonials from '../home/Testimonials';

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <HomeProjects />
      <Blog />
      <EventGallery />
      <Testimonials />
      {/* Konten lainnya */}
    </div>
  );
}

export default Home;
