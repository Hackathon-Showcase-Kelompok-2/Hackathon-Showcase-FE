import React from "react";
import CardBottom from "../forum/Card";
import TrendingToday from "../forum/TrendingToday";
import ThreadPage from "../forum/ThreadPage";
import CardForum from "../forum/CreatForum";

function Forum () {
    return (
        <div>
            <CardForum />
            <TrendingToday />
            <ThreadPage />
            <CardBottom />
        </div>
    )
}

export default Forum;