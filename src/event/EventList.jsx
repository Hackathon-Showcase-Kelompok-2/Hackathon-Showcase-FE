import React, { useEffect, useState } from "react";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/events");
        const result = await response.json();

        // Periksa apakah result.data ada
        if (result.data) {
          // Masukkan data ke dalam array untuk di-mapping
          setEvents([result.data]);
        } else {
          console.error("Data not found in API response");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-6">Event Akan Datang</h1>
      {events.map((event, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden mb-6"
        >
          <div className="flex flex-col md:flex-row">
            {/* Thumbnail */}
            <div className="w-full md:w-1/3">
              <img
                src={event.thumbnail || "https://via.placeholder.com/150"}
                alt="Event Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Konten */}
            <div className="p-4 flex-1">
              <h2 className="text-lg font-bold text-gray-800">
                {event.name || "Nama event tidak tersedia"}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {event.date || "Tanggal tidak tersedia"}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {event.description || "Deskripsi tidak tersedia"}
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
