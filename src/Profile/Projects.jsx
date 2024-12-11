import React from 'react';

const Projects = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto p-4">
        <h1 className="text-center text-blue-600 text-2xl font-bold mb-8">Project Kami</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Project Card */}
          <div className="border rounded-lg p-4">
            <img
              alt="Smart City Dashboard"
              className="w-full h-48 object-cover mb-4"
              src=""
            />
            <h2 className="text-xl font-semibold mb-2">Smart City Dashboard</h2>
            <p className="text-gray-600 mb-4">
              Aplikasi yang mempermudah pengguna untuk memesan konsultasi dokter, membeli obat, dan mendapatkan layanan kesehatan darurat dalam satu aplikasi.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">Lihat Detail</button>
          </div>
          {/* Second Project Card */}
          <div className="border rounded-lg p-4">
            <img
              alt="Smart City Dashboard"
              className="w-full h-48 object-cover mb-4"
              src=""
            />
            <h2 className="text-xl font-semibold mb-2">Smart City Dashboard</h2>
            <p className="text-gray-600 mb-4">
              Aplikasi yang mempermudah pengguna untuk memesan konsultasi dokter, membeli obat, dan mendapatkan layanan kesehatan darurat dalam satu aplikasi.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">Lihat Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
