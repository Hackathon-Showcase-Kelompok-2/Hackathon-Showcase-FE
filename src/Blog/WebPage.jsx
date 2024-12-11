import React from "react";

function WebPage() {
  return (
    <div className="flex justify-center items-start gap-8 p-8 bg-gray-50 w-screen">
      {/* Left Section */}
      <div>
        {/* Search Bar */}
        <div className="w-[908.28px] h-[65px] mb-8">
          <input
            type="text"
            placeholder="Cari"
            className="w-full h-full border border-gray-300 rounded-md px-4 text-gray-500 placeholder-gray-500 bg-white"
          />
        </div>

        {/* Categories Section */}
        <div className="w-[908px] h-[590px] p-6 bg-white shadow-md rounded-md border border-gray-300">
          <h2 className="font-bold text-xl mb-4 text-black">Kategori</h2>
          <ul>
            {[
              { name: "Popular", count: 30 },
              { name: "Recent", count: 50 },
              { name: "Tips & Trick", count: 15 },
              { name: "Hackathon Stories", count: 20 },
              { name: "Technology Updates", count: 18 },
              { name: "Event Recaps", count: 26 },
            ].map((category, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-7 border-b border-gray-300 text-black"
              >
                <span>{category.name}</span>
                <span className="text-gray-500">{category.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[411px] h-[687px] p-6 bg-white shadow-md rounded-md border border-gray-300">
        <h2 className="font-bold text-xl mb-4 border-b border-gray-300 pb-2">Top Artikel</h2>
        <div className="space-y-6">
          {[
            {
              title: "7 Tips Menang Hackathon untuk Pemula",
              date: "Jumat, 15 November 2024",
              img: "https://via.placeholder.com/100",
            },
            {
              title: "Teknologi Terbaru di Dunia Hackathon",
              date: "Rabu, 20 November 2024",
              img: "https://via.placeholder.com/100",
            },
            {
              title: "Kolaborasi Efektif dalam Tim Hackathon",
              date: "Minggu, 10 November 2024",
              img: "https://via.placeholder.com/100",
            },
            {
              title: "Cerita Sukses: Dari Hackathon ke Startup",
              date: "Senin, 18 November 2024",
              img: "https://via.placeholder.com/100",
            },
            {
              title: "Peran UI/UX di Proyek Hackathon",
              date: "Selasa, 12 November 2024",
              img: "https://via.placeholder.com/100",
            },
          ].map((article, index) => (
            <div key={index} className="flex gap-4 items-start">
              <img
                src={article.img}
                alt="Article Thumbnail"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold text-md mb-2 text-black">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm text-black">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebPage;
