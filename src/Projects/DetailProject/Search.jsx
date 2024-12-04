import React from 'react';

const Search = () => {
  return (
    <div className="bg-gray-100 font-roboto text-black">
      <div className="max-w-8xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Proyek Serupa</h1>
          <a className="text-gray-500" href="#">
            {' '}
            Semua{' '}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img alt="EduTrack project screenshot" className="rounded-lg mb-4 w-full" src="./img/Project.png" />
            <h2 className="text-xl font-semibold mb-2">EduTrack</h2>
            <p className="text-gray-600 mb-4">Aplikasi berbasis android yang membantu siswa mengatur jadwal belajar, mencatat progres tugas dan mengakses sumber belajar online.</p>
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
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img alt="CarePoint project screenshot" className="rounded-lg mb-4 w-full" src="./img/carepoint.png" />
            <h2 className="text-xl font-semibold mb-2">CarePoint</h2>
            <p className="text-gray-600 mb-4">Aplikasi yang memudahkan pengguna untuk memesan konsultasi dokter, membeli obat dan mendapatkan layanan kesehatan darurat dalam satu aplikasi.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  alt="Tania Putri's profile picture"
                  className="w-10 h-10 rounded-full mr-2"
                  src="https://storage.googleapis.com/a1aa/image/ZCFy3Ume5RX7CSN9Su3ebaIO9DdCrvpUKodXi9UmwNOT75zTA.jpg"
                />
                <p className="font-medium">Tania Putri</p>
              </div>
              <div className="flex text-gray-500">
                <span className="mr-4">
                  <i className="fas fa-heart"> </i> 8k
                </span>
                <span className="mr-4">
                  <i className="fas fa-comment"> </i> 120
                </span>
                <span>
                  <i className="fas fa-eye"> </i> 15k
                </span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img alt="GreenNest project screenshot" className="rounded-lg mb-4 w-full" src="./img/GreenNest.png" />
            <h2 className="text-xl font-semibold mb-2">GreenNest</h2>
            <p className="text-gray-600 mb-4">Website yang menghubungkan komunitas peduli lingkungan untuk berbagi informasi, memulai kampanye dan berkolaborasi dalam proyek ramah lingkungan.</p>
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
            <img alt="FoodDay project screenshot" className="rounded-lg mb-4" height="400" src="./img/FoodDay.png" width="600" />
            <h2 className="text-lg font-semibold mb-2">FoodDay</h2>
            <p className="text-gray-600 mb-4">Website yang memungkinkan pengguna menemukan tempat kuliner lokal terbaik berdasarkan ulasan, lokasi, dan preferensi makanan.</p>
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

export default Search;
