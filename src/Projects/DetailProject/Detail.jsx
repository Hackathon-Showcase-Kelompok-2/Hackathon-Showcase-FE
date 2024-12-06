import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const fetchProjectDetail = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/projects/${id}`);
      setProject(response.data);
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
    <div className="bg-white text-black">
      <div className="w-full p-4">
        <div className="relative bg-gray-800 rounded-lg overflow-hidden h-[30rem]">
          <img
            alt={`Background image for ${project.title}`}
            className="w-full h-full object-cover opacity-50"
            src={project.img_project} // Gunakan URL gambar dari API
          />
          <div className="absolute inset-0 flex flex-col justify-center text-left p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title} {/* Menampilkan judul proyek */}
            </h1>
            <p className="text-xl md:text-2xl mb-12">
              {project.description} {/* Menampilkan deskripsi proyek */}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 mb-6">
              <div className="flex space-x-4">
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                  <i className="fas fa-thumbs-up mr-2"></i>
                  5k
                </button>
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                  <i className="fas fa-heart mr-2"></i>
                  5k
                </button>
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                  <i className="fas fa-comment mr-2"></i>
                  100
                </button>
                <button className="flex items-center bg-white text-gray-800 px-4 py-2 rounded-lg">
                  <i className="fas fa-share mr-2"></i>
                  Share
                </button>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold mt-4 md:mt-0">
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Konten:</h2>
          <p>{project.content}</p> {/* Menampilkan konten proyek */}
          <h2 className="text-2xl font-bold mt-4">Link:</h2>
          <a href={project.link_code} className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Lihat Kode
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
