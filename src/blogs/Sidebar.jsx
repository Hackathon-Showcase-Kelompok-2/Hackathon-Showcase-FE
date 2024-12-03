import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4 p-4">
      <div className="mb-6">
        <input type="text" placeholder="Search..." className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Kategori</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Popular</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Recent</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Tips & Tricks</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Hackathon Stories</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Technology Updates</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Event Recaps</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Top Artikel</h3>
        <ul className="space-y-4">
          <li className="flex items-center">
            <img src="top-article-1.jpg" alt="Top Article 1" className="w-12 h-12 rounded mr-3" />
            <a href="#" className="text-gray-700 hover:text-blue-500">Top Article 1</a>
          </li>
          <li className="flex items-center">
            <img src="top-article-2.jpg" alt="Top Article 2" className="w-12 h-12 rounded mr-3" />
            <a href="#" className="text-gray-700 hover:text-blue-500">Top Article 2</a>
          </li>
          <li className="flex items-center">
            <img src="top-article-3.jpg" alt="Top Article 3" className="w-12 h-12 rounded mr-3" />
            <a href="#" className="text-gray-700 hover:text-blue-500">Top Article 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
