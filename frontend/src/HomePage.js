import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import styles

function HomePage() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">Transit Simplified</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/my-journey">My Journey</Link></li>
          <li><Link to="/journey-experience">Journey Experience</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li>
          <li><Link to="/live-updates">Live Updates</Link></li>
          <li><Link to="/transport-dashboard">TransportDashboard</Link></li>
        </ul>
      </nav>

      {/* Homepage Content */}
      <div className="homepage-content">
        <h1>Welcome to Transit Simplified</h1>
        <p>Your all-in-one platform for hassle-free transportation updates.</p>
      </div>
    </div>
  );
}

export default HomePage;
