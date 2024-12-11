import React from "react";

const AchievementCard = ({ title, date, eventName, awardIcon }) => {
  return (
    <div className="w-[1368px] h-auto border rounded-lg px-6 shadow-sm mx-auto mb-8">
      {/* Content dalam Card */}
      <div className="flex items-center h-[154px]">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-yellow-200">
            {awardIcon}
          </div>
        </div>
        <div className="ml-4 flex flex-col">
          <h3 className="text-black text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">{date}</p>
          <p className="text-blue-600 font-semibold mt-1">{eventName}</p>
        </div>
        <div className="ml-auto flex gap-4">
          <button className="bg-blue-500 text-white w-[199px] h-[50px] rounded-lg">
            Upload Project
          </button>
          <button className="border border-blue-500 text-blue-500 w-[199px] h-[50px] rounded-lg bg-white">
            Lihat Detail
          </button>
        </div>
      </div>

      {/* Tombol di Bawah Card */}
      <div className="flex justify-left my-4 gap-x-4">
        <button className="bg-blue-500 text-white w-[199px] h-[50px] rounded-lg">
          Download Sertifikat
        </button>
        <button className="bg-blue-500 text-white w-[199px] h-[50px] rounded-lg">
          Upload ke LinkedIn
        </button>
        <button className="bg-blue-500 text-white w-[199px] h-[50px] rounded-lg">
          Join Event Lain
        </button>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-white">
      {/* Header */}
      <div className="w-[1368px] text-center mb-8">
        <div className="flex justify-center items-center text-blue-600 mb-4">
          <span className="text-3xl">&#127942;</span> {/* Icon Piala */}
          <h1 className="text-2xl font-bold ml-2">Sertifikat & Pencapaian</h1>
        </div>
        <p className="text-gray-600">
          Selamat! Kamu menjuarai Hackathon, klik tombol dibawah untuk mendapatkan sertifikatmu!
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-8"> {/* Jarak antar card */}
        <AchievementCard
          title="Hackathon Juara 2"
          date="Mei 2024"
          eventName="Web Dev Summit"
          awardIcon={<span className="text-yellow-500 text-2xl">&#9733;</span>} // Bintang emas
        />
        <AchievementCard
          title="Best Innovation Award"
          date="Mei 2024"
          eventName="AI Innovation Challenge"
          awardIcon={<span className="text-blue-500 text-2xl">&#9733;</span>} // Bintang biru
        />
      </div>
    </div>
  );
};

export default Achievements;
