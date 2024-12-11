import React from "react";
import CommentSection from "../Projects/DetailProject/CommentSection";
import Detail from "../Projects/DetailProject/Detail";
import Search from "../Projects/DetailProject/Search";
import TeamMembers from "../Projects/DetailProject/TeamMembers";

function DetailProject() {
  return (
    <div>
      <Detail />
      <TeamMembers />
      <CommentSection />
      <Search />
    </div>
  );
}

export default DetailProject;
