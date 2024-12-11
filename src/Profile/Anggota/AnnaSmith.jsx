import React from 'react';

function TeamMemberCard() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full"> 
        <div className="flex flex-col items-center">
          <img
            alt="Profile picture of Anna Smith"
            className="rounded-full border-4 border-blue-500 w-24 h-24 object-cover"
            height="96"
            src="https://storage.googleapis.com/a1aa/image/JY1JDf44BRSnK6n64dfzDac93cfeH9kBq67E66zZseeCh4SeJA.jpg"
            width="96"
          />
          <h2 className="text-xl font-bold text-blue-600 mt-4">
            Anna Smith
          </h2>
          <span className="bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded-full mt-1">
            Anggota
          </span>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Informasi Pribadi
          </h3>
          <p className="text-gray-600 mt-2">
            Digital Marketer yang ahli dalam strategi konten dan optimasi media sosial untuk terus meningkatkan visibilitas dan engagement hingga bisa mencapai target ke audiance.
          </p>
          <div className="mt-4">
            <div className="flex items-center text-gray-600 mt-2">
              <i className="fas fa-briefcase mr-2"></i>
              <span>Digital Marketing</span>
            </div>
            <div className="flex items-center text-gray-600 mt-2">
              <i className="fas fa-venus mr-2"></i>
              <span>Perempuan</span>
            </div>
            <div className="flex items-center text-gray-600 mt-2">
              <i className="fas fa-user-graduate mr-2"></i>
              <span>Mahasiswa Pemasaran Digital</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mt-6">
            Kontak &amp; Pendidikan
          </h3>
          <div className="flex items-center text-gray-600 mt-2">
            <i className="fas fa-phone mr-2"></i>
            <span>+62 815-6789-1230</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mt-6">
            Pendidikan
          </h3>
          <p className="text-gray-600 mt-2">
            Universitas Pelita Harapan
          </p>
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

export default TeamMemberCard;
