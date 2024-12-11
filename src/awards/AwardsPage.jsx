import React, { useState } from 'react';

function AwardsPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) => 
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
    );
  };

  return (
    <div className="bg-gray-50 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4">
              <i className="fas fa-filter"></i> Filter Awards
            </h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Kategori</h3>
              <div className="space-y-2">
                {/* Kategori Buttons */}
                {['AI & Machine Learning', 'Green Technology', 'Blockchain', 'Web Development'].map((category) => (
                  <button
                    key={category}
                    className={`w-full text-left py-2 px-4 rounded-lg flex items-center justify-between ${selectedCategories.includes(category) ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                    onClick={() => toggleCategory(category)}
                  >
                    <span>{category}</span>
                    {selectedCategories.includes(category) && (
                      <span className="text-blue-600">
                        <i className="fas fa-check"></i>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Tahun</h3>
              <select className="w-full bg-gray-100 text-gray-600 py-2 px-4 rounded-lg">
                <option>Semua Tahun</option>
              </select>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg">Terapkan Filter</button>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 lg:pl-6">
            <h2 className="text-2xl font-semibold mb-6">AI & Machine Learning Awards</h2>
            <div className="space-y-6">
              {/* Award Items */}
              {Array(6).fill().map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row">
                  <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-6">
                    <img alt="Award Icon" className="w-12 h-12" src="https://placehold.co/150x150" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Green Tech Challenge Juara 1</h3>
                    <p className="text-gray-600 mb-2">
                      <i className="fas fa-calendar-alt"></i> 20 Mei 2024
                    </p>
                    <p className="text-gray-800 font-semibold mb-2">InnovaTech Team</p>
                    <p className="text-gray-600 mb-4">Platform manajemen limbah berbasis AI</p>
                    <a className="text-blue-600 font-semibold" href="#">
                      <i className="fas fa-star"></i> AI & Machine Learning
                    </a>
                  </div>
                  <div className="flex-shrink-0">
                    <img alt="Award Image" className="rounded-lg" src="https://placehold.co/300x150" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardsPage;