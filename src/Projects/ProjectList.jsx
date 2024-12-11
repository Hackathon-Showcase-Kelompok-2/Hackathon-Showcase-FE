import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data dari API Laravel
    fetch("http://127.0.0.1:8000/api/projects")
      .then((response) => response.json())
      .then((data) => {
        // Pastikan format API sesuai
        setProjects(data); // Gunakan "data" sesuai dengan struktur API
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const handleReload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-screen-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-black">
            Proyek Populer Minggu Ini
          </h2>
          <button className="text-black font-medium bg-white px-4 py-2 rounded-md">
            Semua
          </button>
        </div>

        {/* Card List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
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
                  <img
                    src={
                      project.user?.image
                        ? `http://127.0.0.1:8000/storage/user_images/${project.user.image}`
                        : "/default_user_image.png"
                    }
                    alt={project.user?.name || "User"}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {project.user?.name || "Unknown"}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <span>❤️ {project.likes_count || 0}</span>
                  <span>💬 {project.project_comments_count || 0}</span>
                  <span>👁️ {project.views || 0}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
