import React from "react";
import { Link } from "react-router-dom";

const CardBottom = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl text-center">
        <img
          alt="Illustration of people collaborating on a project"
          className="mx-auto mb-4"
          height="200"
          src="https://storage.googleapis.com/a1aa/image/X2NTk0eQ0LTlRajnuqyOxJ4VDz9Zg4q6VMEbOAiQqRe5zz4TA.jpg"
          width="300"
        />
        <h1 className="text-blue-600 text-xl font-bold mb-2">
          Bagikan pendapat Anda di thread ini!
        </h1>
        <p className="text-gray-600 mb-6">
          Hackathon bukan hanya tentang kompetisi, tapi juga tentang kolaborasi.
          Jadilah bagian dari diskusi yang menginspirasi!
        </p>
        <Link to="/create-thread">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Buat Thread Baru
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardBottom;
