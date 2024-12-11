import React from "react";
import Experience from "../Profile/Experience";
import ProfileCard from "../Profile/ProfileTeam";
import Projects from "../Profile/Projects";
import Statistics from "../Profile/Statistics";
import TeamPage from "../Profile/TeamPage";

function Profile() {
    return (
        <div className="bg-white">
            <ProfileCard />
            <TeamPage />
            <Experience />
            <Projects />
            <Statistics />
        </div>
    )
}

export default Profile;