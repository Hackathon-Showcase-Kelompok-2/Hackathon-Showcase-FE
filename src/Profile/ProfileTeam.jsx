import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProfileCard() {
  const { id } = useParams();
  const [imageSrc, setImageSrc] = useState(
    "https://storage.googleapis.com/a1aa/image/ZHXWaZJO0rJgFZheyxrGBFHiHgXh7Y5SNyISMDaGektht22TA.jpg"
  );

  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center py-10 bg-black">
      <div className="rounded-2xl p-8 flex flex-col items-center relative overflow-hidden w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
        <div className="relative mb-6">
          <div className="rounded-full w-48 h-48 bg-black flex items-center justify-center overflow-hidden relative border-4 border-yellow-500">
            <img
              id="profileImage"
              alt="Profile"
              className="object-cover w-full h-full"
              src={imageSrc}
            />
            <div id="placeholderIcon" className="text-blue-300 hidden">
              <i className="fas fa-user text-4xl"></i>
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-white">
            Welcome, <span className="text-blue-500">Innovators!</span>
          </h1>
          <p className="text-white">
            Informasi mengenai profil dan preferensi kamu di seluruh layanan
            Galery Hackaton
          </p>
        </div>
        <div className="w-auto mt-6">
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={previewImage}
          />
          <Link to={`/editprofile/${id}`}>
            <button
              className="py-2 px-6 bg-yellow-500 text-white font-bold rounded-lg text-center"
            >
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
