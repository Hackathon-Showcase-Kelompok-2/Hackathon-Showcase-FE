import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TeamMembers = () => {
  const { id } = useParams();
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil data proyek dan kemudian anggota tim
  const fetchTeamMembers = async () => {
    try {
      // Ambil data proyek untuk mendapatkan user_id
      const projectResponse = await fetch(`http://127.0.0.1:8000/api/projects/${id}`);
      if (!projectResponse.ok) {
        throw new Error('Gagal mengambil data proyek');
      }
      const projectData = await projectResponse.json();
      const userId = projectData.user_id; 
  
      // Gunakan user_id untuk mengambil data tim
      const teamResponse = await fetch(`http://127.0.0.1:8000/api/teams?user_id=${userId}`);
      if (!teamResponse.ok) {
        throw new Error('Gagal mengambil data tim');
      }
      const teamData = await teamResponse.json();
      const userTeam = teamData.find((team) => team.user_id === userId); // Cari tim berdasarkan user_id
  
      if (!userTeam) {
        throw new Error('Tim tidak ditemukan untuk user_id ini');
      }
  
      const teamId = userTeam.id; // Ambil id tim dari data tim
  
      // Gunakan id tim untuk mengambil data anggota tim
      const teamMembersResponse = await fetch(`http://127.0.0.1:8000/api/team_members`);
      if (!teamMembersResponse.ok) {
        throw new Error('Gagal mengambil data anggota tim');
      }
      const teamMembersData = await teamMembersResponse.json();
  
      // Filter anggota tim berdasarkan team_id
      const filteredMembers = teamMembersData.filter(member => member.team_id === teamId);
  
      setTeamMembers(filteredMembers);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  if (loading) {
    return <div className="text-center text-blue-600">Memuat data...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="max-w-8xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Anggota Tim</h1>
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-blue-200 p-4 rounded-lg flex items-center">
              <img
                alt={`Portrait of ${member.name}`}
                className="w-20 h-20 rounded-full mr-4"
                src={`http://127.0.0.1:8000/storage/team_member_images/${member.image}`} // Pastikan API menyediakan URL gambar
              />
              <div>
                <h2 className="text-lg font-bold text-blue-800">{member.name}</h2>
                <p className="text-blue-600">{member.role}</p> {/* Menampilkan role */}
                <p className="text-gray-600">{member.team_role || 'Peran tidak diketahui'}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg w-full">
            Lihat Profil Tim
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
