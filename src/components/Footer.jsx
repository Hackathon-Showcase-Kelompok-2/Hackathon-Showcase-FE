import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-800 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo dan Deskripsi */}
        <div>
          <h1 className="text-2xl font-bold flex items-center space-x-2">
            <span className="text-blue-600">Galeri Hackathon</span>
          </h1>
          <p className="text-sm mt-2">
            #EksplorasiKarya
            <br />
            Platform showcase proyek hackathon terbaik di Indonesia karena pada
            website ini terdapat banyak karya-karya yang dapat diakses dan
            dilihat oleh pengunjung.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok text-xl"></i>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="font-semibold mb-2">Home</h2>
          <ul className="text-sm space-y-1">
            <li>Galeri Hackathon</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Project</h2>
          <ul className="text-sm space-y-1">
            <li>Galeri Hackathon</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Blog</h2>
          <ul className="text-sm space-y-1">
            <li>Galeri Hackathon</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Contact</h2>
          <ul className="text-sm space-y-2">
            <li>Email: galeri@gmail.com</li>
            <li>Phone: +62 4764 7643</li>
            <li>Jakarta</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-500">
        <p>
          Copyright © 2024 Galeri Hackathon |{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
