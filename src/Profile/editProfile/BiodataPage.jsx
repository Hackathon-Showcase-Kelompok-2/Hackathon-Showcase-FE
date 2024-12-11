import React, { useState } from 'react';

function BiodataPage() {
  const [socialMediaFields, setSocialMediaFields] = useState([]);

  const addSocialMediaField = () => {
    setSocialMediaFields([...socialMediaFields, '']);
  };

  const removeField = (index) => {
    const updatedFields = socialMediaFields.filter((_, i) => i !== index);
    setSocialMediaFields(updatedFields);
  };

  const handleInputChange = (event, index) => {
    const updatedFields = [...socialMediaFields];
    updatedFields[index] = event.target.value;
    setSocialMediaFields(updatedFields);
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full text-black max-w-4xl">
        <h2 className="text-center text-xl font-semibold mb-4">Biodata Tim</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="team-name">
              Nama Lengkap Tim
            </label>
            <input
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded-lg"
              id="team-name"
              placeholder="Nama Lengkap/Team"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="tagline">
              Tagline
            </label>
            <input
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg"
              id="tagline"
              placeholder="Tagline Tim*"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="about-team">
              Tentang Tim
            </label>
            <textarea
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg"
              id="about-team"
              placeholder="Deskripsikan Tim Kamu*"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="social-media">
              Sosial Media
            </label>
            <div id="social-media-container">
              <div className="flex items-center mb-2">
                <input
                  className="w-full px-3 bg-white py-2 border border-gray-300 rounded-lg"
                  placeholder="Masukan Link Sosial Media"
                  type="text"
                  disabled
                />
                <button
                  className="flex items-center text-blue-500 text-lg hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300 focus:ring-opacity-50"
                  type="button"
                  onClick={addSocialMediaField}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>

              {socialMediaFields.map((field, index) => (
                <div key={index} className="flex items-center mb-2">
                  <div className="flex items-center border border-gray-300 rounded-lg w-full px-3 py-2">
                    <i className="fas fa-link text-gray-500 mr-2 "></i>
                    <input
                      className="flex-grow outline-none bg-white"
                      placeholder="Masukan Link Sosial Media"
                      type="text"
                      value={field}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </div>
                  <button
                    className="ml-2 text-gray-500 text-lg bg-gray-300"
                    type="button"
                    onClick={() => removeField(index)}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BiodataPage;
