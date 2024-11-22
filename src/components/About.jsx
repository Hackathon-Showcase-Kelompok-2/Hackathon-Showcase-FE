import React from 'react';

const About = () => {
  return (
    <section className="px-8 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Images Section */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Hackathon 1"
              className="w-32 h-32 rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Hackathon 2"
              className="w-32 h-32 rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Hackathon 3"
              className="w-32 h-32 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* About Text Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Galeri Hackathon</h2>
          <p className="text-gray-600 mb-6">
            Galeri Hackathon (G-Hack) adalah platform digital inovatif yang bertujuan menjadi
            wadah utama untuk menampilkan karya dan inovasi dari berbagai ajang hackathon. Kami
            menyediakan ruang bagi kreator dan inovator untuk memamerkan proyek mereka, diskusi
            dengan sesama pengguna, mengikuti event yang ada, serta mengakses informasi terkini
            seputar hackathon global.
          </p>
        </div>
      </div>

      {/* Why Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Mengapa Galeri Hackathon?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-md">
            <div className="text-blue-500 mb-4 text-4xl">💡</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Inovasi</h3>
            <p className="text-gray-600">
              Tunjukkan ide-ide kreatif Anda yang inovatif dan jadikan proyek Anda sebagai solusi
              inspiratif bagi tantangan dunia.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <div className="text-blue-500 mb-4 text-4xl">🤝</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Kolaborasi</h3>
            <p className="text-gray-600">
              Bangun jejaring dengan tim berbakat dari berbagai latar belakang untuk menciptakan
              solusi yang lebih kuat.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <div className="text-blue-500 mb-4 text-4xl">🏆</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pengakuan</h3>
            <p className="text-gray-600">
              Dapatkan apresiasi atas usaha Anda dengan menampilkan proyek kepada komunitas luas
              dan mitra potensial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
