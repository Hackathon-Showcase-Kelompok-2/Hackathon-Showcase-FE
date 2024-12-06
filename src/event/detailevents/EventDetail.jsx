import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EventDetail = () => {
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-8 bg-white">
      {/* Tentang Event */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-4">Tentang Event</h1>
          <p className="text-sm text-gray-700 mb-6">
            {eventData ? eventData.description : "Deskripsi tidak tersedia"}
          </p>
          <div className="space-y-2">
            <p className="text-gray-800">
              <strong>Tanggal & Waktu:</strong> {eventData ? eventData.date : "-"}
            </p>
            <p className="text-gray-800">
              <strong>Harga Tiket:</strong> {eventData ? eventData.price : "Deskripsi tidak tersedia"} {/* Hardcoded, ganti jika data tersedia */}
            </p>
            <p className="text-gray-800">
              <strong>Kategori:</strong> {eventData ? eventData.eventcategory : "Deskripsi tidak tersedia"} {/* Hardcoded, ganti jika data tersedia */}
            </p>
          </div>
        </div>

        {/* Lokasi */}
        <div className="w-full lg:w-1/3">
          <h1 className="text-xl font-bold mb-4">Lokasi</h1>
          <div className="border rounded-lg overflow-hidden">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126215.62545734582!2d106.68942931384358!3d-6.229386375001873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e791cd66f19bb76!2sGedung%20Digital%20Jakarta!5e0!3m2!1sen!2sid!4v1675998894330!5m2!1sen!2sid"
              className="w-full h-48"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="p-4 bg-gray-50">
              <p>Gedung Digital Jakarta</p>
              <p className="text-sm text-gray-600">
                Jl. Jenderal Sudirman, Jakarta Selatan, kode pos 1230.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pembicara Utama */}
      <div className="mt-10">
        <h1 className="text-xl font-bold mb-4">Pembicara Utama</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[ // Hardcoded, bisa diubah jika data pembicara tersedia di API
            {
              name: "Dr. Sarah Johnson",
              role: "IoT Solutions Architect, Tech Corp",
              linkedin: "#",
              img: "https://via.placeholder.com/100",
            },
            {
              name: "Ir. Budi Santoso",
              role: "Senior IoT Developer",
              linkedin: "#",
              img: "https://via.placeholder.com/100",
            },
            {
              name: "Dr. Fadel Suawali",
              role: "IT Development Manager",
              linkedin: "#",
              img: "https://via.placeholder.com/100",
            },
          ].map((speaker, index) => (
            <div
              key={index}
              className="flex items-center p-4 border rounded-lg"
              style={{ width: "445px", height: "143px" }}
            >
              <img
                src={speaker.img}
                alt={speaker.name}
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h2 className="font-bold">{speaker.name}</h2>
                <p className="text-sm text-gray-600">{speaker.role}</p>
                <a
                  href={speaker.linkedin}
                  className="text-blue-500 text-sm mt-2 inline-block"
                >
                  in Profil LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Jadwal Acara */}
      <div className="mt-10">
        <h1 className="text-xl font-bold mb-4">Jadwal Acara</h1>
        <div
          className="border rounded-lg p-4"
          style={{ width: "1359px", height: "378px" }}
        >
          {[ // Hardcoded, ganti jika data jadwal tersedia di API
            { time: "08:30 - 09:00", activity: "Registrasi Peserta" },
            { time: "09:00 - 09:30", activity: "Pembukaan & Pengenalan Challenge" },
            { time: "09:30 - 12:00", activity: "Hackathon Sesi 1" },
            { time: "12:00 - 13:00", activity: "ISHOMA" },
            { time: "13:00 - 16:00", activity: "Hackathon Sesi 2" },
            { time: "16:00 - 17:00", activity: "Presentasi & Pengumuman Pemenang" },
          ].map((schedule, index) => (
            <div key={index} className="flex justify-between items-center">
              <p className="text-gray-700">{schedule.time}</p>
              <p className="text-gray-800 font-medium">{schedule.activity}</p>
              <hr className="w-full border-t mt-2 mb-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
