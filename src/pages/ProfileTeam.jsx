import React from "react";
import ProfileCard from "../profileTeam/ProfileCard";
import Experience from "../profileTeam/Experience";
import Projects from "../profileTeam/Projects";
import TeamPage from "../profileTeam/TeamPage";

function ProfileTeam() {
  return (
    <div>
      <ProfileCard />
      <TeamPage />
      <Experience />
      <Projects />
    </div>
  );
}

export default ProfileTeam;
