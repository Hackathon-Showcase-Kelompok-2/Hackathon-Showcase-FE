import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!e.target.email.validity.valid) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (password === "") {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    if (valid) {
      setIsLoading(true);
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/login", {
          email,
          password,
        });

        // Handle successful login
        alert("Login successful!");
        console.log("Response:", response.data);
        // Simpan token atau data login lainnya jika diperlukan
        setApiError(""); // Reset API error jika ada
      } catch (error) {
        // Handle login error
        setApiError(
          error.response?.data?.message || "Login failed. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen w-screen">
      <div className="flex w-full h-full">
        {/* Left Section: Sign In Form */}
        <div className="w-1/2 flex flex-col justify-center p-8 bg-white">
          <h2 className="text-2xl font-bold mb-2 text-center">Sign In</h2>
          <p className="text-gray-600 mb-6 text-center">
            Silakan masukkan email dan password Anda
          </p>
          <form id="signin-form" className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
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
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                  required
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-sm mt-1">Email tidak valid.</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  id="password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                  required
                />
                <button
                  type="button"
                  id="toggle-password"
                  onClick={togglePassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none bg-white"
                >
                  <i
                    className={
                      passwordVisible ? "fas fa-eye-slash" : "fas fa-eye"
                    }
                  ></i>
                </button>
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">
                  Password tidak boleh kosong.
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {apiError && (
            <p className="text-red-500 text-sm mt-4 text-center">{apiError}</p>
          )}

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500"> Or </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button
            className="w-full py-2 px-4 border border-gray-300 text-gray-700 font-semibold rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center bg-white"
          >
            <img
              alt="Google logo"
              className="mr-2"
              height="20"
              src="https://w7.pngwing.com/pngs/882/225/png-transparent-google-logo-google-logo-google-search-icon-google-text-logo-business-thumbnail.png"
              width={20}
            />
            Sign in with Google
          </button>

          <p className="mt-4 text-center text-gray-600">
            Don’t have an account?{" "}
            <a className="text-blue-600" href="#">
              Sign Up for free
            </a>
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="w-1/2 relative">
          <img
            alt="Illustration of people working together in an office setting"
            className="absolute inset-0 w-full h-full object-cover"
            src="../../public/img/Sign Up.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
