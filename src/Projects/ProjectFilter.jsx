import React from "react";

const ProjectFilter = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        {/* Search Bar */}
        <div className="mb-4 flex items-center border border-gray-300 rounded-lg p-2 bg-white">
          <i className="fas fa-search text-gray-500 mr-2"></i>
          <input
            className="w-full p-2 outline-none bg-white"
            placeholder="Cari proyek berdasarkan nama atau kategori..."
            type="text"
          />
        </div>
        <div className="flex text-black">
          {/* Filter Section */}
          <div className="w-1/4 p-4 bg-white rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Filter</h2>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="kategori">
                Kategori
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg bg-white text-black"
                id="kategori"
              >
                <option>Pilih kategori</option>
                <option>AI</option>
                <option>IoT</option>
                <option>Mobile Apps</option>
                <option>Web Development</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="tahun">
                Tahun
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                id="tahun"
              >
                <option>Pilih tahun</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="status">
                Status
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                id="status"
              >
                <option>Pilih status</option>
                <option>Proyek Aktif</option>
                <option>Proyek Selesai</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="tingkat">
                Tingkat Kesulitan
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                id="tingkat"
              >
                <option>Pilih Tingkat</option>
                <option>Pemula</option>
                <option>Menengah</option>
                <option>Lanjut</option>
              </select>
            </div>
            <button className="w-full p-2 bg-blue-600 text-white rounded-lg">
              Terapkan Filter
            </button>
          </div>
          {/* Project Cards Section */}
          <div className="w-3/4 p-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Project Card */}
              {[1, 2].map((_, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    alt="Project"
                    className="rounded-lg mb-4"
                    height="500"
                    src="../../public/img/EduTrack.png"
                    width="500"
                  />
                  <h3 className="text-xl font-semibold mb-2">EduTrack</h3>
                  <p className="text-gray-600 mb-4">
                    Aplikasi berbasis Android yang membantu siswa mengatur
                    jadwal belajar, mencatat progres tugas, dan mengakses sumber
                    belajar online.
                  </p>
                  <div className="flex items-center">
                    <img
                      alt="Profile"
                      className="w-10 h-10 rounded-full mr-2"
                      height="100"
                      src="https://storage.googleapis.com/a1aa/image/laeUVFeMWTjQTUUqfaOzAPopWCPO6YhZkOUuXyLBg7gw20nnA.jpg"
                      width="100"
                    />
                    <div>
                      <p className="text-gray-800 font-semibold">
                        Jessica Laily
                      </p>
                      <div className="flex text-gray-500 text-sm">
                        <span className="mr-2">
                          <i className="fas fa-heart"></i> 100
                        </span>
                        <span className="mr-2">
                          <i className="fas fa-eye"></i> 1K
                        </span>
                        <span>
                          <i className="fas fa-comment"></i> 10K
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-4">
              <button className="p-2 bg-blue-100 rounded-full mr-2">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="p-2 bg-blue-100 rounded-full">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;