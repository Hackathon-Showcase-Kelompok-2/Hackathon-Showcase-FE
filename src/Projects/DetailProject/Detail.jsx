import React from 'react';

const Detail = () => {
  return (
    <div className="bg-white text-white">
      <div className="w-full p-4">
        <div className="relative bg-gray-800 rounded-lg overflow-hidden h-[30rem]">
          <img
            alt="Background image of environmental projects"
            className="w-full h-full object-cover opacity-50"
            src="../public/img/GreenNest.png"
          />
          <div className="absolute inset-0 flex flex-col justify-center text-left p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              GreenNest “Website Peduli Lingkungan”
            </h1>
            <p className="text-xl md:text-2xl mb-12">
              Website yang menghubungkan komunitas peduli lingkungan untuk berbagi informasi, memulai kampanye, dan
              berkolaborasi dalam proyek ramah lingkungan.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 mb-6">
              <div className="flex space-x-4">
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                  <i className="fas fa-thumbs-up mr-2"></i>
                  5k
                </button>
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                  <i className="fas fa-heart mr-2"></i>
                  5k
                </button>
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                  <i className="fas fa-comment mr-2"></i>
                  100
                </button>
                <button className="flex items-center bg-white text-gray-800 px-4 py-2 rounded-lg">
                  <i className="fas fa-share mr-2"></i>
                  Share
                </button>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold mt-4 md:mt-0">
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
