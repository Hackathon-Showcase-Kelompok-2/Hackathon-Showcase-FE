import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#0B1120] text-white font-sans w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <img
              alt="Logo"
              className="mr-2"
              height="100"
              src="../../public/img/Logo 2.png"
              width="150"
            />
          </div>
          <p className="text-sm mb-4">#EksplorasiKarya</p>
          <p className="text-sm mb-4 max-w-xs">
            Platform showcase proyek hackathon terbaik 
            di Indonesia karena pada website 
            ini terdapat banyak karya-karya yang 
            dapat diakses dan dilihat oleh pengunjung
          </p>
          <div className="flex space-x-4">
            <a className="text-white" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-tiktok"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
          <div>
            <h2 className="font-bold mb-4">Home</h2>
            <ul className="space-y-2">
              <li>
              <a className="text-sm text-white hover:text-blue-500" href="#">
                  Galeri Hackathon
                </a>
              </li>
              <li>
              <a className="text-sm text-white hover:text-blue-500" href="#">
                  Mengapa kami?
                </a>
              </li>
              <li>
              <a className="text-sm text-white hover:text-blue-500" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Project</h2>
            <ul className="space-y-2">
              <li>
              <a className="text-sm text-white hover:text-blue-500" href="#">
                  Jelajahi Proyek Terbaik
                </a>
              </li>
              <li>
              <a className="text-sm text-white hover:text-blue-500" href="#">
                  Proyek Populer Minggu ini
                </a>
              </li>
              <li>
              <a className="text-sm text-white hover:text-blue-500" href="#">
                  Unggah Proyek Anda
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Blog</h2>
            <ul className="space-y-2">
              <li>
              <a className="text-sm text-white hover:text-blue-500" href="#">
                  Blog Galeri Hackathon
                </a>
              </li>
              <li>
              <a className="text-sm text-white hover:text-blue-500" href="#">
                  Kategori
                </a>
              </li>
              <li>
              <a className="text-sm text-white hover:text-blue-500" href="#">
                  Top Artikel
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Events</h2>
            <ul className="space-y-2">
              <li>
              <a className="text-sm text-white hover:text-blue-500" href="#">
                  Event Yang Akan Datang
                </a>
              </li>
              <li>
              <a className="text-sm text-white hover:text-blue-500" href="#">
                  Semua Event Terbaru
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope"></i>
                <a className="text-white" href="mailto:galeri@gmail.com">
                  galeri@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone"></i>
                <a className="text-white" href="tel:+6247647643">
                  +62 4764 7643
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt"></i>
                <span className="text-sm">Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 flex justify-between text-sm px-4">
        <p>Copyright © 2024 Galeri Hackathon</p>
        <p>
        <a className="text-gray-500" href="#">
            All Rignts Reserved
          </a> {""} | {""}
          <a className="text-blue-500 hover:text-white" href="#">
            Terms and Conditions
          </a>
          {" "}|{" "}
          <a className="text-blue-500 hover:text-white" href="#">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
