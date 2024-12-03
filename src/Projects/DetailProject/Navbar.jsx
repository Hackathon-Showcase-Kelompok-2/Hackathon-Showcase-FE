import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div className="flex items-center">
          <img src="../../public/img/logo.png" alt="Galeri Hackathon Logo" className="h-10 mr-2" />
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-800 hover:text-blue-500 font-semibold">
            Home
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-500 font-semibold">
            Projects
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-500 font-semibold">
            Blog
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-500 font-semibold">
            Events
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-500 font-semibold">
            Contact
          </a>
        </div>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
            Sign in
          </button>
          <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
            Sign up
          </button>
        </div>
      </nav>
      <div className="pt-20">
      </div>
    </>
  );
};

export default Navbar;