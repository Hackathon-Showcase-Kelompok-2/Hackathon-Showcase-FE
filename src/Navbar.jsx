import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div className="flex items-center">
          <img src="../../public/img/logo.png" alt="Galeri Hackathon Logo" className="h-10 mr-2" />
        </div>
        <div className="flex space-x-6">
        <Link
          to="/"
          className="text-gray-800 hover:text-blue-500 font-semibold"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="text-gray-800 hover:text-blue-500 font-semibold"
        >
          Projects
        </Link>
        <Link
          to="/blog"
          className="text-gray-800 hover:text-blue-500 font-semibold"
        >
          Blog
        </Link>
        <Link
          to="/events"
          className="text-gray-800 hover:text-blue-500 font-semibold"
        >
          Events
        </Link>
        <Link
          to="/award"
          className="text-gray-800 hover:text-blue-500 font-semibold"
        >
          Awards
        </Link>
        <Link
          to="/contact"
          className="text-gray-800 hover:text-blue-500 font-semibold"
        >
          Contact
        </Link>
        </div>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
          <Link
          to="/signin"
          className="text-gray-800 hover:text-blue-500 font-semibold"
        >
          SignIn
        </Link>
          </button>
          <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
          <Link
          to="/signup"
          className="text-gray-800 hover:text-blue-500 font-semibold"
        >
          SignIn
        </Link>
          </button>
        </div>
      </nav>
      <div className="pt-20 bg-white">
      </div>
    </>
  );
};

export default Navbar;
