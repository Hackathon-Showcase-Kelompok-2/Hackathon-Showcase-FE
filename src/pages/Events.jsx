import React from "react";
import EventGrid from "../event/EventGrid";
import UpcommingEvents from "../event/EventList";
import Card from "../event/Card";

function Events() {
  return (
    <div className="bg-white">
      <Card />
      <UpcommingEvents />
      <EventGrid />
    </div>
  );
}

export default Events;
