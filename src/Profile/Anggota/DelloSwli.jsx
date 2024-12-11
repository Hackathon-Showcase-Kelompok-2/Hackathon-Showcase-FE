import React from 'react';

function DelloSwli() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"> 
        <div className="flex flex-col items-center">
          <img
            alt="Profile picture of a man with short hair and a plaid shirt"
            className="rounded-full border-4 border-blue-500 w-28 h-28"
            height="112"
            src="https://storage.googleapis.com/a1aa/image/4tBbU4GvoSYtEZkJp0m0QKVa81eE36xz7XsYhhGrvGyvvl8JA.jpg"
            width="112"
          />
          <h2 className="text-xl font-bold text-blue-600 mt-4">
            Dello Swli
          </h2>
          <span className="bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded-full mt-2">
            Anggota
          </span>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">
            Informasi Pribadi
          </h3>
          <p className="text-gray-600 mt-2">
            Backend Developer yang berfokus pada arsitektur sistem yang scalable dan efisien. Berpengalaman dalam bidang dengan Node.js, Python, dan database relasional.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-600">
              <i className="fas fa-briefcase mr-2"></i>
              Backend Developer
            </li>
            <li className="flex items-center text-gray-600">
              <i className="fas fa-mars mr-2"></i>
              Laki-Laki
            </li>
            <li className="flex items-center text-gray-600">
              <i className="fas fa-graduation-cap mr-2"></i>
              Mahasiswa Ilmu Komputer
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">
            Kontak &amp; Pendidikan
          </h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center text-gray-600">
              <i className="fas fa-phone mr-2"></i>
              +62 814-5678-9120
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">
            Pendidikan
          </h3>
          <p className="text-gray-600 mt-2">
            Universitas Gadjah Mada
          </p>
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
            Tutup
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Lihat Seluruh Tim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DelloSwli;
