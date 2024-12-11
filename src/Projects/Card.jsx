import React from 'react';

const Card = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 py-4 px-4">
      <div className="bg-yellow-500 rounded-2xl p-10 flex flex-col items-center relative overflow-hidden w-full">
        <img 
          alt="Illustration of people working on a project" 
          className="w-1/" 
          height="150" 
          src="../../public/img/daftar_project.png" 
          width="150" 
        />
        <div className="flex flex-col">
          <h2 className="text-blue-600 text-2xl font-bold">
            Punya Proyek Hackathon yang Ingin Ditampilkan?
          </h2>
          <p className="text-gray-700 mt-2">
            Bergabunglah dengan Galeri Hackathon dan biarkan dunia melihat karya Anda!
          </p>
          <div className="flex justify-end mt-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded">
              Unggah Proyek Anda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
