import React from 'react';

const TestimoniJuri = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Testimoni Juri</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, index) => (
          <div className="border rounded-lg p-4" key={index}>
            <div className="flex items-center mb-4">
              <img
                alt="Profile picture of Dr. Sarah Johnson"
                className="w-12 h-12 rounded-full mr-4"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/6EZ1HroB3WZyMB5sfewYf1BZXJrjVv6bI0nX4GYwXjcjMlxnA.jpg"
                width="50"
              />
              <div>
                <h2 className="text-lg font-semibold">Dr. Sarah Johnson</h2>
                <p className="text-sm text-gray-600">IoT Solutions Architect, Tech Corp</p>
              </div>
            </div>
            <a className="text-blue-600 mb-2 inline-block" href="#">
              <i className="fab fa-linkedin"></i> Profil LinkedIn
            </a>
            <p>
              Proyek ini menggunakan AI untuk membantu petani mengoptimalkan hasil panen dengan prediksi cuaca dan rekomendasi tanaman.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimoniJuri;