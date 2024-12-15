import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailThread = () => {
  const { id } = useParams(); // Get the thread ID from the URL
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Fetch the thread details
    const fetchThreadDetail = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/threads/${id}`);
        const data = response.data.thread;

        setThread(data);
        setLikes(response.data.total_likes); // Update the likes count from the response
        // Check if the current user has liked the thread (this depends on your backend response)
        setLiked(response.data.total_likes > 0); // Adjust according to your needs (you can also check if the user is in the likes list)
        setLoading(false);
      } catch (err) {
        console.error("Error fetching thread detail:", err);
        setError("There was an error loading the data.");
        setLoading(false);
      }
    };

    fetchThreadDetail();
  }, [id]);

  // Function to handle like toggle
  const handleLike = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/threads/${id}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Adjust authentication mechanism as needed
          },
        }
      );
      setLikes(response.data.likes); // Update the like count from response
      setLiked(!liked); // Toggle liked state
    } catch (err) {
      console.error("Error liking thread:", err);
      alert("Failed to like the thread. Please try again.");
    }
  };

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-2">
          <div className="flex-grow">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{thread.title}</h1>
            <div className="flex items-center text-gray-600">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-2">
                <img
                  src={thread.user.img_profile ? `http://127.0.0.1:8000/storage/profile/${thread.user.img_profile}` : '/default-profile.jpg'}
                  alt={thread.user.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">{thread.user.name}</p>
              </div>
            </div>
          </div>
          {thread.thumbnail && (
            <img
              alt="Thread thumbnail"
              className="w-32 h-24"
              src={`http://127.0.0.1:8000/storage/thumbnail_images/${thread.thumbnail}`}
            />
          )}
        </div>
        <div className="flex items-center text-gray-600 mt-1">
          <i className="fas fa-calendar-alt mr-2"></i>
          <p className="text-sm">{new Date(thread.created_at).toLocaleDateString("id-ID")}</p>
        </div>
        <hr className="my-4" />
        <p className="text-gray-700 mb-4">{thread.content}</p>
        <div className="flex items-center mt-4 space-x-4">
          {/* Like button */}
          <button
            className={`flex bg-white items-center border rounded-lg p-2 ${liked ? "text-red-500 border-red-300" : "text-gray-500 border-gray-300"}`}
            onClick={handleLike}
          >
            <i className={`fas fa-heart mr-2 ${liked ? "text-red-500" : ""}`}></i>
            <span>{likes}</span>
          </button>

          <div className="flex items-center text-blue-500 border border-gray-300 rounded-lg p-2">
            <i className="fas fa-thumbs-up mr-2"></i>
            <span>{thread.total_emotes}</span>
          </div>
          <div className="flex items-center text-gray-500 border border-gray-300 rounded-lg p-2">
            <i className="fas fa-eye mr-2"></i>
            <span>{thread.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailThread;
