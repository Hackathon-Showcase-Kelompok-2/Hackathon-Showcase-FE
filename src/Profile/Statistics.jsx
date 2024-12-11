import React from "react";

function Statistics() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">
        Statistik Kami
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="text-blue-600 text-4xl font-bold mb-2">12</div>
          <p className="text-gray-600">Proyek Diunggah</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="text-red-500 text-4xl font-bold mb-2">8</div>
          <p className="text-gray-600">Kolaborator</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="text-yellow-500 text-4xl font-bold mb-2">3</div>
          <p className="text-gray-600">Penghargaan</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;