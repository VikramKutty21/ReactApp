import React, { useState } from "react";
import { FaBus, FaTrain, FaSubway, FaBell, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import "./TransportDashboard.css";

const TransportDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [transportData, setTransportData] = useState([
    { id: 1, type: "Bus", name: "Bus 102", status: "On Time", location: "Main Street" },
    { id: 2, type: "Train", name: "Train X1", status: "Delayed", location: "Central Station" },
    { id: 3, type: "Metro", name: "Metro Blue", status: "Arrived", location: "Metro Square" },
  ]);

  const filteredTransport = transportData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="transport-dashboard">
      <div className="header">
        <h2>🚏 Transport LiveUpdates</h2>
        <FaBell className="icon" />
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search transport (Bus 102, Train X1...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button><FaSearch /></button>
      </div>

      {/* Transport List */}
      <div className="transport-list">
        {filteredTransport.map((item) => (
          <div key={item.id} className="transport-card">
            <h3>
              {item.type === "Bus" && <FaBus className="icon" />}
              {item.type === "Train" && <FaTrain className="icon" />}
              {item.type === "Metro" && <FaSubway className="icon" />}
              {item.name}
            </h3>
            <p>📍 Location: {item.location}</p>
            <p className={`status ${item.status.toLowerCase()}`}>{item.status}</p>
            <button className="track-btn">Track Live</button>
          </div>
        ))}
      </div>

      {/* Nearby Stations */}
      <div className="nearby-stations">
        <h3>📍 Find Nearest Station</h3>
        <button className="location-btn"><FaMapMarkerAlt /> Detect My Location</button>
      </div>
    </div>
  );
};

export default TransportDashboard;
