import React from "react";

function ProfileCard() {
  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = document.getElementById("profileImage");
        const placeholderIcon = document.getElementById("placeholderIcon");
        image.src = e.target.result;
        image.classList.remove("hidden");
        placeholderIcon.classList.add("hidden");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center py-10">
      <div className="bg-blue-50 rounded-2xl p-8 flex flex-col items-center relative overflow-hidden w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
        <div className="relative mb-6">
          <label htmlFor="fileInput" className="cursor-pointer block">
            <div className="rounded-full w-32 h-32 bg-gray-300 flex items-center justify-center overflow-hidden">
              <img
                id="profileImage"
                alt="Placeholder for profile picture"
                className="object-cover hidden"
              />
              <div id="placeholderIcon" className="text-gray-500">
                <i className="fas fa-user text-4xl"></i>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
              <i className="fas fa-pen text-white text-sm"></i>
            </div>
          </label>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={previewImage}
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Welcome, <span className="text-blue-500">Innovators!</span>
          </h1>
          <p className="text-gray-500">
            Informasi mengenai profil dan preferensi kamu di seluruh layanan
            Galery Hackaton
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;