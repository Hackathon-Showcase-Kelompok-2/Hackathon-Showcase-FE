import React, { useState, useEffect } from 'react';
import EventDetailCard from './EventDetailCard';

function UpcomingEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://your-api-endpoint.com/events') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setEvents(data.slice(0, 3))) // Assuming API returns an array of events, we take the first 3
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="w-[1372px] h-[518px] p-[120px_171px] bg-gray-100 rounded-t-lg border border-t-0 border-l-0 border-r-0 mt-10">
      <h1 className="text-3xl font-bold mb-6">UPCOMING EVENTS</h1>
      <div className="space-y-6">
        {events.map((event, index) => (
          <EventDetailCard
            key={index}
            image={event.image}
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="w-[288px] h-[57px] bg-blue-500 text-white rounded-t-lg">All Events</button>
      </div>
    </div>
  );
}

export default UpcomingEvents;
