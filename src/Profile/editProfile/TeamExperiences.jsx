import React, { useState } from 'react';

const TeamExperiences = () => {
  const [experiences, setExperiences] = useState([{
    tahun: '',
    namaKegiatan: '',
    jenisKegiatan: '',
    deskripsiKegiatan: '',
  }]);

  const [buttonClicked, setButtonClicked] = useState(false);

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        tahun: '',
        namaKegiatan: '',
        jenisKegiatan: '',
        deskripsiKegiatan: '',
      },
    ]);
    setButtonClicked(true);
    setTimeout(() => setButtonClicked(false), 200); 
  };

  const handleInputChange = (index, event) => {
    const newExperiences = [...experiences];
    newExperiences[index][event.target.name] = event.target.value;
    setExperiences(newExperiences);
  };

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="w-full max-w-6xl space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-center text-lg font-semibold mb-4">Pengalaman Tim</h2>
          {experiences.map((experience, index) => (
            <form key={index} className="border border-gray-300 p-4 rounded mb-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`tahun-${index}`}>
                  Tahun (2020-2024)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={`tahun-${index}`}
                  type="text"
                  name="tahun"
                  value={experience.tahun}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="2020-2024"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`nama-kegiatan-${index}`}>
                  Nama Kegiatan
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={`nama-kegiatan-${index}`}
                  type="text"
                  name="namaKegiatan"
                  value={experience.namaKegiatan}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Nama Kegiatan"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`jenis-kegiatan-${index}`}>
                  Jenis Kegiatan
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={`jenis-kegiatan-${index}`}
                  type="text"
                  name="jenisKegiatan"
                  value={experience.jenisKegiatan}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Jenis Kegiatan"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`deskripsi-kegiatan-${index}`}>
                  Deskripsi Kegiatan
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                  id={`deskripsi-kegiatan-${index}`}
                  name="deskripsiKegiatan"
                  value={experience.deskripsiKegiatan}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Deskripsikan Tim Kamu"
                />
              </div>
            </form>
          ))}
          <div className="flex justify-center mt-4">
            <button
              onClick={addExperience}
              type="button"
              className={`${
                buttonClicked ? 'bg-blue-500' : 'bg-blue-100'
              } text-blue-500 font-semibold py-2 px-4 rounded-lg w-full`}
            >
              <i className="fas fa-plus mr-2"></i> Tambah Anggota
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamExperiences;