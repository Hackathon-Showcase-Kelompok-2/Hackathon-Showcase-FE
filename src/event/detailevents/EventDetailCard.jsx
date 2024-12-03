import React from 'react';

function EventDetailCard({ image, title, date, location, description }) {
  return (
    <div className="relative w-[1372px] h-[518px] p-[120px_171px] bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
      <div className="relative z-10 text-white">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-xl mb-4">{date} | {location}</p>
        <p className="text-lg mb-6">{description}</p>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Detail Events</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Daftar Sekarang</button>
        </div>
      </div>
    </div>
  );
}

export default EventDetailCard;
