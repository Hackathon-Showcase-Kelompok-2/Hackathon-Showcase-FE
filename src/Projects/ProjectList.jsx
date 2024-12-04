import React from "react";
import { Link } from "react-router-dom";

const ProjectList = () => {
  return (
    <div className="bg-gray-100 font-roboto text-black">
      <div className="max-w-8xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Proyek Populer Minggu Ini</h1>
          <a className="text-gray-500" href="#">
            {" "}
            Semua{" "}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link to="/project/detailproject">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                alt="EduTrack project screenshot"
                className="rounded-lg mb-4 w-full"
                src="../../public/img/FoodDay.png"
              />
              <h2 className="text-xl font-semibold mb-2">EduTrack</h2>
              <p className="text-gray-600 mb-4">
                Aplikasi berbasis android yang membantu siswa mengatur jadwal
                belajar, mencatat progres tugas dan mengakses sumber belajar
                online.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    alt="Jessica Colly's profile picture"
                    className="w-10 h-10 rounded-full mr-2"
                    src="https://storage.googleapis.com/a1aa/image/h0SoP2xfJdTsWKyafeTLroBAevq0udLzfG6GCDjiDdLuaPf8E.jpg"
                  />
                  <p className="font-medium">Jessica Laily</p>
                </div>
                <div className="flex text-gray-500">
                  <span className="mr-4">
                    <i className="fas fa-heart"> </i> 5k
                  </span>
                  <span className="mr-4">
                    <i className="fas fa-comment"> </i> 100
                  </span>
                  <span>
                    <i className="fas fa-eye"> </i> 10k
                  </span>
                </div>
              </div>
            </div>
          </Link>
          {/* Card 2 */}

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              alt="GreenNest project screenshot"
              className="rounded-lg mb-4 w-full"
              src="../../public/img/GreenNest.png"
            />
            <h2 className="text-xl font-semibold mb-2">GreenNest</h2>
            <p className="text-gray-600 mb-4">
              Website yang menghubungkan komunitas peduli lingkungan untuk
              berbagi informasi, memulai kampanye dan berkolaborasi dalam proyek
              ramah lingkungan.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  alt="Kevin Alvaro's profile picture"
                  className="w-10 h-10 rounded-full mr-2"
                  src="https://storage.googleapis.com/a1aa/image/e6cpVw3WN91EbipBUOaayu3a5aYEnSbb9eVrmA1a0nNP75zTA.jpg"
                />
                <p className="font-medium">Kevin Alvaro</p>
              </div>
              <div className="flex text-gray-500">
                <span className="mr-4">
                  <i className="fas fa-heart"> </i> 5k
                </span>
                <span className="mr-4">
                  <i className="fas fa-comment"> </i> 80
                </span>
                <span>
                  <i className="fas fa-eye"> </i> 16k
                </span>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              alt="FoodDay project screenshot"
              className="rounded-lg mb-4"
              height="400"
              src="../../public/img/FoodDay.png"
              width="600"
            />
            <h2 className="text-lg font-semibold mb-2">FoodDay</h2>
            <p className="text-gray-600 mb-4">
              Website yang memungkinkan pengguna menemukan tempat kuliner lokal
              terbaik berdasarkan ulasan, lokasi, dan preferensi makanan.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  alt="Arya Wiranov's profile picture"
                  className="w-10 h-10 rounded-full mr-2"
                  src="https://storage.googleapis.com/a1aa/image/0rkWM9Q2UzaaDtGowmAalUrblimmZVUhdHN0SvalKXR0e85JA.jpg"
                />
                <p className="font-medium">Arya Ristaw</p>
              </div>
              <div className="flex text-gray-500">
                <span className="mr-4">
                  <i className="fas fa-heart"></i> 10k
                </span>
                <span className="mr-4">
                  <i className="fas fa-comment"></i> 60
                </span>
                <span>
                  <i className="fas fa-eye"></i> 18k
                </span>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              alt="GreenNest project screenshot"
              className="rounded-lg mb-4 w-full"
              src="./img/GreenNest.png"
            />
            <h2 className="text-xl font-semibold mb-2">GreenNest</h2>
            <p className="text-gray-600 mb-4">
              Website yang menghubungkan komunitas peduli lingkungan untuk
              berbagi informasi, memulai kampanye dan berkolaborasi dalam proyek
              ramah lingkungan.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  alt="Kevin Alvaro's profile picture"
                  className="w-10 h-10 rounded-full mr-2"
                  src="https://storage.googleapis.com/a1aa/image/e6cpVw3WN91EbipBUOaayu3a5aYEnSbb9eVrmA1a0nNP75zTA.jpg"
                />
                <p className="font-medium">Kevin Alvaro</p>
              </div>
              <div className="flex text-gray-500">
                <span className="mr-4">
                  <i className="fas fa-heart"> </i> 5k
                </span>
                <span className="mr-4">
                  <i className="fas fa-comment"> </i> 80
                </span>
                <span>
                  <i className="fas fa-eye"> </i> 16k
                </span>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              alt="FoodDay project screenshot"
              className="rounded-lg mb-4"
              height="400"
              src="./img/FoodDay.png"
              width="600"
            />
            <h2 className="text-lg font-semibold mb-2">FoodDay</h2>
            <p className="text-gray-600 mb-4">
              Website yang memungkinkan pengguna menemukan tempat kuliner lokal
              terbaik berdasarkan ulasan, lokasi, dan preferensi makanan.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  alt="Arya Wiranov's profile picture"
                  className="w-10 h-10 rounded-full mr-2"
                  src="https://storage.googleapis.com/a1aa/image/0rkWM9Q2UzaaDtGowmAalUrblimmZVUhdHN0SvalKXR0e85JA.jpg"
                />
                <p className="font-medium">Arya Ristaw</p>
              </div>
              <div className="flex text-gray-500">
                <span className="mr-4">
                  <i className="fas fa-heart"></i> 10k
                </span>
                <span className="mr-4">
                  <i className="fas fa-comment"></i> 60
                </span>
                <span>
                  <i className="fas fa-eye"></i> 18k
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
