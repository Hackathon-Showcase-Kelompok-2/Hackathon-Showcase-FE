import React from "react";

const Project = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-blue-600">Tentang Project</h1>
        <p className="mt-2 text-gray-700">
          GreenNest adalah platform digital yang menghubungkan individu dan komunitas peduli lingkungan untuk berbagi
          informasi, memulai kampanye, dan berkolaborasi dalam proyek ramah lingkungan. Dengan fitur seperti kampanye
          digital, forum kolaborasi, pusat edukasi, dan jejaring komunitas, GreenNest menjadi wadah untuk mendorong aksi
          nyata dalam menjaga kelestarian bumi. Bersama GreenNest, mari wujudkan masa depan yang lebih hijau dan
          berkelanjutan!
        </p>
        <div className="mt-4 flex space-x-2">
          <button className="bg-blue-200 text-black px-9 py-2 rounded-full shadow-md">Python</button>
          <button className="bg-blue-200 text-black px-9 py-2 rounded-full shadow-md">React</button>
          <button className="bg-blue-200 text-black px-7 py-2 rounded-full shadow-md"> IoT </button>
          <button className="bg-blue-200 text-black px-10 py-2 rounded-full shadow-md"> TensorFlow </button>
        </div>
        <div className="mt-8 bg-gray-200 p-4 rounded-lg">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                alt="GreenNest homepage screenshot"
                className="w-full"
                src="../public/img/GreenNest.png"
                height="400"
                width="600"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex space-x-4">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center">
            <i className="fas fa-code mr-2"></i> Source Code
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center">
            <i className="fas fa-play mr-2"></i> Watch Demo
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center">
            <i className="fas fa-book mr-2"></i> Documentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
