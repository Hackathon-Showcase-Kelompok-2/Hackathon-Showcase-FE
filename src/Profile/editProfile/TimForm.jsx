import React, { useState } from 'react';

const TimForm = () => {
  const [anggotaCount, setAnggotaCount] = useState(1);

  const tambahAnggota = () => {
    setAnggotaCount(anggotaCount + 1);
  };

  const renderAnggota = (count) => {
    return (
      <div className="border border-gray-300 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-medium mb-4">Anggota {count}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">Unggah Foto Profil</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center h-32 cursor-pointer">
              <div className="text-center flex items-center">
                <i className="fas fa-cloud-upload-alt text-gray-400 text-3xl mr-2"></i>
                <p className="text-gray-400">Upload Image Profile*</p>
              </div>
            </div>
            <input type="file" id={`fileInput${count}`} className="hidden" />
            <label className="block text-gray-700 text-sm font-bold mt-6 mb-2">Nama Lengkap</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-2 mb-4" placeholder="Nama Lengkap" />
            <label className="block text-gray-700 text-sm font-bold mt-5 mb-2">Profesi</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Bidang Keahlian" />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Deskripsi</label>
            <textarea className="w-full border border-gray-300 rounded-lg p-2 mb-4 h-32" placeholder="Deskripsi"></textarea>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Peran Tim</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg p-2 mb-4" placeholder="Peran dalam tim" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Jenis Kelamin</label>
                <div className="relative">
                  <select className="w-full border border-gray-300 rounded-lg p-2 appearance-none mb-4">
                    <option className="text-black hover:text-blue-600">Jenis Kelamin</option>
                    <option className="text-black hover:text-blue-600">Laki-laki</option>
                    <option className="text-black hover:text-blue-600">Perempuan</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">No HP</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Nomor Heandphone" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Pendidikan</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Masukan Pendidikan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-screen-xl">
        <h1 className="text-center text-2xl font-semibold mb-6">Anggota Tim</h1>
        <h2 className="text-lg font-medium mb-4">Ketua</h2>
        <div className="border border-gray-300 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">Unggah Foto Profil</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center h-32 cursor-pointer">
                <div className="text-center flex items-center">
                  <i className="fas fa-cloud-upload-alt text-gray-400 text-3xl mr-2"></i>
                  <p className="text-gray-400">Upload Image Profile*</p>
                </div>
              </div>
              <input type="file" id="fileInput1" className="hidden" />
              <label className="block text-gray-700 text-sm font-bold mt-9 mb-2">Nama Lengkap</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2 mb-4" placeholder="Nama Lengkap" />
              <label className="block text-gray-700 text-sm font-bold mt-7 mb-2">Profesi</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Bidang Keahlian" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Deskripsi</label>
              <textarea className="w-full border border-gray-300 rounded-lg p-2 mb-4 h-32" placeholder="Deskripsi"></textarea>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Peran Tim</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg p-2 mb-4" placeholder="Peran dalam tim" />
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-700 text-sm font-bold mt-4 mb-1">Jenis Kelamin</label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 rounded-lg p-2 appearance-none mb-2 placeholder-blue-400 focus:ring-gray-400 focus:border-blue-400">
                      <option className="text-gray-400" selected disabled>
                        Jenis Kelamin
                      </option>
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <i className="fas fa-chevron-down text-gray-400"></i>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-700 text-sm font-bold mb-2">No HP</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Nomor Heandphone" />
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Pendidikan</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Masukan Pendidikan" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {renderAnggota(1)}

        <div id="anggotaContainer">{Array.from({ length: anggotaCount - 1 }).map((_, index) => renderAnggota(index + 2))}</div>
        <div className="bg-blue-100 text-blue-700 text-center py-3 rounded-lg cursor-pointer border-2 border-blue-100 hover:border-blue-500 transition duration-200" onClick={tambahAnggota}>
          + Tambah Anggota
        </div>
      </div>
    </div>
  );
};

export default TimForm;
