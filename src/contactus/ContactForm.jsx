import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    noTelp: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form Data:", formData);
  };

  return (
    <div className="">
      <div className="flex items-center justify-center px-10 bg-gray-100 shadow-lg  h-[750px]">
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-black">Jangkau Kami</h2>
          <p className="mb-4 text-lg text-black">
            Tidak ada ide yang terlalu kecil untuk menjadi besar. Jangkau kami
            hari ini dan buktikan kemampuan Anda di hackathon penuh kolaborasi
            dan inovasi yang mendobrak batasan.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block bg-white text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                No_Telp *
              </label>
              <input
                type="text"
                name="noTelp"
                value={formData.noTelp}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pesan
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
            >
              Kirim
            </button>
          </form>
          <div className="flex">
            <div className="">
              <p className="ext-sm font-medium text-gray-700 mt-4 ">No_Telp</p>
              <p className="text-lg text-gray-900">+62 4764 7643 8521</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mt-4 px-5">
                Alamat
              </p>
              <p className="text-lg text-gray-900 px-5">Jakarta</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mt-4 px-5">
                Email
              </p>
              <p className="text-lg text-gray-900 px-5">galeri@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src="../../public/img/contactform.png"
            alt="Contact Illustration"
            className="w-80 h-80"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
