import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const PostCommentSection = () => {
  const { id } = useParams(); // Ambil post_id dari URL
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Periksa status login dan ambil data user
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios
        .get("http://127.0.0.1:8000/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setIsLoggedIn(true);
          setUser(response.data); // Set data user
        })
        .catch(() => {
          setIsLoggedIn(false);
          setUser(null);
        });
    }
  }, []);

  // Fetch data post dan komentar
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/posts/${id}`
        );
        setPost(response.data.data); // Simpan seluruh data post
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchPostData();
  }, [id]);

  // Handle submit komentar baru
  const handleSubmitComment = async () => {
    setLoading(true);
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/comment/${id}`,
        {
          comments_content: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Tambahkan komentar baru ke post.post_comments
      setPost((prev) => ({
        ...prev,
        post_comments: [...prev.post_comments, response.data.data],
      }));
      setNewComment(""); // Reset input
    } catch (error) {
      console.error("Error submitting comment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 p-4 text-black">
      <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          {post ? post.title : "Memuat..."}
        </h1>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">
            Komentar ({post ? post.comments_count : "0"})
          </span>
        </div>
        <hr className="mb-6" />

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
              <div className="flex-1">
                <textarea
                  className="w-full p-2 border rounded-lg bg-white"
                  placeholder="Tulis Komentar..."
                  rows="4"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
              </div>
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

        {/* List Komentar */}
        <div className="space-y-6">
          {post?.post_comments.map((comment) => (
            <Comment
              key={comment.id}
              name={comment.comentator.name}
              date={new Date(comment.created_at).toLocaleDateString()}
              text={comment.comments_content}
              imgSrc={`http://127.0.0.1:8000/storage/${
                comment.comentator.img_profile || "default.jpg"
              }`}
            />
          ))}
        </div>
      </div>
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

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default PostCommentSection;
