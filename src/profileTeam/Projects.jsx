import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Projects = () => {
  const { id } = useParams(); // Ambil id dari URL
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch tim berdasarkan team_id
        const teamResponse = await fetch(
          `http://127.0.0.1:8000/api/teams?team_id=${id}`
        );

        if (!teamResponse.ok) {
          throw new Error("Gagal memuat data tim.");
        }

        const teams = await teamResponse.json();

        if (teams.length === 0) {
          throw new Error("Tim tidak ditemukan.");
        }

        // Ambil user_id dari tim yang ditemukan
        const userId = teams[0].user_id;

        // Fetch project berdasarkan user_id
        const projectResponse = await fetch(
          `http://127.0.0.1:8000/api/projects?user_id=${userId}`
        );

        if (!projectResponse.ok) {
          throw new Error("Gagal memuat data proyek.");
        }

        const projectsData = await projectResponse.json();

        // Filter proyek untuk memastikan hanya proyek dengan user_id yang sesuai
        const filteredProjects = projectsData.filter(
          (project) => project.user_id === userId
        );

        setProjects(filteredProjects);
        console.log(filteredProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto p-4">
        <h1 className="text-center text-blue-600 text-2xl font-bold mb-8">
          Project Kami
        </h1>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="border rounded-lg p-4">
                <img
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4"
                  src={`http://127.0.0.1:8000/storage/project_images/${project.image} || "https://via.placeholder.com/150"`}
                />
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link to={`/project/${id}`}>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">
                    Lihat Detail
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            Tidak ada proyek ditemukan.
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;
