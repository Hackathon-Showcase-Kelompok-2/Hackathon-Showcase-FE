import React, { useEffect, useState } from 'react';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Event Akan Datang</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src={event.banner} alt={event.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p className="text-gray-700 mb-4">{event.location}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Detail Event</button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">Daftar Sekarang</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
