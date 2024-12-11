import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    // Validasi input
    const validationErrors = {};
    if (!formData.username)
      validationErrors.username = "Username tidak boleh kosong.";
    if (!formData.email) validationErrors.email = "Email tidak boleh kosong.";
    if (!formData.password)
      validationErrors.password = "Password tidak boleh kosong.";
    if (formData.password !== formData.confirm_password) {
      validationErrors.confirm_password =
        "Password dan konfirmasi password harus sama.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Kirim data ke API
    try {
      await axios.post("http://127.0.0.1:8000/api/register", {
        name: formData.username,
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirm_password,
      });

      // Tampilkan notifikasi sukses menggunakan React-Toastify
      toast.success("Register Success! Redirecting to Sign In...", {
        position: "top-right",
        autoClose: 3000, // Otomatis hilang dalam 3 detik
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        icon: "✔️",
      });

      // Reset form
      setFormData({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      });

      // Arahkan ke halaman Sign In setelah 2 detik
      setTimeout(() => {
        window.location.href = "/signin";
      }, 2000);
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || {});
      } else {
        toast.error("Terjadi kesalahan. Silakan coba lagi.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen w-screen">
      {/* Tambahkan ToastContainer */}
      <ToastContainer />

      {/* Bagian Kiri - Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-12">
        <h1 className="text-3xl font-bold mb-4 text-center text-black">
          Sign Up
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Silakan masukkan informasi Anda untuk membuat akun
        </p>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full h-[51px] px-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              required
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full h-[51px] px-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full h-[51px] px-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label
              htmlFor="confirm_password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              onChange={handleInputChange}
              className="w-full h-[51px] px-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              required
            />
            {errors.confirm_password && (
              <p className="text-red-500 text-sm">{errors.confirm_password}</p>
            )}
          </div>

          {/* Tombol Sign Up */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-[51px] bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isSubmitting ? "Processing..." : "Sign Up"}
          </button>
        </form>

        {/* Link Sign In */}
        <p className="text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>

      {/* Bagian Kanan - Gambar */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('../../public/img/login.png')" }}
      >
        {/* Tambahkan gambar di folder public */}
      </div>
    </div>
  );
};

export default SignUp;
