import React from "react";

const EventGallery = () => {
  return (
    <div className="py-10 mx-auto p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Event Galeri Hackathon</h2>
          <p className="text-gray-600 mb-6">
            Galeri Hackathon menghadirkan berbagai acara hackathon yang dirancang untuk memacu inovasi dan kolaborasi. Ikuti kompetisi seru yang menantang kreativitas dan keahlian Anda dalam menciptakan solusi digital. Dari pengembangan aplikasi hingga platform berbasis web, setiap event memberikan kesempatan untuk belajar, berjejaring, dan meraih pengakuan atas karya terbaik Anda. Jangan lewatkan peluang untuk menjadi bagian dari komunitas inovator yang siap menciptakan dampak nyata!
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Lihat Event
          </button>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <img
              src="../../public/img/jadwal.png"
              alt="Hackathon Team"
              className="rounded-lg shadow-md"
            />
            <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg text-blue-600 font-medium">
              Atur Jadwal
            </div>
          </div>
          <div className="relative">
            <img
              src="../../public/img/capaian.png"
              alt="Hackathon Target"
              className="rounded-lg shadow-md"
            />
            <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg text-yellow-600 font-medium">
              Capai Target Hackathon
            </div>
          </div>
          <div className="col-span-2">
            <img
              src="../../public/img/image (1).png"
              alt="Hackathon Event"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
