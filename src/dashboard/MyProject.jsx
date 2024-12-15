import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyProject() {
  const [projects, setProjects] = useState([]); // State untuk menyimpan data proyek
  const [loading, setLoading] = useState(true); // State untuk loading

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          throw new Error("Auth token not found");
        }

        // Fetch user data
        const userResponse = await fetch("http://127.0.0.1:8000/api/me", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (!userResponse.ok) {
          throw new Error("Failed to fetch user data");
        }

        const userData = await userResponse.json();
        const userId = userData.id;
        console.log(userId);

        // Fetch user projects
        const projectsResponse = await fetch(
          `http://127.0.0.1:8000/api/projects?user_id=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (!projectsResponse.ok) {
          throw new Error("Failed to fetch projects");
        }

        const projectsData = await projectsResponse.json();
        const filteredProjects = projectsData.filter(
          (project) => project.user_id === userId
        );
        setProjects(filteredProjects);
        console.log(projectsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center w-screen bg-white">
    {/* Title */}
    <div className="flex justify-between w-full max-w-[1362.77px] mb-6">
      <h1 className="text-2xl font-bold text-black">
        Proyek yang Sedang Dikerjakan
      </h1>
    </div>

    {/* Jika tidak ada proyek */}
    {projects.length === 0 ? (
      <div className="text-center pb-7">
        <p className="text-gray-600 text-lg mb-4">
          Belum ada proyek, silakan membuat proyek baru.
        </p>
        <Link to="/create-project">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">
            Upload Proyek Baru
          </button>
        </Link>
      </div>
    ) : (
      // Jika ada proyek, tampilkan list proyek
      projects.map((project) => (
        <div
          key={project.id}
          className="border border-gray-300 rounded-lg w-full max-w-[1362.77px] mb-6"
        >
          {/* Image */}
          <div className="relative w-full">
            <img
              src={`http://127.0.0.1:8000/storage/project_images/${project.image}`}
              alt={project.title}
              className="rounded-t-lg w-full text-black h-[300px] object-cover"
            />
          </div>

          {/* Card Info */}
          <div className="bg-blue-50 rounded-b-lg px-6 py-4 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-blue-600">
                {project.title}
              </h2>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={() =>
                  (window.location.href = `/myproject/${project.id}`)
                }
              >
                Lihat Detail
              </button>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <span className="text-gray-600 text-sm">
                {project.progress}%
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Terakhir diupdate:{" "}
              {new Date(project.updated_at).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      ))
    )}
  </div>
);
}

export default MyProject;
