import { Link } from "react-router-dom";

function Events() {
  const events = [
    {
      id: 1,
      name: "Buwan ng Wika",
      date: "August 27, 2026",
      location: "AC, MaterDei College",
     
    },
    {
      id: 2,
      name: "MDC Siklab 2026",
      date: "September 3-5, 2026",
      location: "MaterDei College",
     
    },
    {
      id: 3,
      name: "Mama Mary's Biryhday",
      date: "September 8, 2026",
      location: "AC, MaterDei College",
      
    }
  ];

  return (
    <div>
      <h1>Upcoming Events</h1>

      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.date}</p>
          <p>{event.location}</p>

          <Link to={`/events/${event.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Events;