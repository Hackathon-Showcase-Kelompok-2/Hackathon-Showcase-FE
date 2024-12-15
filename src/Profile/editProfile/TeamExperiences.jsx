import React, { useState } from "react";

const TeamExperiences = () => {
  const [experiences, setExperiences] = useState([
    { period: "", activity: "", achievement: "", description: "" },
  ]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { period: "", activity: "", achievement: "", description: "" },
    ]);
    setButtonClicked(true);
    setTimeout(() => setButtonClicked(false), 200);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedExperiences = experiences.map((exp, i) =>
      i === index ? { ...exp, [name]: value } : exp
    );
    setExperiences(updatedExperiences);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");

    if (!token) {
      alert("Token tidak ditemukan, harap login terlebih dahulu!");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/api/team_experiences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ experiences }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Pengalaman tim berhasil dikirim!");
      } else {
        alert(`Gagal mengirim data: ${result.message || "Terjadi kesalahan."}`);
      }
    console.log("Response:", response.status);
    console.log("Response JSON:", result);
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="w-full max-w-6xl space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-center text-lg font-semibold mb-4">Pengalaman Tim</h2>
          {experiences.map((experience, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded mb-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`period-${index}`}>
                  Tahun (2020-2024)
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 bg-white text-gray-700"
                  id={`period-${index}`}
                  type="text"
                  name="period"
                  value={experience.period}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="2020-2024"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`activity-${index}`}>
                  Nama Kegiatan
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 bg-white text-gray-700"
                  id={`activity-${index}`}
                  type="text"
                  name="activity"
                  value={experience.activity}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Nama Kegiatan"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`achievement-${index}`}>
                  Jenis Kegiatan
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 bg-white text-gray-700"
                  id={`achievement-${index}`}
                  type="text"
                  name="achievement"
                  value={experience.achievement}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Jenis Kegiatan"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`description-${index}`}>
                  Deskripsi Kegiatan
                </label>
                <textarea
                  className="shadow border rounded w-full py-2 px-3 bg-white text-gray-700"
                  id={`description-${index}`}
                  name="description"
                  value={experience.description}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Deskripsikan Tim Kamu"
                />
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <button
              onClick={addExperience}
              type="button"
              className={`${
                buttonClicked ? "bg-blue-500" : "bg-blue-100"
              } text-blue-500 font-semibold py-2 px-4 rounded-lg w-full`}
            >
              <i className="fas fa-plus mr-2"></i> Tambah Pengalaman
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg w-full"
              disabled={loading}
            >
              {loading ? "Mengirim..." : "Kirim Pengalaman"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamExperiences;
