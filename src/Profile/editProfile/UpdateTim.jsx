import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateTeam() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [teamId, setTeamId] = useState(null); // State untuk menyimpan teamId

  // Fetch user and team data based on the user_id
  useEffect(() => {
    const fetchTeamData = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        toast.error("You are not logged in. Please log in first.", {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      }

      try {
        // Fetch user data from /me to get user_id
        const userResponse = await fetch("http://127.0.0.1:8000/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!userResponse.ok) {
          throw new Error("Failed to fetch user data");
        }

        const userData = await userResponse.json();
        const userId = userData.id;

        // Fetch team data using user_id
        const teamResponse = await fetch(
          `http://127.0.0.1:8000/api/teams?user_id=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!teamResponse.ok) {
          throw new Error("Failed to fetch team data");
        }

        const teamsData = await teamResponse.json();
        const userTeam = teamsData.find((team) => team.user_id === userId);

        if (userTeam) {
          setTeamId(userTeam.id); // Set teamId
          setFormData({
            name: userTeam.name || "",
            tagline: userTeam.tagline || "",
            description: userTeam.description || "",
            image: null, // Do not send existing image directly
          });
          setPreviewImage(
            userTeam.image
              ? `http://127.0.0.1:8000/storage/team_images/${userTeam.image}`
              : null
          );
        } else {
          toast.error("Team not found for this user", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      } catch (error) {
        console.error("Failed to fetch team data", error);
        toast.error("An error occurred while fetching team data", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    };

    fetchTeamData();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input and preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });

      // Generate preview image
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("tagline", formData.tagline);
    formPayload.append("description", formData.description);
    if (formData.image) formPayload.append("image", formData.image);

    const token = localStorage.getItem("authToken"); // Get token from localStorage

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/teams/${teamId}?_method=put`,
        {
          method: "POST", // Use POST with `_method=put`
          body: formPayload,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update team data");
      }

      const data = await response.json();
      toast.success("Team updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Reset the form
      setFormData({
        name: "",
        tagline: "",
        description: "",
        image: null,
      });
      setPreviewImage(null);
    } catch (error) {
      console.error("Error updating team:", error);
      toast.error("An error occurred while updating the team", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center text-black py-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <ToastContainer />
        <h2 className="text-center text-xl font-semibold mb-4">Update Team</h2>
        <form onSubmit={handleSubmit}>
          {/* Team Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Nama Lengkap Tim
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded-lg"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          {/* Tagline */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="tagline"
            >
              Tagline
            </label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg"
              value={formData.tagline}
              onChange={handleInputChange}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="description"
            >
              Tentang Tim
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full px-3 text-black py-2 bg-white border border-gray-300 rounded-lg"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="image"
            >
              Foto Tim
            </label>
            <div className="flex items-center">
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
              )}
              <input
                type="file"
                id="image"
                name="image"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className={`px-6 py-2 rounded-lg text-white ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Team"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateTeam;
