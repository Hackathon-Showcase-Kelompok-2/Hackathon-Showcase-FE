import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentSection = () => {
  const { id } = useParams(); // Ambil thread ID dari URL
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Periksa status login
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios
        .get("http://127.0.0.1:8000/api/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setIsLoggedIn(true);
          setUser(response.data);
        })
        .catch(() => {
          setIsLoggedIn(false);
          setUser(null);
        });
    }
  }, []);

  // Fetch komentar berdasarkan thread ID
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/threads/${id}/comments`
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [id]);

  // Kirim komentar baru
  const handleSubmitComment = async () => {
    setLoading(true);
    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/threads/${id}/comments`,
        { content: newComment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setComments((prev) => [...prev, response.data]); // Tambahkan komentar baru
      setNewComment(""); // Reset input

      // Notifikasi berhasil
      toast.success("Komentar berhasil dikirim!");
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error("Gagal mengirim komentar. Coba lagi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 p-4 text-gray-800">
      <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Berikan Komentar Anda
        </h1>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">
            Komentar ({comments.length})
          </span>
        </div>
        <hr className="mb-6" />

        {/* Jika user login */}
        {isLoggedIn ? (
          <>
            <div className="flex items-start mb-6">
              <img
                alt="User profile"
                className="w-12 h-12 rounded-full mr-4"
                src={`http://127.0.0.1:8000/storage/${
                  user?.img_profile || "default.jpg"
                }`}
              />
              <textarea
                className="flex-1 p-2 border rounded-lg bg-white"
                placeholder="Tulis Komentar..."
                rows="4"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end mb-6">
              <button
                className={`bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleSubmitComment}
                disabled={loading || !newComment.trim()}
              >
                {loading ? "Mengirim..." : "Kirim"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Anda harus login untuk memberikan komentar.
            </p>
            <a
              href="/signin"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Login
            </a>
          </div>
        )}

        {/* List komentar */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              name={comment.user.name}
              date={new Date(comment.created_at).toLocaleDateString()}
              text={comment.content}
              imgSrc={`http://127.0.0.1:8000/storage/${
                comment.user.img_profile || "default.jpg"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

const Comment = ({ name, date, text, imgSrc }) => {
  return (
    <div className="flex items-start">
      <img
        alt={`${name} profile picture`}
        className="w-12 h-12 rounded-full mr-4"
        src={imgSrc}
      />
      <div>
        <div className="flex items-center mb-1">
          <span className="font-semibold">{name}</span>
          <span className="text-sm text-gray-500 ml-2">{date}</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CommentSection;
