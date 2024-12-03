import React, { useEffect, useState } from "react";

const EventGrid = () => {
  const [events, setEvents] = useState([]);

  // Fetch data dari API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://api-backend-url.com/events"); // Ganti URL ini dengan endpoint API Anda
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-6">Semua Events Hackathon Terbaru</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Thumbnail */}
            <div className="w-full">
              <img
                src={event.thumbnail}
                alt="Event Thumbnail"
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Konten */}
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2 flex items-center">
                <span className="mr-2">{event.date}</span> •{" "}
                <span className="ml-2">{event.location}</span>
              </p>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {event.title}
              </h2>
              <button className="bg-blue-700 text-white w-full py-2 rounded-md">
                Daftar Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGrid;
