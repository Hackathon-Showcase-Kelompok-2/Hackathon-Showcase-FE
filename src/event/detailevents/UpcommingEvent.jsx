import React from "react";

function UpcommingEvent() {
  return (
    <div className="flex flex-col items-center w-screen pb-10 bg-white">
      {/* Title and "Semua" button */}
      <div className="flex justify-between w-full max-w-[1362.77px] mb-6">
        <h1 className="text-2xl font-bold text-black">Event Lain Yang Mungkin Anda Sukai</h1>
        <button className="text-blue-600 bg-white">Semua</button>
      </div>

      {/* Event Card */}
      <div className="border border-gray-300 rounded-lg w-full max-w-[1362.77px]  p-6">
        {/* Image */}
        <div className="relative w-full">
          <img
            src="https://via.placeholder.com/1200x400" // Ganti dengan URL gambar event
            alt="Event"
            className="rounded-lg w-full h-[250px] object-cover"
          />
        </div>

        {/* Event Info */}
        <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
          <div className="flex items-center">
            <span className="mr-2">📅</span>
            <span>01/12/2024</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">📍</span>
            <span>Online</span>
          </div>
          <div className="flex items-center px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
            <span className="mr-2">🔖</span>
            <span>Menengah</span>
          </div>
        </div>

        {/* Event Title */}
        <h2 className="text-blue-600 font-bold text-xl mt-4">
          Ericsson Gelar Hackathon Dorong Inovasi AI dan Smart Manufacturing
        </h2>
        <p className="text-black">
          Build the next generation of AI-powered solutions
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="w-[288px] h-[57px] border border-blue-600 text-blue-600 rounded-lg bg-white">
            Detail Event
          </button>
          <button className="w-[288px] h-[57px] bg-blue-600 text-white rounded-lg">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpcommingEvent;
