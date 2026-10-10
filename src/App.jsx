
// import {BrowserRouter, Routes ,Route,useNavigate} from 'react-router-dom';
// import { useState } from 'react';
// import Navbar from './Navbar.jsx'

// function Home() { 
//     return( 
//     <h1>Welcome to my MiniSite!!</h1>
// ) 
// }
// function About() { 
//     return(
//          <p>Hello Love! Welcome to my simple React site. This site was created to practice React, React Router, and form handling. You can explore the Home, About, and Contact pages and try submitting a message through the contact form.
// </p>
//     )
// }
// function Contact() {

//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (form.name == "" || form.email == "") {
//       setError("Error, Please input!");
//       return;
//     }
//     navigate("/thank-you");
//     console.log(form);
//   }
//   const [form, setForm] = useState({name: "", email: "", message: ""});

//   function handleChange(e) {
//     const {name,value} = e.target;
//     setForm ({...form, [name]: value,});
//     setError("");
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" value={form.name} onChange={handleChange} placeholder="Name"/>
//       <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email"/>
//       <input name="message" type="message" value={form.message} onChange={handleChange} placeholder="Message"/>
//       <p>{error}</p>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// function ThankYou() {
//   return <h1>Thank you very much for submitting</h1>;
// }
// function App() {
// return (
   
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/thank-you" element={<ThankYou />} />
//       </Routes>
//     </BrowserRouter>
// )
// }
// export default App

import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/events" element={<Events />} />

          <Route
            path="/events/:id"
            element={<EventDetails />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/confirmation"
            element={<Confirmation />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;