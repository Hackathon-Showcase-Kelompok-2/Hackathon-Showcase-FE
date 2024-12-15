import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ProfileCard() {
  const { id } = useParams(); // Get id from the URL
  const [imageSrc, setImageSrc] = useState("");
  const [teamName, setTeamName] = useState("Loading...");
  const [teamDescription, setTeamDescription] = useState("Loading...");

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        // Fetch project data from endpoint /projects/{id}
        const projectResponse = await fetch(`http://127.0.0.1:8000/api/projects/${id}`);

        if (!projectResponse.ok) {
          setTeamName("Failed to load project data");
          return;
        }

        const projectData = await projectResponse.json();
        const userID = projectData.user_id;  // Get user_id from project data
        console.log("Project Data:", projectData);

        // Fetch team data using user_id
        const teamResponse = await fetch(`http://127.0.0.1:8000/api/teams?user_id=${userID}`);

        if (!teamResponse.ok) {
          setTeamName("Failed to load team data");
          return;
        }

        const teamData = await teamResponse.json();
        const filteredTeam = teamData.filter(
          (team) => team.user_id === userID
        );

        if (filteredTeam.length > 0) {
          const team = filteredTeam[0]; // Access the first element
          console.log("Filtered Team Data:", team);
          setTeamName(team.name); // Set team name
          setTeamDescription(team.description); // Set team description
          setImageSrc(`http://127.0.0.1:8000/storage/team_images/${team.image}`); // Set team image
        } else {
          setTeamName("No team data available for this user");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setTeamName("Error loading data");
        setTeamDescription("Error loading description");
      }
    };

    fetchTeamData();
  }, [id]);

  return (
    <div className="flex justify-center py-10 w-screen bg-black">
      <div className="rounded-2xl p-8 flex flex-col items-center relative overflow-hidden w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
        <div className="relative mb-6">
          <div className="rounded-full w-48 h-48 bg-black flex items-center justify-center overflow-hidden relative border-4 border-yellow-500">
            {imageSrc ? (
              <img
                id="profileImage"
                alt="Team"
                className="object-cover w-full h-full"
                src={imageSrc}
              />
            ) : (
              <div id="placeholderIcon" className="text-blue-300">
                <i className="fas fa-user text-4xl"></i>
              </div>
            )}
          </div>
        </div>
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-white">
            {teamName}
          </h1>
          <p className="text-white">
            {teamDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
