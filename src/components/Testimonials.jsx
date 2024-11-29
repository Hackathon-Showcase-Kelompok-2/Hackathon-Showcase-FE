import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rina Andini",
      title: "UI/UX Designer",
      feedback: "Galeri Hackathon adalah tempat sempurna untuk menunjukkan inovasi saya.",
      image: "https://via.placeholder.com/50", // Ganti URL ini dengan gambar asli
      borderColor: "bg-blue-500",
    },
    {
      name: "Arya Nugraha",
      title: "Software Engineer",
      feedback: "Saya sangat terinspirasi oleh proyek-proyek yang ditampilkan di Galeri Hackathon.",
      image: "https://via.placeholder.com/50", // Ganti URL ini dengan gambar asli
      borderColor: "bg-yellow-500",
    },
    {
      name: "Dewi Kartika",
      title: "Data Analyst",
      feedback: "G-Hack membawa ide-ide menjadi nyata dan memberikan ruang bagi kreativitas tanpa batas.",
      image: "https://via.placeholder.com/50", // Ganti URL ini dengan gambar asli
      borderColor: "bg-blue-500",
    },
  ];

  return (
    <div className="py-10 mx-auto p-6 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <h2 className="text-3xl font-bold">Apa Kata Mereka?</h2>
        <p className="text-gray-600 md:w-1/2">
          Dengarkan cerita inspiratif dari peserta, mentor, dan pengamat yang telah merasakan dampak Galeri Hackathon. Dari pengalaman berharga hingga kolaborasi tak terlupakan, inilah pendapat mereka tentang perjalanan inovasi bersama G-Hack!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex items-start bg-white shadow-md rounded-lg p-4 space-x-4"
          >
            <div className="relative">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div
                className={`absolute -left-2 top-0 w-1 h-full rounded ${testimonial.borderColor}`}
              ></div>
            </div>
            <div>
              <p className="text-gray-600 italic">“{testimonial.feedback}”</p>
              <h3 className="mt-2 font-bold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
