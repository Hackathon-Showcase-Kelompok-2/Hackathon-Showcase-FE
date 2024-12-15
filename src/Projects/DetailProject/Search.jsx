import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [teams, setTeams] = useState({}); // Store team data by user_id
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectsAndTeams = async () => {
      try {
        // Fetch project data
        const projectResponse = await fetch(
          "http://127.0.0.1:8000/api/projects"
        );
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

  const handleReload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-screen-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-black">
            Proyek Serupa
          </h2>
          <button className="text-black font-medium bg-white px-4 py-2 rounded-md">
            Semua
          </button>
        </div>

        {/* Card List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const team = teams[project.user_id]; // Find the team for the user_id
            const teamImage = team ? team.image : "/default_team_image.png"; // Fallback to default image if no team found

            return (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
                onClick={handleReload}
              >
                {/* Gambar Proyek */}
                <img
                  src={
                    project.image
                      ? `http://127.0.0.1:8000/storage/project_images/${project.image}`
                      : "/default_image_path.png"
                  }
                  alt={project.title}
                  className="w-full h-[200px] rounded-lg object-cover mb-4"
                />

                {/* Judul dan Deskripsi */}
                <h3 className="text-xl font-semibold text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-justify">
                  {project.description}
                </p>

                {/* Informasi Tambahan */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {team && (
                      <div className="flex items-center mt-4">
                        <img
                          src={`http://127.0.0.1:8000/storage/team_images/${teamImage}`}
                          alt="Team"
                          className="w-10 h-10 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-700 ml-2">
                          {team.name || "No Team"}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span>❤️ {project.likes_count || 0}</span>
                    <span>💬 {project.project_comments_count || 0}</span>
                    <span>👁️ {project.views || 0}</span>
                  </div>
                </div>

                {/* Team Image */}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
