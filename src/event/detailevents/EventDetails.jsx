import React, { useEffect, useState } from "react";

const EventDetails = () => {
  const [eventData, setEventData] = useState(null);

  // Fetch data dari API
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch("https://api-backend-url.com/event-detail"); // Ganti dengan endpoint API Anda
        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, []);

  if (!eventData) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Tentang Event</h1>
      <p className="text-gray-700 mb-6">{eventData.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <p className="mb-2">
            <strong>Tanggal & Waktu:</strong> {eventData.date} | {eventData.time}
          </p>
          <p className="mb-2">
            <strong>Harga Tiket:</strong> Rp. {eventData.ticket_price}
          </p>
          <p className="mb-2">
            <strong>Kategori:</strong> {eventData.category}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Lokasi</h2>
          <div className="w-full h-48 rounded-md overflow-hidden mb-2">
            <iframe
              src={`https://www.google.com/maps?q=${eventData.location.latitude},${eventData.location.longitude}&output=embed`}
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <a
            href={`https://www.google.com/maps?q=${eventData.location.latitude},${eventData.location.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {eventData.location.name}
          </a>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Pembicara Utama</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {eventData.speakers.map((speaker, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={speaker.photo}
              alt={speaker.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="text-lg font-bold">{speaker.name}</h3>
            <p className="text-sm text-gray-500">{speaker.title}</p>
            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-sm"
            >
              Profil LinkedIn
            </a>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Jadwal Acara</h2>
      <table className="table-auto w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="border px-4 py-2">Waktu</th>
            <th className="border px-4 py-2">Agenda</th>
          </tr>
        </thead>
        <tbody>
          {eventData.schedule.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.time}</td>
              <td className="border px-4 py-2">{item.agenda}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventDetails;
