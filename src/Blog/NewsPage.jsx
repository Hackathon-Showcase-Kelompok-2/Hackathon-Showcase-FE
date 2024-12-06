import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch("http://127.0.0.1:8000/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data); // Assuming API response structure contains `data` key
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleLike = (postId) => {
    // Update likes in the state
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes_count: post.likes_count + 1 } : post
      )
    );

    // Call API to update like count (if applicable)
    fetch(`http://127.0.0.1:8000/api/posts/${postId}/like`, {
      method: "POST",
    }).catch((error) => console.error("Error liking post:", error));
  };

  return (
    <div className="bg-gray-100 p-6 w-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                alt={post.title}
                className="w-full h-48 object-cover"
                src={`http://127.0.0.1:8000/storage/${post.image}`} // Assuming `image` is relative path
                width="600"
                height="400"
              />
              <div className="p-4">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <i className="far fa-calendar-alt mr-2"></i>
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  <i className="far fa-comments ml-4 mr-2"></i>
                  <span>{post.comments_count} comment</span>
                  <i
                    className="far fa-thumbs-up ml-4 mr-2 cursor-pointer text-blue-600"
                    onClick={() => handleLike(post.id)}
                  ></i>
                  <span>{post.likes_count} likes</span>
                </div>
                <h2 className="text-lg font-semibold mb-2 text-black">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.content.slice(0, 100)}...</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Read More
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
