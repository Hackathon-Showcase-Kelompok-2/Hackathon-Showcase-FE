import React from "react";

const blogs = [
  {
    date: "Kamis, 24 Oktober 2024",
    comments: "10 comment",
    title: "Ericsson Gelar Hackathon Dorong Inovasi AI dan Smart Manufacturing",
    image: "/img/blog1.png",
    link: "#",
  },
  {
    date: "Sabtu, 20 Oktober 2024",
    comments: "20 comment",
    title:
      "Mahasiswa Indonesia Juara Hackathon Blockchain Kompetisi Internasional",
    image: "/img/blog2.png",
    link: "#",
  },
  {
    date: "Rabu, 20 November 2024",
    comments: "5 comment",
    title: "GovAI Hackathon Hasilkan Lima Solusi Generative AI untuk Indonesia",
    image: "/img/blog3.png",
    link: "#",
  },
];

const Blog = () => {
  return (
    <div className="py-10 px-6">
      <div>
        <h2 className="text-3xl font-bold text-center mb-4">Blog</h2>
        <p className="text-center text-gray-600 mb-10">
          Blog terpopuler di Kalangan Pengguna minggu ini
        </p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Lihat Artikel Lainnya
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-md mb-4 w-full"
            />
            <p className="text-sm text-gray-500 mb-1">
              📅 {blog.date} &nbsp;&nbsp; 💬 {blog.comments}
            </p>
            <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
            <a
              href={blog.link}
              className="text-blue-500 hover:underline flex items-center gap-1"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Lihat Artikel Lainnya
        </button>
      </div>
    </div>
  );
};

export default Blog;
