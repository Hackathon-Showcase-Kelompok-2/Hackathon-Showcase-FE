import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RegrisGrid = () => {
  const [events, setEvents] = useState([]);

  // Fetch data dari API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/events")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          // Urutkan berdasarkan tanggal terbaru dan ambil 6 event pertama
          const sortedEvents = data.data
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 6);
          setEvents(sortedEvents);
        }
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="flex flex-col items-center bg-white py-10">
      {/* Title and "Semua" button */}
      <div className="flex justify-between w-full max-w-[1362.77px] mb-6">
        <h1 className="text-2xl font-bold text-black">
          Events Hackathon Yang Lain
        </h1>
        <button className="text-blue-600 bg-white">Semua</button>
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-[1362.77px]">
        {events.map((event) => (
          <div
            key={event.id}
            className="border border-gray-300 rounded-lg w-[444px] h-[481px] flex flex-col items-center text-black"
          >
            {/* Event Image */}
            <img
              src={`http://127.0.0.1:8000/storage/${event.image}`}
              alt={event.name}
              className="w-[404px] h-[299px] rounded-lg mt-4 object-cover"
            />

            {/* Event Info */}
            <div className="flex justify-between items-center w-full px-4 mt-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <span className="mr-2">📅</span>
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>{event.location || "Online"}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🔖</span>
                <span>{event.eventcategory || "Menengah"}</span>
              </div>
            </div>

            {/* Event Title */}
            <h2 className="text-blue-600 font-bold text-base mt-4 text-center px-4">
              {event.name}
            </h2>

            {/* Button */}
            <Link to={`/events/${event.id}/regris`}>
              <button className="w-[404px] h-[57px] bg-blue-600 text-white rounded-lg mt-4">
                Daftar Sekarang
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegrisGrid;
