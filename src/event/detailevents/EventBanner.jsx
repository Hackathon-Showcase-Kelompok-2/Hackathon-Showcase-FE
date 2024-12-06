import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EventBanner = () => {
  const { id } = useParams(); // Mengambil ID dari parameter URL
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data dari API berdasarkan ID
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/events/${id}`);
        setEventData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Gagal memuat data event");
        setLoading(false);
      }
    };

    fetchEventData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen py-5 bg-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center w-screen py-5 bg-white">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-screen py-5 bg-white">
      {/* Banner Card */}
      <div
        className="relative w-[1372px] h-[518px] rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1372x518')", // Placeholder image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col justify-center h-full pl-16 text-white">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">{eventData.name}</h1>

          {/* Date and Time */}
          <div className="flex items-center mb-2 text-sm">
            <span className="mr-2">📅</span>
            <span>
              {eventData.date} | WIB
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center mb-6 text-sm">
            <span className="mr-2">📍</span>
            <span>Jakarta</span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="w-[329px] h-[57px] bg-blue-600 text-white rounded-lg">
              Daftar Sekarang
            </button>
            <button className="w-[429px] h-[57px] border border-yellow-500 text-yellow-500 rounded-lg">
              Tambah ke Kalender
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
