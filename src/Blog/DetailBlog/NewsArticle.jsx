import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const NewsArticle = () => {
  const { id } = useParams(); // Mengambil ID dari parameter URL
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data dari API berdasarkan ID
    const fetchArticleData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/posts/${id}`);
        setArticleData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Gagal memuat data artikel");
        setLoading(false);
      }
    };

    fetchArticleData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-gray-100 p-4 w-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md text-black">
        <h1 className="text-2xl font-bold mb-2">{articleData.title}</h1>
        <p className="text-gray-600 mb-4 flex items-center">
          <i className="fas fa-calendar-alt mr-3"></i>
          {new Date(articleData.created_at).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <img
          alt={articleData.title}
          className="w-full mb-4"
          height="300"
          src={`http://127.0.0.1:8000/storage/post_images/${articleData.image}`}
          width="600"
        />
        <p className="mb-4">{articleData.content}</p>
        <p className="text-gray-600">
          Komentar: {articleData.comments_count} | Suka: {articleData.likes_count}
        </p>
      </div>
    </div>
  );
};

export default NewsArticle;
