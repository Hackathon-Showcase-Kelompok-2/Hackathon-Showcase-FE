import React from 'react';

function MikeChen() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <div className="flex flex-col items-center">
          <img
            alt="Profile picture of Mike Chen"
            className="rounded-full border-4 border-blue-500 w-28 h-28"
            height="112"
            src="https://storage.googleapis.com/a1aa/image/rSZavbAxUjLTHBj0djchWCqeMiYoAlUbMfresmTFVTzQCWynA.jpg"
            width="112"
          />
          <h2 className="text-xl font-bold text-blue-600 mt-4">Mike Chen</h2>
          <span className="bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded-full mt-1">
            Anggota
          </span>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Informasi Pribadi</h3>
          <p className="text-gray-600 mt-2">
            Frontend Developer dengan keahlian dalam membangun antarmuka yang responsif dan user-friendly menggunakan teknologi modern seperti React dan Vue.js.
          </p>
          <div className="mt-4">
            <div className="flex items-center text-gray-600 mt-2">
              <i className="fas fa-briefcase mr-2"></i>
              <span>Frontend Developer</span>
            </div>
            <div className="flex items-center text-gray-600 mt-2">
              <i className="fas fa-mars mr-2"></i>
              <span>Laki-Laki</span>
            </div>
            <div className="flex items-center text-gray-600 mt-2">
              <i className="fas fa-graduation-cap mr-2"></i>
              <span>Mahasiswa Teknik Informatika</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-6">Kontak &amp; Pendidikan</h3>
          <div className="flex items-center text-gray-600 mt-2">
            <i className="fas fa-phone mr-2"></i>
            <span>+62 813-4567-8910</span>
          </div>
          <h3 className="text-lg font-semibold mt-6">Pendidikan</h3>
          <div className="text-gray-600 mt-2">
            <span>Universitas Indonesia</span>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg">
            Tutup
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Lihat Seluruh Tim
          </button>
        </div>
      </div>
    </div>
  );
}

export default MikeChen;
