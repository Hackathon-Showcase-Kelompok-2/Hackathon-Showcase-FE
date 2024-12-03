import React, { useEffect, useState } from "react";

const EventList = () => {
  const [events, setEvents] = useState([]);

  // Fetch data dari API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://api-backend-url.com/events"); // Ganti URL ini dengan API backend Anda
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
      <h1 className="text-xl font-bold mb-6">Event Akan Datang</h1>
      {events.slice(0, 3).map((event, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden mb-6"
        >
          <div className="flex flex-col md:flex-row">
            {/* Thumbnail */}
            <div className="w-full md:w-1/3">
              <img
                src={event.thumbnail}
                alt="Event Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Konten */}
            <div className="p-4 flex-1">
              <h2 className="text-lg font-bold text-gray-800">
                {event.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {event.date} - {event.location}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {event.description}
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Detail Events
                </button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
