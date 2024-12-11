import React from "react";

const CardForum = () => {
  return (
    <div className="flex items-center justify-center pt-4 bg-gray-100">
      <div className="bg-black rounded-2xl p-8 flex flex-col items-center relative overflow-hidden w-full max-w-4xl">
        {/* Decorative Circles */}
        <div
          className="absolute w-4 h-4 bg-blue-500 rounded-full"
          style={{ top: "20%", left: "10%", opacity: 0.8 }}
        ></div>
        <div
          className="absolute w-8 h-8 bg-blue-500 rounded-full"
          style={{ top: "40%", left: "5%", opacity: 0.8 }}
        ></div>
        <div
          className="absolute w-12 h-12 bg-gray-200 rounded-full"
          style={{ top: "50%", left: "15%", opacity: 0.5 }}
        ></div>
        <div
          className="absolute w-4 h-4 bg-blue-300 rounded-full"
          style={{ top: "20%", right: "10%", opacity: 0.8 }}
        ></div>
        <div
          className="absolute w-8 h-8 bg-yellow-300 rounded-full"
          style={{ top: "40%", right: "15%", opacity: 0.5 }}
        ></div>
        <div
          className="absolute w-12 h-12 bg-yellow-500 rounded-full"
          style={{ top: "50%", right: "5%", opacity: 0.8 }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-blue-500 rounded-full"
          style={{ top: "10%", left: "5%", opacity: 0.8 }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-yellow-500 rounded-full"
          style={{ top: "15%", left: "7%", opacity: 0.8 }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-gray-200 rounded-full"
          style={{ top: "25%", left: "3%", opacity: 0.5 }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-blue-300 rounded-full"
          style={{ top: "10%", right: "5%", opacity: 0.8 }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-yellow-300 rounded-full"
          style={{ top: "15%", right: "7%", opacity: 0.5 }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-gray-200 rounded-full"
          style={{ top: "25%", right: "3%", opacity: 0.5 }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-blue-500 rounded-full"
          style={{ bottom: "10%", left: "5%", opacity: 0.8 }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-yellow-500 rounded-full"
          style={{ bottom: "10%", right: "5%", opacity: 0.8 }}
        ></div>

        {/* Content */}
        <h1 className="text-3xl font-bold text-center text-gray-600 z-10">
          Forum Galeri Hackathon
        </h1>
        <p className="text-center text-gray-600 mt-6 z-10 leading-relaxed">
        Berdiskusi dalam forum untuk berbagi wawasan, mencari 
          <br />
          inspirasi, dan memecahkan tantangan bersama
        </p>
      </div>
    </div>
  );
}

export default CardForum; 