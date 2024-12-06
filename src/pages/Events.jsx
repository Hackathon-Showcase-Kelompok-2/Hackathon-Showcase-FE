import React from "react";
import EventGrid from "../event/EventGrid";
import EventList from "../event/EventList";
import CardEvent from "../event/CardEvent";

function Events() {
  return (
    <div>
      <CardEvent />
      <EventList />
      <EventGrid />
    </div>
  );
}

export default Events;
