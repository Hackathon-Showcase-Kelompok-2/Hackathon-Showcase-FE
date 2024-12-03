import React from "react";

const projects = [
  {
    title: "EduTrack",
    description:
      "Aplikasi berbasis Android yang membantu siswa mengatur jadwal belajar, mencatat progres tugas, dan mengakses sumber belajar online.",
    image: "/img/edutrack.png",
    user: "Jessica Laily",
    likes: "5k",
    comments: "100",
    views: "10k",
  },
  {
    title: "CarePoint",
    description:
      "Aplikasi yang mempermudah pengguna untuk memesan konsultasi dokter, membeli obat, dan mendapatkan layanan kesehatan darurat dalam satu aplikasi.",
    image: "/img/carepoint.png",
    user: "Tania Putri",
    likes: "8k",
    comments: "120",
    views: "15k",
  },
  {
    title: "GreenNest",
    description:
      "Website yang menghubungkan komunitas peduli lingkungan untuk berbagi informasi, memulai kampanye, dan berkolaborasi dalam proyek ramah lingkungan.",
    image: "/img/greennest.png",
    user: "Kevin Alvaro",
    likes: "5k",
    comments: "80",
    views: "16k",
  },
  {
    title: "FoodDay",
    description:
      "Website yang memungkinkan pengguna menemukan tempat kuliner lokal terbaik berdasarkan ulasan, lokasi, dan preferensi makanan.",
    image: "/img/foodday.png",
    user: "Arya Ristaw",
    likes: "10k",
    comments: "60",
    views: "18k",
  },
];

const HomeProjects = () => {
  return (
    <div className="py-10 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4">Galeri Hackathon</h2>
      <p className="text-center text-gray-600 mb-10">
        Highlight Proyek Hackathon Terbaik dan Terpopuler di G-Hack
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 w-full"
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex items-center gap-4">
              <img
                src="/img/user-avatar.png"
                alt={project.user}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-800">{project.user}</span>
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <span>❤️ {project.likes}</span>
              <span>💬 {project.comments}</span>
              <span>👀 {project.views}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Lihat Proyek Lainnya
        </button>
      </div>
    </div>
  );
};

export default HomeProjects;
