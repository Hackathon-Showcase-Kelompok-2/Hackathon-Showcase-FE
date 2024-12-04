import React from "react";

const CommentSection = () => {
  return (
    <div className="bg-gray-100 p-4 text-black">
      <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Berikan Komentar Anda
        </h1>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Komentar (50)</span>
          <a className="text-sm text-gray-500" href="#">
            Lihat semua
          </a>
        </div>
        <hr className="mb-6" />
        <div className="flex items-start mb-6">
          <img
            alt="User profile"
            className="w-12 h-12 rounded-full mr-4"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/fMTZIvGVZyTuR6MDNt08zUoE7yQqMBNWHekb1ozfZk34tAtnA.jpg"
            width="50"
          />
          <div className="flex-1">
            <textarea
              className="w-full p-2 border rounded-lg bg-white"
              placeholder="Tulis Komentar..."
              rows="4"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end mb-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
            Kirim
            <i className="fas fa-paper-plane ml-2"></i>
          </button>
        </div>
        <div className="space-y-6">
          <Comment
            name="Rizky Mahardika"
            date="24 Oktober 2024"
            text="Website ini keren banget! Akhirnya ada platform yang menghubungkan komunitas peduli lingkungan. Sangat membantu untuk menemukan proyek kolaborasi di daerahku!"
            imgSrc="https://storage.googleapis.com/a1aa/image/H2t0ZNj0rObTOFBCPU9YxHTmOTB9F0ufSfzQOJ2LSxVCXg2TA.jpg"
          />
          <Comment
            name="Melisa Amanda"
            date="23 Oktober 2024"
            text="Aku suka fitur kampanyenya. Semoga makin banyak orang sadar dan mau bergabung untuk aksi nyata!"
            imgSrc="https://storage.googleapis.com/a1aa/image/DSpvRRF9avawHt7xTlIKhQReeYZxPG5VXs8FdctoFyFftAtnA.jpg"
            extra={<span className="text-green-500">💚🌍</span>}
          />
          <Comment
            name="Nadia Febrianti"
            date="22 Oktober 2024"
            text="GreenNest bisa jadi solusi untuk edukasi ramah lingkungan. Apakah ada fitur untuk melacak dampak dari kampanye yang kita buat?"
            imgSrc="https://storage.googleapis.com/a1aa/image/O8Ex9qJMXj5eWaff3zaKprrkNKwW8DjOey940cxHyly2bBaPB.jpg"
          />
          <Comment
            name="Arif Setiawaning"
            date="21 Oktober 2024"
            text="Desainnya simpel tapi fungsional. Ini yang kita butuhkan untuk menjaga kelestarian bumi bersama-sama."
            imgSrc="https://storage.googleapis.com/a1aa/image/8GAfnD8UNIX7AKVhMABjsfmrx3NPlizJ0lIpKlvoffXDcBaPB.jpg"
            extra={<span className="text-yellow-500">👏👏</span>}
          />
        </div>
        <hr className="mt-6" />
      </div>
    </div>
  );
};

const Comment = ({ name, date, text, imgSrc, extra }) => {
  return (
    <div className="flex items-start">
      <img
        alt={`${name} profile picture`}
        className="w-12 h-12 rounded-full mr-4"
        height="50"
        src={imgSrc}
        width="50"
      />
      <div>
        <div className="flex items-center mb-1">
          <span className="font-semibold">{name}</span>
          <span className="text-sm text-gray-500 ml-2">{date}</span>
        </div>
        <p>
          {text} {extra}
        </p>
      </div>
    </div>
  );
};

export default CommentSection;
