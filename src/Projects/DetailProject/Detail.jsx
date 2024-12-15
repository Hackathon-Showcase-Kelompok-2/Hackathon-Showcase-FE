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

  // Fungsi untuk menampilkan indikator tingkat kesulitan
  const renderDifficulty = () => {
    switch (project.difficulty_id) {
      case 1:
        return <span className="text-green-500">★ Mudah</span>;
      case 2:
        return <span className="text-yellow-500">★★ Menengah</span>;
      case 3:
        return <span className="text-red-500">★★★ Sulit</span>;
      default:
        return <span className="text-gray-500">Tidak diketahui</span>;
    }
  };

  return (
    <div className="bg-white text-black min-h-screen w-screen">
      <div className="w-full p-6">
        {/* Gambar Header */}
        <div className="relative bg-gray-800 rounded-lg overflow-hidden h-[24rem] flex items-center justify-center">
          <img
            alt={`Background image for ${project.title}`}
            className="w-[1363px] h-[560px] object-cover rounded-md"
            src={
              project.image
                ? `http://127.0.0.1:8000/storage/project_images/${project.image}`
                : "/default_image_path.png"
            }
          />
          <div className="absolute inset-0 flex flex-col justify-center text-left p-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {/* Tombol Like */}
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
              {/* Tombol Comment */}
              <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                💬 {project.project_comments_count || 0} Comments
              </button>
              {/* Tombol Share */}
              <button className="flex items-center bg-white text-black border border-gray-400 px-4 py-2 rounded-lg">
                🔄 Share
              </button>
            </div>
          </div>
        </div>

        {/* Indikator Tingkat Kesulitan */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">Tingkat Kesulitan:</h2>
          <p className="text-lg mt-2 text-left">{renderDifficulty()}</p>
        </div>

        {/* Tentang Proyek */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Tentang Proyek:</h2>
          <p className="mt-2 text-gray-700">{project.content}</p>
        </div>

        {/* Dokumentasi */}
        <div className="mt-6 text-center">
          <img
            alt="Dokumentasi Proyek"
            className="w-[1366px] h-[466px] mx-auto object-cover rounded-lg"
            src={
              project.documentation
                ? `http://127.0.0.1:8000/storage/project_docs/${project.documentation}`
                : "/default_doc_image.png"
            }
          />
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-lest mt-6 space-x-4">
          <a
            href={project.link_code}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
          <a
            href={project.link_demo}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Demo
          </a>
          <a
            href={`http://127.0.0.1:8000/storage/project_docs/${project.documentation}`}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
