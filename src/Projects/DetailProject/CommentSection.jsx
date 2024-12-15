import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CommentSection = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [project, setProject] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userTeamImage, setUserTeamImage] = useState(null); // State for team image

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
          // Fetch team data after getting user info
          if (response.data.id) {
            axios
              .get(`http://127.0.0.1:8000/api/teams?user_id=${response.data.id}`)
              .then((teamResponse) => {
                const team = teamResponse.data[0]; // Assuming user belongs to one team
                console.log("data team:",team.image)
                setUserTeamImage(team.image || null); // Set the team's image
              })
              .catch((error) => {
                console.error("Error fetching team data:", error);
              });
          }
        })
        .catch(() => {
          setIsLoggedIn(false);
          setUser(null);
        });
    }
  }, []);

  // Fetch data project dan komentar
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/projects/${id}`
        );
        setProject(response.data);
        setComments(response.data.project_comments || []);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [id]);

  // Handle submit komentar baru
  const handleSubmitComment = async () => {
    setLoading(true);
    console.log("Submitting comment:", newComment);
    console.log("Submitting comment:", id);
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/projectcomment",
        {
          project_id: id,
          content: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setComments((prev) => [...prev, response.data]);
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
          {project ? project.title : "Memuat..."}
        </h1>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">
            Komentar ({comments.length})
          </span>
        </div>
        <hr className="mb-6" />

        {isLoggedIn ? (
          <>
            <div className="flex items-start mb-6">
              <img
                alt="User profile"
                className="w-12 h-12 rounded-full mr-4"
                src={`http://127.0.0.1:8000/storage/team_images/${userTeamImage}`}
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
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              name={comment.commentator.name}
              date={new Date(comment.created_at).toLocaleDateString()}
              text={comment.content}
              imgSrc={`http://127.0.0.1:8000/storage/images_teams/${userTeamImage}`}
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

import PropTypes from 'prop-types';

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default CommentSection;
