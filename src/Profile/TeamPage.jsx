import React, { useState } from "react";

function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null); // State untuk anggota yang dipilih

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      description: "Ahli dalam desain antarmuka dan pengalaman pengguna.",
      gender: "Perempuan",
      education: "Institut Teknologi Bandung",
      contact: "+62 812-3456-7890",
      image:
        "https://storage.googleapis.com/a1aa/image/PxCMbfAFo4Qodaqmy6qDfDRPAls8ERTBdro1Dscgj8eN5VynA.jpg",
    },
    {
      name: "Mike Chen",
      role: "FrontEnd Developer",
      description: "Berpengalaman dalam pengembangan front-end modern.",
      gender: "Laki-laki",
      education: "Universitas Gadjah Mada",
      contact: "+62 813-4567-8901",
      image:
        "https://storage.googleapis.com/a1aa/image/rSZavbAxUjLTHBj0djchWCqeMiYoAlUbMfresmTFVTzQCWynA.jpg",
    },
    {
      name: "Dello Swli",
      role: "BackEnd Developer",
      description: "Spesialis pengembangan back-end dan database.",
      gender: "Laki-laki",
      education: "Universitas Indonesia",
      contact: "+62 814-5678-9012",
      image:
        "https://storage.googleapis.com/a1aa/image/4tBbU4GvoSYtEZkJp0m0QKVa81eE36xz7XsYhhGrvGyvvl8JA.jpg",
    },
    {
      name: "Anna Smith",
      role: "Digital Marketing",
      description:
        "Ahli strategi konten dan optimasi media sosial untuk meningkatkan engagement.",
      gender: "Perempuan",
      education: "Universitas Pelita Harapan",
      contact: "+62 815-6789-1230",
      image:
        "https://storage.googleapis.com/a1aa/image/JY1JDf44BRSnK6n64dfzDac93cfeH9kBq67E66zZseeCh4SeJA.jpg",
    },
  ];

  const openModal = (member) => setSelectedMember(member); // Buka modal
  const closeModal = () => setSelectedMember(null); // Tutup modal

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-4">Anggota Tim</h1>
          <div className="border-2 border-blue-300 p-8 rounded-lg">
            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
                  onClick={() => openModal(member)}
                >
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="rounded-lg mb-4"
                    width="150"
                    height="150"
                  />
                  <h2 className="text-lg font-bold text-blue-600">
                    {member.name}
                  </h2>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bagian "Tentang Kami" */}
        <div className="text-center border-t border-gray-300 py-8">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Tentang Kami</h2>
          <p className="text-gray-600 mb-6">
            Kami adalah tim inovator yang berdedikasi untuk mengembangkan solusi
            teknologi berkelanjutan di bidang pertanian. Dengan keahlian lintas
            disiplin, kami percaya pada kekuatan inovasi dan kolaborasi untuk
            menciptakan dampak positif.
          </p>
          <div className="flex justify-center space-x-4">
            {[
              { platform: "LinkedIn", url: "#" },
              { platform: "GitHub", url: "#" },
              { platform: "Instagram", url: "#" },
              { platform: "Twitter", url: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="btn px-8 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-500 hover:text-white transition"
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <div className="flex flex-col items-center">
              <img
                src={selectedMember.image}
                alt={`Profile picture of ${selectedMember.name}`}
                className="rounded-full border-4 border-blue-500 w-24 h-24 object-cover"
                width="96"
                height="96"
              />
              <h2 className="text-xl font-bold text-blue-600 mt-4">
                {selectedMember.name}
              </h2>
              <span className="bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded-full mt-1">
                {selectedMember.role}
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Informasi Pribadi
              </h3>
              <p className="text-gray-600 mt-2">{selectedMember.description}</p>
              <div className="mt-4">
                <div className="flex items-center text-gray-600 mt-2">
                  <i className="fas fa-venus mr-2"></i>
                  <span>{selectedMember.gender}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-2">
                  <i className="fas fa-user-graduate mr-2"></i>
                  <span>{selectedMember.education}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-2">
                  <i className="fas fa-phone mr-2"></i>
                  <span>{selectedMember.contact}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg"
                onClick={closeModal}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamPage;
