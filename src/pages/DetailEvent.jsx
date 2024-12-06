import React from "react";
import EventBanner from "../event/detailevents/EventBanner";
import EventDetail from "../event/detailevents/EventDetail";
import UpcommingEvent from "../event/detailevents/UpcommingEvent";

function DetailEvent() {
    return (
        <div>
            <EventBanner />
            <EventDetail />
            <UpcommingEvent />
        </div>
    )
}

export default DetailEvent;