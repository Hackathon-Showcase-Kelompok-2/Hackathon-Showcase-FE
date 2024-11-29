import React from 'react';

const CallToAction = () => {
  const handleButtonClick = () => {
    // Redirect to the project creation page
    window.location.href = '/create-project';
  };

  return (
    <section className="bg-blue-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ingin Menyelenggarakan Acara Hackathon?</h2>
        <p className="text-gray-700 mb-6">
          Promosikan acara Anda kepada komunitas inovator global melalui Galeri Hackathon.
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600">
          Unggah Proyek Anda
        </button>
        <div className="flex justify-center mt-6">
          <img src="cta-illustration.png" alt="Illustration" className="w-1/2 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
