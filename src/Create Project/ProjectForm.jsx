import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CombinedProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category_id: "",
    difficulty_id: "",
    description: "",
    content: "",
    link_code: "",
    link_demo: "",
    image: null,
    documentation: null,
    tags: ["", ""],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("Token tidak ditemukan. Silakan login kembali.", {
        icon: "❌",
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");

    if (!token) {
      toast.error("Token tidak ditemukan. Silakan login kembali.", {
        icon: "❌",
      });
      return;
    }

    const payload = new FormData();
    Object.keys(formData).forEach((key) => {
        console.log(key)
        if (key === "tag1") {
            payload.append("tags[1]", formData[key]);
        } else if (key === "tag2") {
            payload.append("tags[2]", formData[key]);
        } else if (formData[key]) {
            payload.append(key, formData[key]);
        }
    });
    console.log(payload.formData)
    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/projects",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Proyek berhasil diunggah!", { icon: "✅" });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting project:", error);
      toast.error("Pengunggahan gagal. Pastikan data Anda valid.", {
        icon: "❌",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-w-screen min-h-screen p-8 space-y-12 bg-white w-screen text-black">
      <ToastContainer /> {/* Toastify Container */}
      <form onSubmit={handleSubmit}>
        {/* Form Section */}
        <div className="flex flex-col lg:flex-row items-center border border-gray-300 rounded-lg shadow-lg">
          <div className="w-full lg:w-1/3 p-6">
            <img
              src="https://via.placeholder.com/400"
              alt="Project Illustration"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-2/3 p-6">
            <h1 className="text-2xl font-semibold mb-6">Formulir Proyek</h1>
            <div className="space-y-6">
              <div>
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="title"
                >
                  Nama Proyek
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg p-4 bg-white"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Nama Proyek*"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="category_id"
                >
                  Kategori Proyek
                </label>
                <select
                  className="w-full bg-white border border-gray-300 rounded-lg p-4"
                  id="category_id"
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleInputChange}
                >
                  <option value="">Pilih Kategori*</option>
                  <option value="1">AI</option>
                  <option value="2">IoT</option>
                  <option value="3">Mobile Apps</option>
                  <option value="4">Web Development</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="difficulty_id"
                >
                  Tingkat Kesulitan
                </label>
                <select
                  className="w-full bg-white border border-gray-300 rounded-lg p-4"
                  id="difficulty_id"
                  name="difficulty_id"
                  value={formData.difficulty_id}
                  onChange={handleInputChange}
                >
                  <option value="">Pilih Tingkat*</option>
                  <option value="1">Pemula</option>
                  <option value="2">Menengah</option>
                  <option value="3">Lanjut</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="tag1"
                >
                  Tag 1
                </label>
                <select
                  className="w-full bg-white border border-gray-300 rounded-lg p-4"
                  id="tag1"
                  name="tag1"
                  value={formData.tag1 || ""}
                  onChange={handleInputChange}
                >
                  <option value="">Pilih Tag 1*</option>
                  <option value="1">Python</option>
                  <option value="2">React</option>
                  <option value="3">IoT</option>
                  <option value="4">TensorFlow</option>
                </select>
              </div>
              {/* <div>
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="tag2"
                >
                  Tag 2
                </label>
                <select
                  className="w-full bg-white border border-gray-300 rounded-lg p-4"
                  id="tag2"
                  name="tag2"
                  value={formData.tag2 || ""}
                  onChange={handleInputChange}
                >
                  <option value="">Pilih Tag 2*</option>
                  <option value="1">Python</option>
                  <option value="2">React</option>
                  <option value="3">IoT</option>
                  <option value="4">TensorFlow</option>
                </select>
              </div> */}
              <div>
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="description"
                >
                  Tujuan Proyek
                </label>
                <textarea
                  className="w-full bg-white border border-gray-300 rounded-lg p-4"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Visi & misi proyek anda*"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        {/* Upload Section */}
        <div className="border border-gray-300 rounded-lg shadow-lg p-8 mt-8">
          <h1 className="text-2xl font-semibold mb-6">Upload Proyek</h1>
          <div className="space-y-6">
            <div className="flex items-center justify-center h-40 border-2 border-dashed border-gray-300 rounded-lg">
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="absolute opacity-0 w-fit h-fit cursor-pointer"
              />
              <i className="fas fa-upload text-gray-400 text-3xl"></i>
              <span className="ml-2 text-gray-400">
                Upload Image Thumbnail*
              </span>
            </div>
            <div>
              <label className="block mb-2">Link Repo</label>
              <input
                type="text"
                name="link_code"
                value={formData.link_code}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-300 rounded-lg p-4"
                placeholder="Link Repo*"
              />
            </div>
            <div>
              <label className="block mb-2">Video Demo</label>
              <input
                type="text"
                name="link_demo"
                value={formData.link_demo}
                onChange={handleInputChange}
                className="w-full bg-white border border-gray-300 rounded-lg p-4"
                placeholder="Tampilkan link video demo anda*"
              />
            </div>
            <div>
              <label className="block mb-2">Dokumen tambahan</label>
              <input
                type="file"
                name="documentation"
                onChange={handleFileChange}
                className="w-full border border-gray-300 rounded-lg p-4"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="py-4 px-12 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Mengunggah..." : "Kirim Proyek"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CombinedProjectForm;

