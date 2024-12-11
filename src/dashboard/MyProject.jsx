import React from "react";

function MyProject() {
  return (
    <div className="flex flex-col items-center w-screen bg-white">
      {/* Title */}
      <div className="flex justify-between w-full max-w-[1362.77px] mb-6">
        <h1 className="text-2xl font-bold text-black">Proyek yang Sedang Dikerjakan</h1>
      </div>

      {/* Event Cards */}
      {[1, 2].map((event, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg w-full max-w-[1362.77px] mb-6"
        >
          {/* Image */}
          <div className="relative w-full">
            <img
              src="https://via.placeholder.com/1362x300"
              alt="Event Banner"
              className="rounded-t-lg w-full text-black h-[300px] object-cover"
            />
          </div>

          {/* Card Info */}
          <div className="bg-blue-50 rounded-b-lg px-6 py-4 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-blue-600">
                {index === 0 ? "Ericsson Gelar Hackathon Dorong Inovasi AI dan Smart Manufacturing" : "IoT Hackathon 2024"}
              </h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Lihat Detail
              </button>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
                <div
                  className={`bg-blue-600 h-4 rounded-full ${index === 0 ? "w-[70%]" : "w-[30%]"}`}
                ></div>
              </div>
              <span className="text-gray-600 text-sm">
                {index === 0 ? "70%" : "30%"}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Terakhir diupdate: {index === 0 ? "2 hari yang lalu" : "1 minggu yang lalu"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyProject;
