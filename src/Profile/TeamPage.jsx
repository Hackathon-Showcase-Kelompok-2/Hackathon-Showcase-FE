import React, { useState, useEffect } from "react";

function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWithToken = async (url, token) => {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("Token tidak ditemukan. Harap login kembali.");
        }

        // Fetch data pengguna dari endpoint /me
        const userResponse = await fetchWithToken("http://127.0.0.1:8000/api/me", token);
        if (!userResponse.ok) {
          throw new Error("Gagal memuat data pengguna.");
        }

        const userData = await userResponse.json();
        const userId = userData.id;
        if (!userId) {
          throw new Error("Data pengguna tidak valid.");
        }

        // Fetch data tim berdasarkan user_id
        const teamResponse = await fetch(`http://127.0.0.1:8000/api/teams?user_id=${userId}`);
        if (!teamResponse.ok) {
          throw new Error("Gagal memuat data tim.");
        }

        const teamsData = await teamResponse.json();
        const userTeam = teamsData.find((team) => team.user_id === userId);
        if (!userTeam) {
          throw new Error("Tim tidak ditemukan.");
        }

        const teamId = userTeam.id;

        // Fetch data anggota tim
        const teamMembersResponse = await fetch(`http://127.0.0.1:8000/api/team_members`);
        if (!teamMembersResponse.ok) {
          throw new Error("Gagal memuat data anggota tim.");
        }

        const teamMembersData = await teamMembersResponse.json();
        const filteredMembers = teamMembersData.filter((member) => member.team_id === teamId);

        setTeamMembers(filteredMembers);
      } catch (error) {
        console.error("Error saat mengambil data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  const openModal = (member) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-600 mb-4">Anggota Kami</h1>
          <div className="border-2 border-blue-300 p-8 rounded-lg">
            <div className="flex flex-wrap justify-center gap-12">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-blue-50 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
                  onClick={() => openModal(member)}
                  style={{ width: "255px", height: "401px" }}
                >
                  <img
                    src={`http://127.0.0.1:8000/storage/team_member_images/${member.image}`}
                    alt={`Portrait of ${member.name}`}
                    className="rounded-lg mb-4 object-cover w-full h-64"
                  />
                  <h2 className="text-lg font-bold text-blue-600">{member.name}</h2>
                  <p className="text-gray-600">{member.team_role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedMember && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
              <div className="flex flex-col items-center">
                <img
                  src={`http://127.0.0.1:8000/storage/team_member_images/${selectedMember.image}`}
                  alt={`Profile picture of ${selectedMember.name}`}
                  className="rounded-full border-4 border-blue-500 object-cover w-24 h-24"
                />
                <h2 className="text-xl font-bold text-blue-600 mt-4">
                  {selectedMember.name}
                </h2>
                <span className="bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded-full mt-1">
                  {selectedMember.team_role}
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">Informasi Pribadi</h3>
                <p className="text-gray-600 mt-2">{selectedMember.description}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-venus mr-2"></i>
                    <span>{selectedMember.gender || "Tidak diketahui"}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-user-graduate mr-2"></i>
                    <span>{selectedMember.education}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-phone mr-2"></i>
                    <span>{selectedMember.phone_number}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg"
                  onClick={closeModal}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-center border-t border-gray-300 py-8">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Tentang Kami</h2>
          <p className="text-gray-600 mb-6">Deskripsi tim tidak tersedia.</p>
          <div className="flex justify-center space-x-4">
            {["LinkedIn", "GitHub", "Instagram", "Twitter"].map((platform, index) => (
              <a
                key={index}
                href="#"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-500 hover:text-white transition"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;