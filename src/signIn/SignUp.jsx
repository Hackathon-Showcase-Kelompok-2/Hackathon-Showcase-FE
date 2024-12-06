import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePassword = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    // Validasi form
    let validationErrors = {};
    if (!formData.username) validationErrors.username = "Username tidak boleh kosong.";
    if (!formData.email) validationErrors.email = "Email tidak boleh kosong.";
    if (!formData.password) validationErrors.password = "Password tidak boleh kosong.";
    if (formData.password !== formData.confirm_password) {
      validationErrors.confirm_password = "Password dan konfirmasi password harus sama.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Kirim data ke API
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: formData.username,
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirm_password,
      });

      // Jika berhasil, tampilkan pesan
      alert("Registrasi berhasil!");
      console.log("Response API:", response.data);

      // Reset form
      setFormData({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    } catch (error) {
      // Tangani error dari API
      if (error.response && error.response.data) {
        const apiErrors = error.response.data.errors || {};
        setErrors(apiErrors);
        alert("Registrasi gagal. Periksa kembali data Anda.");
      } else {
        console.error("Error:", error);
        alert("Terjadi kesalahan. Silakan coba lagi.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen w-screen">
      <div className="flex w-full h-full">
        {/* Left Section: Sign In Form */}
        <div className="w-1/2 flex flex-col justify-center p-8 bg-white">
          <h2 className="text-2xl font-bold mb-2 text-center">Sign Up</h2>
          <p className="text-gray-600 mb-6 text-center">Silakan masukkan username, email, dan password Anda</p>
          <form id="signin-form" className="space-y-4" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                Username
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-400"></i>
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                  required
                />
              </div>
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-gray-400"></i>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                  required
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                  required
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="confirm_password">
                Confirm Password
              </label>
              <input
                id="confirm_password"
                name="confirm_password"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                required
              />
              {errors.confirm_password && <p className="text-red-500 text-sm mt-1">{errors.confirm_password}</p>}
            </div>

            {/* Submit Button */}
            <button
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </button>
          </form>
        </div>

        {/* Right Section: Image */}
        <div className="w-1/2 relative">
          <img
            alt="Illustration"
            className="absolute inset-0 w-full h-full object-cover"
            src="../public/img/Sign Up.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
