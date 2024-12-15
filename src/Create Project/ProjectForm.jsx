import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CombinedProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category_id: "",
    difficulty_id: "",
    objective: "", // Ganti 'description' menjadi 'objective'
    content: "",   // Menambahkan field content
    link_code: "",
    link_demo: "",
    image: null,
    documentation: null,
  });

  const [categories, setCategories] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch categories and difficulties from API
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        toast.error("Token tidak ditemukan. Silakan login kembali.", {
          icon: "❌",
        });
        return;
      }

      try {
        const headers = {
          'Authorization': `Bearer ${token}`,
        };

        // Fetch categories and difficulties concurrently
        const [categoriesRes, difficultiesRes] = await Promise.all([
          axios.get("http://127.0.0.1:8000/api/categories", { headers }),
          axios.get("http://127.0.0.1:8000/api/difficulties", { headers }),
        ]);

        // Assuming the API returns the data as a direct array or object with a 'data' property
        setCategories(categoriesRes.data?.data || categoriesRes.data || []);
        setDifficulties(difficultiesRes.data?.data || difficultiesRes.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Gagal mengambil data kategori atau kesulitan.", {
          icon: "❌",
        });
      }
    };

    fetchData();
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
      if (formData[key]) {
        payload.append(key, formData[key]);
      }
    });

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
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))
                  ) : (
                    <option value="">Tidak ada kategori</option>
                  )}
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
                  {difficulties.length > 0 ? (
                    difficulties.map((difficulty) => (
                      <option key={difficulty.id} value={difficulty.id}>
                        {difficulty.name}
                      </option>
                    ))
                  ) : (
                    <option value="">Tidak ada tingkat kesulitan</option>
                  )}
                </select>
              </div>
              <div>
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="objective"
                >
                  Tujuan Proyek
                </label>
                <textarea
                  className="w-full bg-white border border-gray-300 rounded-lg p-4"
                  id="objective"
                  name="objective" // Ganti 'description' menjadi 'objective'
                  value={formData.objective}
                  onChange={handleInputChange}
                  placeholder="Visi & misi proyek anda*"
                ></textarea>
              </div>
              {/* Konten Proyek */}
              <div>
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="content"
                >
                  Konten Proyek
                </label>
                <textarea
                  className="w-full bg-white border border-gray-300 rounded-lg p-4"
                  id="content"
                  name="content" // Menambahkan input untuk 'content'
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Deskripsi proyek anda*"
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
              <label className="block mb-2">Documentation</label>
              <input
                type="file"
                name="documentation"
                onChange={handleFileChange}
                className="w-full bg-white border border-gray-300 rounded-lg p-4"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
          >
            {isSubmitting ? "Mengirim..." : "Kirim Proyek"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CombinedProjectForm;