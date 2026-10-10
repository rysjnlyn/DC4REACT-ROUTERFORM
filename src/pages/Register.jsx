import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required.";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!email.includes("@")) {
      newErrors.email = "Email must contain @.";
    }

    if (event === "") {
      newErrors.event = "Please select an event.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
   
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Event:", event);
    


      navigate("/confirmation");
    }
  };

  return (
    <div>
      <h1>Register for an Event</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Select Event:</label>

          <select
            value={event}
            onChange={(e) => setEvent(e.target.value)}
          >
            <option value=""> Select an Event </option>
            <option value="Buwan ng Wika">
              Buwan ng Wika
            </option>
            <option value="MDC Siklab 2026">
              MDC Siklab 2026
            </option>
            <option value="Mama Mary's Birthday">
              Mama Mary's Birthday
            </option>
          </select>

          {errors.event && <p>{errors.event}</p>}
        </div>

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;