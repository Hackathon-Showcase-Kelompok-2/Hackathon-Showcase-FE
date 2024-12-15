import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProjectFilter = () => {
  const options = ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"];
  const [projects, setProjects] = useState([]);
  const [teams, setTeams] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectsAndTeams = async () => {
      try {
        // Fetch project data
        const projectResponse = await fetch("http://127.0.0.1:8000/api/projects");
        if (!projectResponse.ok) {
          throw new Error("Failed to fetch projects");
        }
        const projectData = await projectResponse.json();
        setProjects(projectData);

        // Fetch teams data based on user_id
        const userIds = projectData.map((project) => project.user_id);
        const uniqueUserIds = [...new Set(userIds)];

        const teamResponses = await Promise.all(
          uniqueUserIds.map((userId) =>
            fetch(`http://127.0.0.1:8000/api/teams?user_id=${userId}`)
          )
        );

        const teamData = await Promise.all(
          teamResponses.map((res) => res.json())
        );

        // Flatten the teams data into an object by user_id
        const teamsObject = {};
        teamData.forEach((team) => {
          team.forEach((t) => {
            teamsObject[t.user_id] = t;
          });
        });

        setTeams(teamsObject);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectsAndTeams();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen w-screen bg-gray-50 flex justify-center items-start p-6">
      <div className="w-[1362.77px]">
        {/* Search Bar */}
        <div className="w-full h-[65px] flex items-center bg-white border border-gray-300 rounded-lg px-4 shadow-sm mb-6">
          <input
            type="text"
            className="w-full h-full outline-none text-gray-700 placeholder-gray-400 bg-white"
            placeholder="Cari proyek berdasarkan nama atau kategori..."
          />
        </div>

        <div className="flex gap-6">
          {/* Filter Section */}
          <div className="w-[490px] bg-white border border-gray-300 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Filter</h2>
            {["Kategori", "Tahun", "Status", "Tingkat Kesulitan"].map(
              (label, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                  </label>
                  <select className="w-full h-[65px] text-gray-300 border border-gray-300 rounded-lg px-4 bg-white">
                    {options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )
            )}
            <button className="w-full h-[65px] bg-blue-500 text-white rounded-lg font-semibold">
              Terapkan Filter
            </button>
          </div>

          {/* Project List Section */}
          <div className="flex-1">
            <div className="flex gap-6 flex-wrap">
              {projects.map((project) => {
                const team = teams[project.user_id]; // Find the team for the user_id
                const teamImage = team ? team.image : "/default_team_image.png"; // Fallback to default image if no team found

                return (
                  <Link
                    to={`/project/${project.id}`}
                    key={project.id}
                    className="w-[398px] h-[578px] bg-white border border-gray-300 rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow"
                  >
                    {/* Gambar Proyek */}
                    <img
                      src={
                        project.image
                          ? `http://127.0.0.1:8000/storage/project_images/${project.image}`
                          : "https://via.placeholder.com/371x249"
                      }
                      alt={project.title}
                      className="w-[371px] h-[249px] rounded-lg object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2 text-black">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <img
                        src={`http://127.0.0.1:8000/storage/team_images/${teamImage}`}
                        alt="Team"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {team?.name || "No Team"}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-500 text-sm">
                      <span>❤️ {project.likes_count || 0}</span>
                      <span>💬 {project.project_comments_count || 0}</span>
                      <span>👁️ {project.views || 0}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
            {/* Pagination Slider */}
            <div className="flex justify-center mt-6">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-l-lg">
                {"<"}
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg">
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;
