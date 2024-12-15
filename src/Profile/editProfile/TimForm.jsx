import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TimForm = () => {
  const [anggotaData, setAnggotaData] = useState([
    {
      id: 1,
      name: "",
      role: "",
      gender: "male",
      phone: "",
      education: "",
      description: "",
      profession: "",
      profileImage: null,
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tambahAnggota = () => {
    setAnggotaData([
      ...anggotaData,
      {
        id: anggotaData.length + 1,
        name: "",
        role: "",
        gender: "",
        phone: "",
        education: "",
        description: "",
        profession: "",
        profileImage: null,
      },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedData = [...anggotaData];
    updatedData[index][field] = value;
    setAnggotaData(updatedData);
  };

  const handleFileChange = (index, file) => {
    const updatedData = [...anggotaData];
    updatedData[index].profileImage = file;
    setAnggotaData(updatedData);
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
  
    // FormData hanya kirim value-field saja
    const formData = new FormData();
    anggotaData.forEach((anggota, index) => {
      formData.append(`name`, anggota.name);
      formData.append(`team_role`, anggota.role); 
      formData.append(`gender`, anggota.gender);
      formData.append(`phone_number`, anggota.phone);
      formData.append(`education`, anggota.education);
      formData.append(`description`, anggota.description);
      formData.append(`profession`, anggota.profession);
      if (anggota.profileImage) {
        formData.append(`image`, anggota.profileImage); // "image" sesuai field di backend
      }
    });
  
    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/team_members", // API endpoint Laravel
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      toast.success("Tim berhasil ditambahkan!", { icon: "✅" });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error response:", error.response.data);
      toast.error("Terjadi kesalahan saat mengirim data.", { icon: "❌" });
    } finally {
      setIsSubmitting(false);
    }
  };  

  return (
    <div className="min-w-screen min-h-screen p-8 space-y-12 bg-white text-black">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        {anggotaData.map((anggota, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 mb-6"
          >
            <h2 className="text-lg font-medium mb-4">Anggota {index + 1}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Unggah Foto Profil
                </label>
                <input
                  type="file"
                  className="mb-4 "
                  onChange={(e) => handleFileChange(index, e.target.files[0])}
                />
                <label className="block text-gray-700 text-sm font-bold mt-6 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full border bg-white border-gray-300 rounded-lg p-2 mb-4"
                  placeholder="Nama Lengkap"
                  value={anggota.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                />
                <label className="block text-gray-700 text-sm font-bold mt-5 mb-2">
                  Profesi
                </label>
                <input
                  type="text"
                  className="w-full border bg-white border-gray-300 rounded-lg p-2"
                  placeholder="Bidang Keahlian"
                  value={anggota.profession}
                  onChange={(e) =>
                    handleInputChange(index, "profession", e.target.value)
                  }
                />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Deskripsi
                </label>
                <textarea
                  className="w-full border bg-white border-gray-300 rounded-lg p-2 mb-4 h-32"
                  placeholder="Deskripsi"
                  value={anggota.description}
                  onChange={(e) =>
                    handleInputChange(index, "description", e.target.value)
                  }
                ></textarea>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Peran Tim
                    </label>
                    <input
                      type="text"
                      className="w-full border bg-white border-gray-300 rounded-lg p-2 mb-4"
                      placeholder="Peran dalam tim"
                      value={anggota.role}
                      onChange={(e) =>
                        handleInputChange(index, "role", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Jenis Kelamin
                    </label>
                    <select
                      className="w-full border bg-white border-gray-300 rounded-lg p-2"
                      value={anggota.gender}
                      onChange={(e) =>
                        handleInputChange(index, "gender", e.target.value)
                      }
                    >
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      No HP
                    </label>
                    <input
                      type="text"
                      className="w-full border bg-white border-gray-300 rounded-lg p-2"
                      placeholder="Nomor Handphone"
                      value={anggota.phone}
                      onChange={(e) =>
                        handleInputChange(index, "phone", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Pendidikan
                    </label>
                    <input
                      type="text"
                      className="w-full border bg-white border-gray-300 rounded-lg p-2"
                      placeholder="Masukan Pendidikan"
                      value={anggota.education}
                      onChange={(e) =>
                        handleInputChange(index, "education", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          className="bg-blue-100 text-blue-700 text-center py-3 rounded-lg cursor-pointer border-2 border-blue-100 hover:border-blue-500 transition duration-200"
          onClick={tambahAnggota}
        >
          + Tambah Anggota
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
          >
            {isSubmitting ? "Mengirim..." : "Kirim Data"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TimForm;
