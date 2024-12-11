import React from "react";
import ProfileCard from "../Profile/editProfile/ProfileCard";
import BiodataPage from "../Profile/editProfile/BiodataPage";
import TeamExperiences from "../Profile/editProfile/TeamExperiences";
import TimForm from "../Profile/editProfile/TimForm"
import UploadProject from "../Profile/editProfile/UploadProject";

function EditProfile() {
  return (
    <div className="bg-gray-50 flex items-center text black justify-center w-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <ProfileCard />
        <BiodataPage />
        <TimForm />
        <TeamExperiences />
        <UploadProject />
      </div>
    </div>
  );
}

export default EditProfile;
