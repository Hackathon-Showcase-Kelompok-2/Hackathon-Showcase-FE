import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Inisialisasi useNavigate

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Gunakan endpoint dan header authorization untuk mendapatkan data user
      axios
        .get("http://127.0.0.1:8000/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setIsLoggedIn(true);
          setUser(response.data); // Set data user dari respons API
        })
        .catch(() => {
          setIsLoggedIn(false);
          setUser(null);
        });
    }
  }, []);

  const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setUser(null);

    // Navigasi ke halaman Home
    navigate("/");

    // Reload halaman
    setTimeout(() => {
      window.location.reload();
    }, 100); // Tambahkan sedikit delay untuk memastikan navigasi selesai
  };

  return (
    <>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="../../public/img/logo.png"
            alt="Galeri Hackathon Logo"
            className="h-10 mr-2"
          />
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          {!isLoggedIn ? (
            // Links untuk Guest
            <>
              <Link to="/" className="text-gray-800 hover:text-blue-500 font-semibold">
                Home
              </Link>
              <Link to="/projects" className="text-gray-800 hover:text-blue-500 font-semibold">
                Projects
              </Link>
              <Link to="/events" className="text-gray-800 hover:text-blue-500 font-semibold">
                Events
              </Link>
              <Link to="/award" className="text-gray-800 hover:text-blue-500 font-semibold">
                Awards
              </Link>
              <Link to="/blog" className="text-gray-800 hover:text-blue-500 font-semibold">
                Blog
              </Link>
              <Link to="/forum" className="text-gray-800 hover:text-blue-500 font-semibold">
                Forum
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-blue-500 font-semibold">
                Contact
              </Link>
            </>
          ) : (
            // Links untuk User
            <>
              <Link to="/dashboard/:id" className="text-gray-800 hover:text-blue-500 font-semibold">
                Dashboard
              </Link>
              <Link to="/projects" className="text-gray-800 hover:text-blue-500 font-semibold">
                Projects
              </Link>
              <Link to="/create-project" className="text-gray-800 hover:text-blue-500 font-semibold">
                Create Project
              </Link>
              <Link to="/events" className="text-gray-800 hover:text-blue-500 font-semibold">
                Events
              </Link>
              <Link to="/award" className="text-gray-800 hover:text-blue-500 font-semibold">
                Awards
              </Link>
              <Link to="/blog" className="text-gray-800 hover:text-blue-500 font-semibold">
                Blog
              </Link>
              <Link to="/forum" className="text-gray-800 hover:text-blue-500 font-semibold">
                Forum
              </Link>
            </>
          )}
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          {!isLoggedIn ? (
            // Tombol untuk Guest
            <>
              <Link to="/signin" className="text-gray-800 hover:text-blue-500 font-semibold">
                <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                  SignIn
                </button>
              </Link>
              <Link to="/signup" className="text-gray-800 hover:text-blue-500 font-semibold">
                <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                  SignUp
                </button>
              </Link>
            </>
          ) : (
            // Profil User + Logout Button
            <div className="flex items-center space-x-4">
              <Link
                to={`/profile/${user?.id}`} // Tambahkan tautan ke profil pengguna berdasarkan ID
                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 w-[185px] h-[46px] hover:bg-blue-600 transition"
              >
                <img
                  src={`http://127.0.0.1:8000/storage/${user?.img_profile || "default.jpg"}`}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-semibold truncate">{user?.name || "User"}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Padding untuk menghindari overlap dengan konten */}
      <div className="pt-20 bg-white"></div>
    </>
  );
};

export default Navbar;
