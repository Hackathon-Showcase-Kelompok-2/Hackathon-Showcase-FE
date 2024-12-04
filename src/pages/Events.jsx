import React from "react";
import EventGrid from "../event/EventGrid";
import UpcommingEvents from "../event/EventList";
import CardEvent from "../event/CardEvent";

function Events() {
  return (
    <div>
      <CardEvent />
      <UpcommingEvents />
      <EventGrid />
    </div>
  );
}

export default Events;
