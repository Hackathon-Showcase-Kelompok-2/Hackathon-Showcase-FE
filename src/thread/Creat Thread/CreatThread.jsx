import React from 'react';

const CreatThread = () => {
  return (
    <div className="bg-gray-100 p-4 w-screen ">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Buat Thread</h1>
          <div className="ml-2 border-t-4 border-blue-500 w-1/4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border border-gray-300 p-6 rounded-lg bg-white shadow-md">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700" htmlFor="judul-thread">
                Judul Thread
              </label>
              <input
                className="mt-1 block bg-white w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                id="judul-thread"
                placeholder="Tulis Judul Thread"
                type="text"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700" htmlFor="deskripsi-thread">
                Deskripsi Thread
              </label>
              <textarea
                className="mt-1 bg-white block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                id="deskripsi-thread"
                placeholder="Tulis Deskripsi Thread"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700" htmlFor="thumbnail-thread">
                Thumbnail Thread
              </label>
              <div className="mt-1 flex items-center">
                <input className="hidden" id="thumbnail-thread" type="file" />
                <label
                  className="cursor-pointer flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-md p-4 text-gray-500"
                  htmlFor="thumbnail-thread"
                >
                  <i className="fas fa-upload mr-2"></i> Upload Thumbnail Thread
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label className="inline-flex items-center">
                <input className="form-checkbox text-blue-600" type="checkbox" />
                <span className="ml-2 text-sm text-gray-700">
                  Saya menyetujui bahwa thread yang saya bagikan tidak melanggar peraturan komunitas
                </span>
              </label>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
              Kirim Thread
            </button>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Tip Menulis Thread</h2>
              <div className="ml-2 border-t-4 border-yellow-400 w-1/4"></div>
            </div>
            <div className="text-sm text-gray-700">
              <h3 className="font-semibold">Pengumuman Umum</h3>
              <p>
                Pikirkan terlebih dahulu bagaimana hal ini bermanfaat bagi komunitas. Tulis dengan fokus pada
                dampak positif.
              </p>
              <p>
                Jangan lupa menyebutkan siapa saja yang mungkin bisa berkontribusi, serta bagaimana mereka bisa
                membantu berpartisipasi.
              </p>
              <h3 className="font-semibold mt-4">Sumber Daya</h3>
              <p>
                Hindari hanya menampilkan kumpulan tautan. Sertakan rangkuman singkat yang menjelaskan konten.
              </p>
              <p>
                Tautkan relevansi dengan topik atau kebutuhan audiens untuk meningkatkan nilai sumber daya yang
                dibagikan.
              </p>
              <h3 className="font-semibold mt-4">Menulis Deskripsi</h3>
              <p>Berikan konteks yang jelas agar pembaca memahami latar belakang topik.</p>
              <p>Jelaskan perbedaan data atau poin-poin yang relevan.</p>
              <p>
                Simpulkan pertanyaan dan masukan spesifik yang ingin kamu terima untuk melibatkan audiens secara
                aktif.
              </p>
            </div>
            <img
              alt="Illustration of a person writing on a laptop"
              className="mt-6 w-full rounded-lg shadow-lg"
              height="100"
              src=""
              width="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatThread;
