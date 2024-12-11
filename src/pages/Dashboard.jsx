import React from "react";
import DashCard from "../dashboard/DashCard";
import Achievements from "../dashboard/Achievements";
import MyProject from "../dashboard/MyProject";     
import EventList from "../dashboard/RecommendEvents";

function Dashboard() {
  return (
    <div>
      <DashCard />
      <Achievements />
      <MyProject />
      <EventList />
    </div>
  );
}

export default Dashboard;
