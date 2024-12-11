import React from 'react';

function SarahJohnson() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <div className="flex flex-col items-center">
          <img
            alt="Profile picture of Sarah Johnson"
            className="rounded-full border-4 border-yellow-400 mb-4"
            height="120"
            src="https://storage.googleapis.com/a1aa/image/PxCMbfAFo4Qodaqmy6qDfDRPAls8ERTBdro1Dscgj8eN5VynA.jpg"
            width="120"
          />
          <h2 className="text-xl font-bold text-blue-600">Sarah Johnson</h2>
          <span className="bg-yellow-100 text-yellow-700 text-sm px-2 py-1 rounded-full mt-1">
            Ketua Tim
          </span>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Informasi Pribadi</h3>
          <p className="text-gray-700 mt-2">
            UI/UX Designer yang berfokus pada pengalaman pengguna yang intuitif dan estetika desain. Berpengalaman dalam membangun prototipe interaktif untuk aplikasi digital.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-700">
              <i className="fas fa-briefcase mr-2"></i>
              UI/UX Designer
            </li>
            <li className="flex items-center text-gray-700">
              <i className="fas fa-venus mr-2"></i>
              Perempuan
            </li>
            <li className="flex items-center text-gray-700">
              <i className="fas fa-graduation-cap mr-2"></i>
              Mahasiswa Desain Komunikasi Visual
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Kontak &amp; Pendidikan</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center text-gray-700">
              <i className="fas fa-phone mr-2"></i>
              +62 812-3456-7890
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Pendidikan</h3>
          <p className="text-gray-700 mt-2">Institut Teknologi Bandung</p>
        </div>
        <div className="mt-6 flex justify-between">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Tutup</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Lihat Seluruh Tim</button>
        </div>
      </div>
    </div>
  );
}

export default SarahJohnson;
