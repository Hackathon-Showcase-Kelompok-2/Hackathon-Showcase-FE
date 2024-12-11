import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration() {
  const { id } = useParams(); // ID event dari URL
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    no_wa: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch user data untuk memastikan pengguna login
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("Token tidak ditemukan. Silakan login kembali.", { icon: "❌" });
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("Token tidak ditemukan. Silakan login kembali.", { icon: "❌" });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await axios.post(
        `http://127.0.0.1:8000/api/events/${id}/register`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Pendaftaran berhasil!", { icon: "✅" });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Pendaftaran gagal. Pastikan data Anda valid.", { icon: "❌" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className="flex justify-center items-start gap-8 p-8 bg-gray-50">
        {/* Left Section */}
        <div className="flex flex-col w-[736px]">
          <h1 className="text-2xl font-semibold mb-6 text-black">
            Detail Pendaftaran Event
          </h1>

          {/* Form Fields */}
          <div className="flex gap-12 mb-6">
            <div className="flex flex-col w-[344px]">
              <input
                id="first_name"
                type="text"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleInputChange}
                className="h-[70px] w-full border border-gray-300 rounded-md px-4 text-gray-500 placeholder-gray-500 bg-white"
              />
            </div>
            <div className="flex flex-col w-[344px]">
              <input
                id="last_name"
                type="text"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleInputChange}
                className="h-[70px] w-full border border-gray-300 rounded-md px-4 text-gray-500 placeholder-gray-500 bg-white"
              />
            </div>
          </div>

          <div className="mb-6">
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="h-[70px] w-full border border-gray-300 rounded-md px-4 text-gray-500 placeholder-gray-500 bg-white"
            />
          </div>

          <div className="mb-6">
            <input
              id="no_wa"
              type="text"
              placeholder="No WhatsApp"
              value={formData.no_wa}
              onChange={handleInputChange}
              className="h-[70px] w-full border border-gray-300 rounded-md px-4 text-gray-500 placeholder-gray-500 bg-white"
            />
          </div>

          <div className="flex justify-center mt-4">
            <img
              src="../../../public/img/pana.png"
              alt="Illustration"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[560px] h-[400px] p-6 bg-white shadow-md rounded-md text-black">
          <h2 className="text-lg font-semibold mb-4">Total Pembayaran</h2>
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between mb-2">
              <span>Tiket x 1</span>
              <span>Rp. 150.000</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rp. 150.000</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>Rp. 150.000</span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className={`w-[442px] h-[57px] ${
              isSubmitting ? "bg-gray-400" : "bg-blue-500"
            } text-white font-medium rounded-md`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Memproses..." : "Daftar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
