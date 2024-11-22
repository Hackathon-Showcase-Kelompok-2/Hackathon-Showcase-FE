import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="" alt="Galeri Hackathon Logo" className="h-10 mr-2" />
        <span className="text-xl font-bold">Galeri Hackathon</span>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-800 hover:text-blue-500 font-semibold">Home</a>
        <a href="#" className="text-gray-800 hover:text-blue-500 font-semibold">Projects</a>
        <a href="#" className="text-gray-800 hover:text-blue-500 font-semibold">Blog</a>
        <a href="#" className="text-gray-800 hover:text-blue-500 font-semibold">Events</a>
        <a href="#" className="text-gray-800 hover:text-blue-500 font-semibold">Contact</a>
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Log in</button>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
