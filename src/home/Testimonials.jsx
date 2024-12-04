import React from 'react';

const testimonials = [
  {
    name: 'Rina Andini',
    title: 'UI/UX Designer',
    comment: 'Galeri Hackathon adalah tempat sempurna untuk menunjukkan inovasi saya.',
    image: 'https://storage.googleapis.com/a1aa/image/0rkWM9Q2UzaaDtGowmAalUrblimmZVUhdHN0SvalKXR0e85JA.jpg'
  },
  {
    name: 'Arya Nugraha',
    title: 'Software Engineer',
    comment: 'Saya sangat terinspirasi oleh proyek-proyek yang ditampilkan di Galeri Hackathon.',
    image: 'https://storage.googleapis.com/a1aa/image/e6cpVw3WN91EbipBUOaayu3a5aYEnSbb9eVrmA1a0nNP75zTA.jpg'
  },
  {
    name: 'Dewi Kartika',
    title: 'Data Analyst',
    comment: 'G-Hack membawa ide-ide menjadi nyata dan memberikan ruang bagi kreativitas tanpa batas.',
    image: 'https://storage.googleapis.com/a1aa/image/e6cpVw3WN91EbipBUOaayu3a5aYEnSbb9eVrmA1a0nNP75zTA.jpg'
  }
];

const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-12 bg-gray-100">
      <div className="w-full md:w-1/2 flex flex-col items-center space-y-8 overflow-hidden relative">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg transform transition-transform ease-in-out duration-700 ${
              index % 3 === 0 ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
            <h3 className="text-xl font-bold">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.title}</p>
            <p className="mt-2 text-gray-700">{testimonial.comment}</p>
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/2 p-8 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Apa Kata Mereka?</h2>
        <p className="text-gray-700">
          Dengarkan cerita inspiratif dari peserta, mentor, dan pengamat yang telah merasakan dampak Galeri Hackathon. 
          Dari pengalaman berharga hingga kolaborasi tak terlupakan, inilah pendapat mereka tentang perjalanan inovasi bersama G-Hack!
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
