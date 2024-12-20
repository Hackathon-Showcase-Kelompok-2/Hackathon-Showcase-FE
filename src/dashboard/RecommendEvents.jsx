import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EventList() {
  const [events, setEvents] = useState([]);

  // Fetch data dari API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/events")
      .then((response) => response.json())
      .then((data) => {
          setEvents(data.data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="flex flex-col items-center w-screen bg-white">
      {/* Title and "Semua" button */}
      <div className="flex justify-between w-full max-w-[1362.77px] mb-6">
        <h1 className="text-2xl font-bold text-black">Rekomendai Events</h1>
        <button className="text-blue-600 bg-white">Semua</button>
      </div>

      {/* Event List */}
      {events.map((event) => (
        <div
          key={event.id}
          className="border border-gray-300 rounded-lg w-full max-w-[1362.77px] mb-6 p-6"
        >
          {/* Image */}
          <div className="relative w-full">
            <img
              src={`http://127.0.0.1:8000/storage/event_images/${event.image}`}
              alt={event.name}
              className="rounded-lg w-full text-black h-[250px] object-cover"
            />
          </div>

          {/* Event Info */}
          <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
            <div className="flex items-center">
              <span className="mr-2">📅</span>
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📍</span>
              <span>Online</span> {/* Tambahkan lokasi jika tersedia di API */}
            </div>
            <div className="flex items-center px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
              <span className="mr-2">🔖</span>
              <span>Menengah</span> {/* Tambahkan level jika tersedia di API */}
            </div>
          </div>

          {/* Event Title */}
          <h2 className="text-blue-600 font-bold text-xl mt-4">{event.name}</h2>
          <p className="text-black">{event.description}</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Link to={`/events/${event.id}`}>
              <button className="w-[288px] h-[57px] border border-blue-600 text-blue-600 rounded-lg bg-white">
                Detail Event
              </button>
            </Link>
            <Link to={`/events/${event.id}/regris`}>
              <button className="w-[288px] h-[57px] bg-blue-600 text-white rounded-lg">
                Daftar Sekarang
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventList;
