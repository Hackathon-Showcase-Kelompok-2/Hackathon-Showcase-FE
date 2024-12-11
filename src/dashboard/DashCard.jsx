import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DashCard = () => {
  const { id } = useParams(); // Mengambil user_id dari URL
  const [userName, setUserName] = useState("Loading...");

  useEffect(() => {
    // Fetch data dari API
    fetch("http://127.0.0.1:8000/api/teams")
      .then((response) => response.json())
      .then((data) => {
        // Cari data berdasarkan user_id
        const userTeam = data.find((team) => team.user_id === parseInt(id));
        if (userTeam) {
          setUserName(userTeam.name); // Set nama user jika ditemukan
        } else {
          setUserName("User Tidak Ditemukan"); // Set jika tidak ada user sesuai user_id
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setUserName("Error Memuat Data");
      });
  }, [id]);

  return (
    <div className="container mx-auto px-4 bg-white w-screen pt-4 pb-10">
      {/* Bagian Atas */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md flex items-center p-6 w-[1373px] h-[310px] mx-auto py-6">
        {/* Gambar */}
        <div className="flex-shrink-0 w-1/3">
          <img
            src="../../public/img/dashboard.png" // Ganti dengan URL gambar Anda
            alt="Dashboard Illustration"
            className="w-100 h-100 rounded-lg"
          />
        </div>
        {/* Teks */}
        <div className="w-2/3 pl-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Selamat Datang, {userName}!
          </h1>
          <p className="text-gray-600 mt-4">
            Lihat ringkasan proyekmu, pencapaian, dan rekomendasi proyek di sini.
          </p>
          {/* Tombol */}
          <div className="flex mt-6 space-x-4">
            <button className="bg-blue-500 text-white font-semibold py-[14px] px-[40px] w-[292px] h-[57px] rounded-lg hover:bg-blue-600">
              Tambah Project Baru
            </button>
            <button className="bg-white text-blue-500 border border-blue-500 font-semibold py-[14px] px-[40px] w-[292px] h-[57px] rounded-lg hover:bg-blue-50">
              Daftar Events
            </button>
          </div>
        </div>
      </div>

      {/* Bagian Bawah */}
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-3 gap-6">
          {/* Card Total Proyek */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center w-[403px] h-[280px]">
            <h2 className="text-blue-500 text-6xl font-bold">12</h2>
            <p className="text-gray-600 mt-4 text-center">Total Proyek</p>
          </div>

          {/* Card Sertifikat */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center w-[403px] h-[280px]">
            <h2 className="text-yellow-500 text-6xl font-bold">5</h2>
            <p className="text-gray-600 mt-4 text-center">Sertifikat & Pencapaian</p>
          </div>

          {/* Card Events */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center w-[403px] h-[280px]">
            <h2 className="text-green-500 text-6xl font-bold">8</h2>
            <p className="text-gray-600 mt-4 text-center">Events Diikuti</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashCard;
