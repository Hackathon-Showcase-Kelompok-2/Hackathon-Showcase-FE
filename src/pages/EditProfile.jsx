import React from "react";
import TeamExperiences from "../Profile/editProfile/TeamExperiences";
import TimForm from "../Profile/editProfile/TimForm"
import UploadProject from "../Profile/editProfile/UploadProject";
import UpdateTim from "../Profile/editProfile/UpdateTim";

function EditProfile() {
  return (
    <div className="bg-gray-50 flex items-center text black justify-center w-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <UpdateTim />
        <TimForm />
        <TeamExperiences />
        <UploadProject />
      </div>
    </div>
  );
}

export default EditProfile;
