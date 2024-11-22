import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Temukan dan Rayakan Inovasi Terbaik dari Hackathon di Seluruh Dunia!
          </h1>
          <p className="text-gray-700 mb-6">
            Jelajahi proyek, acara, dan penghargaan terbaru dari komunitas hackathon global.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600">
              Explore Projects
            </button>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow hover:bg-yellow-600">
              Join Now
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="illustration.png" alt="Hackathon Illustration" className="w-full h-auto" />
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <h2 className="text-2xl font-bold">250+</h2>
            <p>Hackathon</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">500+</h2>
            <p>Projects</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">100+</h2>
            <p>Articles</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">1000+</h2>
            <p>Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
