// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="dashboard-container">
      
      <header className="dashboard-header">
      <h1>Transit Simplified</h1>
      </header>
      <div className="grid-container">
        <div className="card">
          <h2>My Journey</h2>
          <p>Explore the path I have traveled so far.</p>
          <Link to="/my-journey"><button>View</button></Link>
        </div>

        <div className="card">
          <h2>Journey Experience</h2>
          <p>Read and share travel experiences.</p>
          <Link to="/journey-experience"><button>Explore</button></Link>
        </div>

        <div className="card">
          <h2>Chatbot</h2>
          <p>Get instant answers to your queries.</p>
          <Link to="/chatbot"><button>Chat Now</button></Link>
        </div>

        <div className="card">
          <h2>Live Updates</h2>
          <p>Stay updated with the latest news.</p>
          <Link to="/live-updates"><button>View Updates</button></Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
