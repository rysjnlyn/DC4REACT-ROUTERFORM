import { useParams, Link } from "react-router-dom";

function EventDetails() {
  const { id } = useParams();

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

  const event = events.find((event) => event.id === Number(id));

  if (!event) {
    return (
      <div>
        <h1>Event Not Found</h1>
        <Link to="/events">Back to Events</Link>
      </div>
    );
  }

 return (
  <div>
    <h1>{event.name}</h1>

    <h2>Date:</h2>
    {event.date}

    <h2>Location:</h2>
    {event.location}

    <br />
    <br />

    <Link to="/register">
      Register for this Event
    </Link>

    <br />
    <br />

    <Link to="/events">
      Back to Events
    </Link>
  </div>
);
}

export default EventDetails;