/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // Adjust the path based on your file structure
import Login from "./Login";
import Signup from "./SignUp";
import About from "./About";
import Contact from "./Contact";
import StudentDashboard from "./StudentDashboard";
import Events from "./Events";
import Counsellors from "./Counsellors";
import CounsellorDetails from "./CounsellorDetails";
import E1 from "./E1";
import E2 from "./E2";
import Register from "./Register";
import JohnDoe from "./JohnDoe";
import JaneSmith from "./JaneSmith";
import RegisterEvents from "./registerEvents";
import RegisterEvent1 from "./registerEvent1";
import Profile from "./Profile";
import EngPg from "./EngPg";
import EventDet from "./EventDet";
import BusinessPg from "./BusinessPg";
import EmilyJohnson from "./EmilyJohnson";
import Msg from "./Msg";
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/counsellors" element={<Counsellors />} />
        <Route path="/counsellor-details" element={<CounsellorDetails />} />
        <Route path="/e1" element={<E1 />} />
        <Route path="/e2" element={<E2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/JohnDoe" element={<JohnDoe />} />
        <Route path="/JaneSmith" element={<JaneSmith />} />
        <Route path="/registerEvents" element={<RegisterEvents />} />
        <Route path="/registerEvent1" element={<RegisterEvent1 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/EngPg" element={<EngPg />} />
        <Route path="/eventDet/:eventId" element={<EventDet />} />
        <Route path="/BusinessPg" element={<BusinessPg />} />
        <Route path="/EmilyJohnson" element={<EmilyJohnson />} />
        <Route path="/msg" element={<Msg />} />

      </Routes>
    </Router>
  );
}

export default App;
