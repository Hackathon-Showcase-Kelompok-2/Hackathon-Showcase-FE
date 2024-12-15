import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Cek URL untuk parameter "user" setelah login Google
    const params = new URLSearchParams(window.location.search);
    const userData = params.get("user");

    if (userData) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(userData));
        localStorage.setItem("googleData", JSON.stringify(parsedData));
        setUserInfo(parsedData);

        // Hapus query parameter dari URL
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      } catch (error) {
        console.error("Error parsing user info:", error);
      }
    } else {
      // Ambil data dari localStorage jika sudah ada
      const savedData = localStorage.getItem("googleData");
      if (savedData) {
        setUserInfo(JSON.parse(savedData));
      }
    }
  }, []);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    let valid = true;

    const email = e.target.email?.value.trim();
    const password = e.target.password?.value.trim();

    if (!e.target.email.validity.valid) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    if (valid || userInfo) {
      setIsLoading(true);
      try {
        let token;

        if (userInfo) {
          // Gunakan token dari Google OAuth jika tersedia
          token = userInfo.token;
        } else {
          // Login biasa dengan email dan password
          const loginResponse = await axios.post("http://127.0.0.1:8000/api/login", {
            email,
            password,
          });
          token = loginResponse.data.token;
        }

        // Simpan token ke localStorage
        localStorage.setItem("authToken", token);

        // Ambil data user menggunakan token
        const userResponse = await axios.get("http://127.0.0.1:8000/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userId = userResponse.data.id;

        toast.success("Login Successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          icon: "✔️",
        });

        setTimeout(() => {
          navigate(`/dashboard`);
          window.location.reload();
        }, 3000);
      } catch (error) {
        setApiError(
          error.response?.data?.message || "Login failed. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-wrap min-h-screen w-screen">
      <ToastContainer />

      {/* Bagian Kiri - Form */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-6 md:px-12">
        <h1 className="text-3xl font-bold mb-4 text-center text-black">Sign In</h1>
        <p className="text-gray-500 text-center mb-8">Silakan masukkan email dan password Anda</p>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          {!userInfo && (
            <>
              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`w-full h-[51px] pl-3 pr-3 text-black border ${
                      emailError ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                    required
                  />
                </div>
                {emailError && <p className="text-red-500 text-sm mt-1">Email tidak valid.</p>}
              </div>

              {/* Password */}
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className={`w-full h-[51px] pl-3 pr-10 text-black border ${
                      passwordError ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 bg-white"
                  >
                    <i className={passwordVisible ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                  </button>
                </div>
                {passwordError && <p className="text-red-500 text-sm mt-1">Password tidak boleh kosong.</p>}
              </div>
            </>
          )}

          {/* Tombol Sign In */}
          <button
            type="submit"
            className="w-full h-[51px] bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Tombol Login dengan Google */}
          <Link to={`https://go-oauth.vercel.app/auth/?url=http://localhost:5173/`}>
            <button
              type="button"
              className="w-full h-[51px] border border-gray-300 text-gray-700 bg-white font-semibold rounded-md flex items-center justify-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="Google Logo"
                className="h-6 w-6 mr-2"
              />
              Login With Google
            </button>
          </Link>
        </form>

        {userInfo && (
          <div className="mt-6 text-center">
            <p className="text-gray-500">Welcome back, {userInfo.name}!</p>
            <img
              src={userInfo.picture}
              alt="Profile"
              className="mx-auto mt-2 rounded-full w-20 h-20"
            />
          </div>
        )}

        <p className="text-gray-500 mt-6">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up for free
          </a>
        </p>
      </div>

      {/* Bagian Kanan - Gambar */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/login.png')" }}
      ></div>
    </div>
  );
};

export default SignIn;
