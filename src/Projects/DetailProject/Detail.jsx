import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data proyek berdasarkan ID
  const fetchProjectDetail = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/projects/${id}`
      );
      setProject(response.data); // Set data proyek
      setLoading(false);
    } catch (err) {
      setError("Gagal memuat data proyek");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="w-full p-6">
        {/* Gambar Header */}
        <div className="relative bg-gray-800 rounded-lg overflow-hidden h-[30rem]">
          <img
            alt={`Background image for ${project.title}`}
            className="w-full h-full object-cover opacity-50"
            src={
              project.image
                ? `http://127.0.0.1:8000/storage/project_images/${project.image}`
                : "/default_image_path.png"
            }
          />
          <div className="absolute inset-0 flex flex-col justify-center text-left p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-4 items-center justify-between">
              {/* Informasi Proyek */}
              <div className="flex space-x-4">
                <button
                  className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg"
                  onClick={async () => {
                    try {
                      await axios.post(
                        `http://127.0.0.1:8000/api/projectcomment/${id}/like`,
                        {},
                        {
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                              "authToken"
                            )}`,
                          },
                        }
                      );
                      setProject((prev) => ({
                        ...prev,
                        likes_count: (prev.likes_count || 0) + 1,
                      }));
                    } catch (error) {
                      console.error("Error liking the project:", error);
                    }
                  }}
                >
                  ❤️ {project.likes_count || 0} Likes
                </button>
                <button
                  className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  💬 {project.project_comments_count || 0} Comments
                </button>
                <span className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                  👁️ {project.views || 0} Views
                </span>
              </div>
              {/* Link untuk Daftar */}
              <a
                href={project.link_demo}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Demo
              </a>
            </div>
          </div>
        </div>

        {/* Konten Proyek */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Deskripsi Proyek:</h2>
          <p className="mt-2 text-gray-700">{project.content}</p>

          {/* Link dan Dokumentasi */}
          <h2 className="text-2xl font-bold mt-6">Link & Dokumentasi:</h2>
          <div className="flex flex-col space-y-4 mt-4">
            {project.link_code && (
              <a
                href={project.link_code}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Kode
              </a>
            )}
            {project.documentation && (
              <a
                href={`http://127.0.0.1:8000/storage/project_docs/${project.documentation}`}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unduh Dokumentasi
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
