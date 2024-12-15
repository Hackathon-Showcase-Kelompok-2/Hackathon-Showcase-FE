import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Experience() {
  const { id } = useParams(); // Ambil id dari URL
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        // Fetch data pengalaman berdasarkan team_id dari endpoint /team_experiences?team_id={id}
        const response = await fetch(`http://127.0.0.1:8000/api/team_experiences?team_id=${id}`);

        if (!response.ok) {
          throw new Error("Gagal memuat data pengalaman.");
        }

        const experiencesData = await response.json();
        setExperiences(experiencesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-6 bg-white">
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
