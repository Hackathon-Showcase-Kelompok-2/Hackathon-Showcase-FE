import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const { event_id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [noWa, setNoWa] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    ticketPrice: 0,
    total: 0,
  });
  const [eventName, setEventName] = useState(""); // Menyimpan nama event

  // Mengambil data event menggunakan event_id
  useEffect(() => {
    if (event_id) {
      axios
        .get(`http://127.0.0.1:8000/api/events/${event_id}`)
        .then((response) => {
          console.log("Response dari API:", response.data);

          // Mengakses data.event dari response
          const event = response.data.data;

          // Pastikan ada field price di dalam event
          if (event && event.price) {
            const ticketPrice = parseCurrency(event.price);
            console.log("Harga tiket setelah parsing:", ticketPrice);

            setEventName(event.name); // Menyimpan nama event
            setPaymentDetails({
              ticketPrice: ticketPrice,
              total: ticketPrice, // Total sama dengan harga tiket
            });
          } else {
            toast.error("Harga tiket tidak ditemukan.", { icon: "❌" });
          }
        })
        .catch((error) => {
          console.error("Error fetching event:", error.response?.data || error.message);
          toast.error("Gagal mengambil data event.", { icon: "❌" });
        });
    } else {
      toast.error("Event ID tidak ditemukan di URL.", { icon: "❌" });
    }
  }, [event_id]);

  // Fungsi untuk memparsing harga tiket
  const parseCurrency = (currency) => {
    if (!currency) return 0;

    // Menghapus simbol 'Rp' dan mengganti titik dengan kosong, serta mengganti koma dengan titik untuk format desimal
    const parsed = currency.replace(/[^\d,-]/g, "").replace(".", "").replace(",", ".");
    return parseFloat(parsed) || 0;  // Mengubah menjadi float dan menghindari nilai NaN
  };

  // Meng-handle submit form pendaftaran
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input pengguna
    if (!firstName || !lastName || !email || !noWa) {
      toast.error("Semua kolom wajib diisi.", { icon: "❌" });
      return;
    }

    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("Token tidak ditemukan. Silakan login kembali.", { icon: "❌" });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/events/${event_id}/register`, // Menggunakan URL pendaftaran event
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          no_wa: noWa,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const { registration, total } = response.data;

      // Menambahkan nama event ke dalam pesan
      const message = `Halo, saya ingin mendaftar untuk acara ini: ${eventName}\nNama: ${registration.first_name} ${registration.last_name}\nEmail: ${registration.email}\nTotal: Rp ${total.toLocaleString()}`;
      const whatsappUrl = `https://wa.me/6289684982580?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");

      // Menggunakan toast untuk menampilkan success message
      toast.success("Pendaftaran berhasil! Anda akan diarahkan ke WhatsApp.", { icon: "✅" });
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Terjadi kesalahan saat mendaftar.",
        { icon: "❌" }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex justify-center items-start gap-8 p-8 bg-gray-50">
        <div className="flex flex-col w-[736px]">
          <h1 className="text-2xl font-semibold mb-6 text-black">Detail Pendaftaran Event</h1>

          <div className="flex gap-12 mb-6">
            <input
              type="text"
              placeholder="Nama Depan"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="h-[70px] w-[344px] border border-gray-300 rounded-md px-4"
              required
            />
            <input
              type="text"
              placeholder="Nama Belakang"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="h-[70px] w-[344px] border border-gray-300 rounded-md px-4"
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[70px] w-full border border-gray-300 rounded-md px-4 mb-6"
            required
          />

          <input
            type="text"
            placeholder="Nomor WhatsApp"
            value={noWa}
            onChange={(e) => setNoWa(e.target.value.replace(/\D/g, ""))}
            className="h-[70px] w-full border border-gray-300 rounded-md px-4 mb-6"
            required
          />
        </div>

        <div className="w-[560px] p-6 bg-white shadow-md rounded-md text-black">
          <h2 className="text-lg font-semibold mb-4">Total Pembayaran</h2>
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between mb-2">
              <span>Tiket</span>
              <span>Rp. {paymentDetails.ticketPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>Rp. {paymentDetails.total.toLocaleString()}</span>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className={`w-[442px] h-[57px] ${isSubmitting ? "bg-gray-400" : "bg-blue-500"} text-white font-medium rounded-md`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Memproses..." : "Daftar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
