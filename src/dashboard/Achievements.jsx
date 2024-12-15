import React, { useState, useEffect } from "react";

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
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("Auth token not found in localStorage");
          return;
        }

        // Fetch user data to get user ID
        const userResponse = await fetch("http://127.0.0.1:8000/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!userResponse.ok) {
          throw new Error("Failed to fetch user data");
        }

        const userData = await userResponse.json();
        const userId = userData.id;

        // Fetch awards using user ID
        const awardsResponse = await fetch(`http://127.0.0.1:8000/api/awards?user_id=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!awardsResponse.ok) {
          throw new Error("Failed to fetch awards");
        }

        const awardsData = await awardsResponse.json();
        const filteredAwards = awardsData.filter((member) => member.team_id === userId);
        console.log(filteredAwards);
        setAwards(filteredAwards);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAwards();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center py-10 bg-white">
      {/* Header */}
      <div className="w-[1368px] text-center mb-8">
        <div className="flex justify-center items-center text-blue-600 mb-4">
          <span className="text-3xl">🏆</span> {/* Icon Piala */}
          <h1 className="text-2xl font-bold ml-2">Sertifikat & Pencapaian</h1>
        </div>
        {/* <p className="text-gray-600">
          Selamat! Kamu menjuarai Hackathon, klik tombol dibawah untuk mendapatkan sertifikatmu!
        </p> */}
      </div>
      <div className="space-y-8"> {/* Jarak antar card */}
        {awards.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 text-lg mb-4">
              Belum ada Award
            </p>
          </div>
        ) : (
          awards.map((award) => (
            <AchievementCard
              key={award.id}
              title={award.title}
              date={new Date(award.date).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              eventName={award.category}
              awardIcon={<span className="text-yellow-500 text-2xl">★</span>} // Bintang emas
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Achievements;
