import React, { useState, useEffect } from "react";

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError("User not logged in");
          setLoading(false);
          return;
        }

        // Fetch user data
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
        if (!userId) {
          throw new Error("Invalid user data");
        }

        // Fetch team data
        const teamResponse = await fetch(`http://127.0.0.1:8000/api/teams?user_id=${userId}`);

        if (!teamResponse.ok) {
          throw new Error("Failed to fetch team data");
        }

        const teamsData = await teamResponse.json();
        const userTeam = teamsData.find((team) => team.user_id === userId);

        if (!userTeam) {
          throw new Error("User does not belong to any team");
        }

        const teamId = userTeam.id;

        // Fetch experiences data
        const experiencesResponse = await fetch(
          `http://127.0.0.1:8000/api/team_experiences`);

        if (!experiencesResponse.ok) {
          throw new Error("Failed to fetch experiences data");
        }

        const experiencesData = await experiencesResponse.json();
        const filteredMembers = experiencesData.filter((member) => member.team_id === teamId);

        setExperiences(filteredMembers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">
        Pengalaman
      </h1>

      {experiences.length > 0 ? (
        experiences.map((experience) => (
          <div
            key={experience.id}
            className="bg-white shadow-md rounded-lg p-6 mb-6"
          >
            <p className="text-blue-600 font-semibold">{experience.period}</p>
            <h2 className="text-xl font-bold">{experience.activity}</h2>
            <p className="text-gray-600 mb-2">{experience.achievement}</p>
            <p className="text-gray-600">{experience.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No experiences found.</p>
      )}
    </div>
  );
}

export default Experience;
