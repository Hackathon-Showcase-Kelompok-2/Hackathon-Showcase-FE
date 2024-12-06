import React from "react";

const WebPage = () => {
  return (
    <div className="bg-gray-50 p-4 min-h-screen w-full">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="mb-6 bg-white">
          <input
            type="text"
            placeholder="Cari"
            className="w-full p-3 border bg-white border-gray-300 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Categories Section */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Kategori</h2>
            <ul>
              {[
                { name: "Popular", count: 30, color: "text-blue-600" },
                { name: "Recent", count: 50, color: "text-gray-800" },
                { name: "Tips & Trick", count: 15, color: "text-gray-800" },
                { name: "Hackathon Stories", count: 20, color: "text-gray-800" },
                { name: "Technology Updates", count: 18, color: "text-gray-800" },
                { name: "Event Recaps", count: 26, color: "text-gray-800" },
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <li className="flex justify-between items-center py-2">
                    <a className={item.color} href="#">
                      {item.name}
                    </a>
                    <span className={item.color}>{item.count}</span>
                  </li>
                  <hr />
                </React.Fragment>
              ))}
            </ul>
          </div>

          {/* Top Articles Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Top Artikel</h2>
            <ul>
              {[
                {
                  title: "7 Tips Menang Hackathon untuk Pemula",
                  date: "Jumat, 15 November 2024",
                  img: "https://storage.googleapis.com/a1aa/image/hktXeCke74lQikhuUU3ZYxfBtaqbMvdvf3x1toIF4iKodEaPB.jpg",
                },
                {
                  title: "Teknologi Terbaru di Dunia Hackathon",
                  date: "Rabu, 20 November 2024",
                  img: "https://storage.googleapis.com/a1aa/image/ojRFI1mNeE1NDqm44Fa3GgzO2oL3zOzkafQHl12bFM7bHh2TA.jpg",
                },
                {
                  title: "Kolaborasi Efektif dalam Tim Hackathon",
                  date: "Minggu, 10 November 2024",
                  img: "https://storage.googleapis.com/a1aa/image/ZwqAkD18fl2fvE518tTFIrhRZNbzwKeHzZo26Cfqq0tjdEaPB.jpg",
                },
                {
                  title: "Cerita Sukses: Dari Hackathon ke Startup",
                  date: "Senin, 18 November 2024",
                  img: "https://storage.googleapis.com/a1aa/image/PFIxENIPTXYiC937x4GHaej4iHznsGktN2GEvUQzsoNrjQ7JA.jpg",
                },
                {
                  title: "Peran UI/UX di Proyek Hackathon",
                  date: "Selasa, 12 November 2024",
                  img: "https://storage.googleapis.com/a1aa/image/zIJ9b1i95JomEhcx6sKPZRZFzeZ1185ShPdbpiOE53krjQ7JA.jpg",
                },
              ].map((article, index) => (
                <li key={index} className="flex mb-4">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-16 h-16 rounded-lg mr-4"
                  />
                  <div>
                    <a className="text-gray-800 font-semibold" href="#">
                      {article.title}
                    </a>
                    <div className="text-gray-500 text-sm">
                      <i className="far fa-calendar-alt mr-1" />
                      {article.date}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebPage;