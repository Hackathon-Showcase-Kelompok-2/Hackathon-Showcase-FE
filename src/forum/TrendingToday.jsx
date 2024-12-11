import React from 'react';

const TrendingToday = () => {
  return (
    <div className="container mx-auto p-4 bg-white min-w-screen">
      <h1 className="text-2xl font-bold mb-4">
        Trending Hari Ini
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="relative">
          <img
            alt="People working in a coding sprint"
            className="w-full h-48 object-cover rounded-lg"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/CfEGUK5qBUVnY6bX3kR2iAXfuxRozeIugHtotD2Kfg6ijKjPB.jpg"
            width="600"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white p-2">
            Apa Saja Kendala saat Sprint Coding?
          </div>
        </div>
        <div className="relative">
          <img
            alt="Person presenting at a hackathon"
            className="w-full h-48 object-cover rounded-lg"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/Tyt5U0mX22rTMR32LpmzPbZsRohQGwu6A5n9DeQ90kscUZ8JA.jpg"
            width="600"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white p-2">
            Pengalaman Pertama ikut Hackathon, Share Yuk!
          </div>
        </div>
        <div className="relative">
          <img
            alt="Hands drawing prototype sketches"
            className="w-full h-48 object-cover rounded-lg"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/uok6PnxT8HKxINfv0mfkfeTZv7cND32OPUQv0N4d4sXsjKjPB.jpg"
            width="600"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white p-2">
            Rekomendasi Tools untuk Prototype Cepat
          </div>
        </div>
        <div className="relative">
          <img
            alt="Team strategizing at a hackathon"
            className="w-full h-48 object-cover rounded-lg"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/AYqBtXdHwhrtL9CYAVpNjvz3UWpyn12NWEvn7KXPSCxNqMeJA.jpg"
            width="600"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white p-2">
            Strategi Tim untuk Menangkan Hackathon
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="relative w-full sm:w-1/3">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600"
            placeholder="Cari"
            type="text"
          />
          <i className="fas fa-search absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"></i>
        </div>
        <div className="flex space-x-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600">
              <option>Popular</option>
              <option>Newest</option>
              <option>Top Comments</option>
            </select>
            <i className="fas fa-star absolute top-1/2 transform -translate-y-1/2 left-3 text-blue-500"></i>
          </div>
          <div className="relative w-full sm:w-auto">
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600">
              <option>Thread Terbaru</option>
              <option>Oldest</option>
            </select>
            <i className="fas fa-chevron-down absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400"></i>
          </div>
          <div className="relative w-full sm:w-auto">
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600">
              <option>Top Comments</option>
              <option>Most Liked</option>
            </select>
            <i className="fas fa-comments absolute top-1/2 transform -translate-y-1/2 left-3 text-blue-500 "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingToday;