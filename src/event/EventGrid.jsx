import React, { useEffect, useState } from "react";

const EventGrid = () => {
  const [events, setEvents] = useState([]);

  // Fetch data dari API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/events");
        const result = await response.json();

        // Pastikan data berada dalam bentuk array
        if (result.data) {
          setEvents([result.data]); // Masukkan data ke dalam array
        } else {
          console.error("Data event tidak ditemukan di response API");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-6 text-center">
        Semua Events Hackathon Terbaru
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div
              key={event.id || index} // Gunakan id jika tersedia, fallback ke index
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="w-full">
                <img
                  src={event.thumbnail || "https://via.placeholder.com/150"}
                  alt={event.name || "Event Thumbnail"}
                  className="w-full h-48 object-cover"
                />
              </div>
              {/* Konten */}
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">
                  <span className="mr-2">{event.date || "Tanggal tidak tersedia"}</span>
                </p>
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  {event.name || "Judul tidak tersedia"}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {event.description || "Deskripsi tidak tersedia"}
                </p>
                <button className="bg-blue-700 text-white w-full py-2 rounded-md hover:bg-blue-800">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            Tidak ada event yang tersedia saat ini.
          </p>
        )}
      </div>
    </div>
  );
};

export default EventGrid;
