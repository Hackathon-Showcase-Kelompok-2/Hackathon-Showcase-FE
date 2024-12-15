import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProfileCard() {
  const [imageSrc, setImageSrc] = useState("");
  const [teamName, setTeamName] = useState("Loading...");
  const [teamDescription, setTeamDescription] = useState("Loading...");
  const [teamId, setTeamId] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Ambil token dari localStorage
        if (!token) {
          setTeamName("Token tidak ditemukan");
          return;
        }

        // Fetch data user dari endpoint /me
        const userResponse = await fetch("http://127.0.0.1:8000/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!userResponse.ok) {
          setTeamName("Gagal memuat data pengguna");
          return;
        }

        const userData = await userResponse.json();
        const userId = userData?.id; // Dapatkan user_id dari respons /me

        if (!userId) {
          setTeamName("ID pengguna tidak ditemukan");
          return;
        }

        // Fetch data tim dari endpoint /teams menggunakan user_id
        const teamResponse = await fetch("http://127.0.0.1:8000/api/teams", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!teamResponse.ok) {
          setTeamName("Gagal memuat data tim");
          return;
        }

        const teamsData = await teamResponse.json();
        const userTeam = teamsData.find((team) => team.user_id === userId); // Cari tim berdasarkan user_id

        if (userTeam) {
          setImageSrc(`http://127.0.0.1:8000/storage/team_images/${userTeam.image}`); // Set gambar tim
          setTeamName(userTeam.name); // Set nama tim
          setTeamDescription(userTeam.description); // Set deskripsi tim
          setTeamId(userTeam.id); // Set ID tim
        } else {
          setTeamName("Tim tidak ditemukan");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setTeamName("Error memuat data");
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div className="flex justify-center py-10 bg-black">
      <div className="rounded-2xl p-8 flex flex-col items-center relative overflow-hidden w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
        <div className="relative mb-6">
          <div className="rounded-full w-48 h-48 bg-black flex items-center justify-center overflow-hidden relative border-4 border-yellow-500">
            {imageSrc ? (
              <img
                id="profileImage"
                alt="Team"
                className="object-cover w-full h-full"
                src={imageSrc}
              />
            ) : (
              <div id="placeholderIcon" className="text-blue-300">
                <i className="fas fa-user text-4xl"></i>
              </div>
            )}
          </div>
        </div>
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-white"> Welcome, <span className="text-blue-500">Innovators!</span> </h1>
          <p className="text-white">Informasi mengenai profil dan preferensi kamu di seluruh layanan
          Galery Hackaton</p>
        </div>
        <div className="w-auto mt-6">
          <Link to={teamId ? `/editprofile/${teamId}` : "#"}>
            <button className="py-2 px-6 bg-yellow-500 text-white font-bold rounded-lg text-center">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
