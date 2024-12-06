// import React from "react";

// const EventCard = ({ image, date, mode, level, title }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//       {/* Banner Image */}
//       <div className="relative">
//         <img src={image} alt={title} className="w-full h-40 object-cover" />
//         <div className="absolute inset-0 bg-black bg-opacity-25"></div>
//       </div>

//       {/* Details */}
//       <div className="p-4">
//         <div className="flex items-center text-gray-600 text-sm mb-2">
//           <span className="flex items-center gap-1 mr-4">
//             <i className="fas fa-calendar-alt"></i> {date}
//           </span>
//           <span className="flex items-center gap-1">
//             <i className="fas fa-globe"></i> {mode}
//           </span>
//         </div>
//         <div className="mb-2">
//           <span
//             className={`px-3 py-1 text-xs rounded-full ${
//               level === "Mudah"
//                 ? "bg-green-100 text-green-600"
//                 : level === "Menengah"
//                 ? "bg-blue-100 text-blue-600"
//                 : "bg-red-100 text-red-600"
//             }`}
//           >
//             {level}
//           </span>
//         </div>
//         <h3 className="text-lg font-semibold text-blue-600 mb-2">{title}</h3>
//         <button className="px-4 py-2 w-full bg-blue-600 text-white rounded-md text-sm font-semibold">
//           Daftar Sekarang
//         </button>
//       </div>
//     </div>
//   );
// };

// const EventGrid = () => {
//   const events = [
//     {
//       image: "https://via.placeholder.com/400x300.png?text=Ericsson+Hackathon",
//       date: "01/12/2024",
//       mode: "Online",
//       level: "Menengah",
//       title:
//         "Ericsson Gelar Hackathon Dorong Inovasi AI dan Smart Manufacturing",
//     },
//     {
//       image: "https://via.placeholder.com/400x300.png?text=IoT+Hackathon+2024",
//       date: "01/12/2024",
//       mode: "Online",
//       level: "Tinggi",
//       title: "IoT Hackathon 2024",
//     },
//     {
//       image: "https://via.placeholder.com/400x300.png?text=Web+Dev+Summit",
//       date: "01/12/2024",
//       mode: "Online",
//       level: "Mudah",
//       title: "Web Dev Summit",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">Semua Events Hackathon Terbaru</h2>
//         <button className="text-blue-500 bg-white">
//           <a href="#" >
//             Semua
//           </a>
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {events.map((event, index) => (
//           <EventCard
//             key={index}
//             image={event.image}
//             date={event.date}
//             mode={event.mode}
//             level={event.level}
//             title={event.title}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventGrid;

import React from "react";

const EventGrid = () => {
  const events = [
    {
      id: 1,
      image: "https://via.placeholder.com/404x299", // Ganti dengan URL gambar event
      date: "1/12/2024",
      location: "Online",
      difficulty: "Menengah",
      title: "Ericsson Gelar Hackathon Dorong Inovasi AI dan Smart Manufacturing",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/404x299", // Ganti dengan URL gambar event
      date: "1/12/2024",
      location: "Online",
      difficulty: "Tinggi",
      title: "IoT Hackathon 2024",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/404x299", // Ganti dengan URL gambar event
      date: "1/12/2024",
      location: "Online",
      difficulty: "Mudah",
      title: "Web Dev Summit",
    },
  ];

  return (
    <div className="flex flex-col items-center  bg-white py-10">
      {/* Title and "Semua" button */}
      <div className="flex justify-between w-full max-w-[1362.77px] mb-6">
        <h1 className="text-2xl font-bold text-black">Semua Events Hackathon Terbaru</h1>
        <button className="text-blue-600 bg-white">Semua</button>
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-[1362.77px] ">
        {events.map((event) => (
          <div
            key={event.id}
            className="border border-gray-300 rounded-lg w-[444px] h-[481px] flex flex-col items-center text-black "
          >
            {/* Event Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-[404px] h-[299px] rounded-lg mt-4 object-cover"
            />

            {/* Event Info */}
            <div className="flex justify-between items-center w-full px-4 mt-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <span className="mr-2">📅</span>
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🔖</span>
                <span>{event.difficulty}</span>
              </div>
            </div>

            {/* Event Title */}
            <h2 className="text-blue-600 font-bold text-base mt-4 text-center px-4">
              {event.title}
            </h2>

            {/* Button */}
            <button className="w-[404px] h-[57px] bg-blue-600 text-white rounded-lg mt-4">
              Daftar Sekarang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGrid;
