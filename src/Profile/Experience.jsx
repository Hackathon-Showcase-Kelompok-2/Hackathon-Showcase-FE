import React from "react";

function Experience() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">
        Pengalaman
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <p className="text-blue-600 font-semibold">2022 - 2023</p>
        <h2 className="text-xl font-bold">AgriTech Innovation Lab</h2>
        <p className="text-gray-600 mb-2">Lead Research Team</p>
        <p className="text-gray-600">
          Pengembangan solusi IoT untuk pertanian presisi
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <p className="text-blue-600 font-semibold">2020 - 2022</p>
        <h2 className="text-xl font-bold">Sustainable Solutions Inc</h2>
        <p className="text-gray-600 mb-2">Technology Consultant</p>
        <p className="text-gray-600">
          Implementasi sistem monitoring lingkungan
        </p>
      </div>
    </div>
  );
}

export default Experience;
