import React, { useEffect, useState } from "react";

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

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 ">
      {/* Blog Cards Section */}
      <div className="w-[1363px] grid grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-[444px] h-[464px] bg-white shadow-md rounded-md overflow-hidden"
          >
            <img
              src={`http://127.0.0.1:8000/storage/post_images/${post.image}`}
              alt={post.title}
              className="w-full h-[299px] object-cover text-black"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                <span className="ml-4">{post.comments_count} comment</span>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-black">{post.title}</h3>
              <a
                href={`/blog/${post.id}`}
                className="text-blue-500 text-sm font-medium inline-flex items-center"
              >
                Read More <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
