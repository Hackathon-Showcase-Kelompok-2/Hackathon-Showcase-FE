import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ThreadPage = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchThreads = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/threads');
        setThreads(response.data.threads);
      } catch (error) {
        console.error('Error fetching threads:', error);
      }
    };

    fetchThreads();
  }, []);

  return (
    <div className="bg-gray-100 p-4 w-screen">
      <div className="max-w-full mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Thread</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 space-y-4">
            {threads.map((thread) => (
              <Link key={thread.id} to={`/thread/${thread.id}`}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative hover:shadow-md transition-shadow">
                  <div className="absolute top-2 right-2 h-1 w-16 bg-blue-500 rounded-full"></div>
                  <div className="flex items-start">
                    <img
                      alt={`Profile picture of ${thread.author.name}`}
                      className="w-12 h-12 rounded-full mr-4"
                      src={thread.author.profile_picture}
                    />
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold">{thread.title}</h2>
                      <p className="text-sm text-gray-500">
                        {thread.author.name}, dibuat{' '}
                        {new Date(thread.created_at).toLocaleDateString('id-ID')}
                      </p>
                      <p className="mt-2 text-gray-700 mb-4">{thread.content}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center text-gray-500 mt-4">
                    <i className="fas fa-comment-alt mr-2"></i>
                    {thread.comments.length}
                    <i className="fas fa-heart ml-4 mr-2"></i>
                    {thread.likes}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full text-white mr-2">
                <i className="fas fa-home"></i>
              </div>
              <h2 className="text-lg font-semibold">Top Trending Topic</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="font-semibold mr-2">#1</span>Pitch Deck Memukau
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">#2</span>Hackathon Pertama
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">#3</span>Kolaborasi Jarak Jauh
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">#4</span>Demo Proyek Cepat
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">#5</span>Tema Hackathon Populer
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">#6</span>Integrasi API
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">#7</span>Tren UI/UX
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">#8</span>Tim Hackathon Impian
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">#9</span>Framework vs Manual
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">#10</span>Tips Bertahan Hackathon
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadPage;
