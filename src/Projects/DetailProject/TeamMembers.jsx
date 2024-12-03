import React from 'react';

const TeamMembers = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-8xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Anggota Tim</h1>
        <div className="space-y-4">
          <div className="bg-blue-200 p-4 rounded-lg flex items-center">
            <img
              alt="Portrait of Sarah Johnson"
              className="w-20 h-20 rounded-full mr-4"
              src="https://storage.googleapis.com/a1aa/image/EL3fas9rMHTDTSZu2nsxPAPumnGL0VB2miMAo0i9LB60KQ7JA.jpg"
            />
            <div>
              <h2 className="text-lg font-bold text-blue-800">Sarah Johnson</h2>
              <p className="text-blue-600">UI/UX Designer</p>
            </div>
          </div>
          <div className="bg-blue-200 p-4 rounded-lg flex items-center">
            <img
              alt="Portrait of Mike Chen"
              className="w-20 h-20 rounded-full mr-4"
              src="https://storage.googleapis.com/a1aa/image/y1NZSebf5zmU1kGKNSadB1aXL5LApBCBQtmnTeEMrImbrAtnA.jpg"
            />
            <div>
              <h2 className="text-lg font-bold text-blue-800">Mike Chen</h2>
              <p className="text-blue-600">FrontEnd Developer</p>
            </div>
          </div>
          <div className="bg-blue-200 p-4 rounded-lg flex items-center">
            <img
              alt="Portrait of Dello Swli"
              className="w-20 h-20 rounded-full mr-4"
              src="https://storage.googleapis.com/a1aa/image/3JFL0UCO3Y5uHxu4bekgKkPG0hnJvP96dpCsc11o3ca1KQ7JA.jpg"
            />
            <div>
              <h2 className="text-lg font-bold text-blue-800">Dello Swli</h2>
              <p className="text-blue-600">BackEnd Developer</p>
            </div>
          </div>
          <div className="bg-blue-200 p-4 rounded-lg flex items-center">
            <img
              alt="Portrait of Anna Smith"
              className="w-20 h-20 rounded-full mr-4"
              src="https://storage.googleapis.com/a1aa/image/y2lwlgSgb15rFlMe1UIPH34SmGgA2UMSfkLfmnodE4EXrAtnA.jpg"
            />
            <div>
              <h2 className="text-lg font-bold text-blue-800">Anna Smith</h2>
              <p className="text-blue-600">Digital Marketing</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg w-full">
  Lihat Profil Tim
</button>

        </div>
      </div>
    </div>
  );
};

export default TeamMembers;