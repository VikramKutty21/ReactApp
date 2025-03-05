import React, { useState } from "react";
import { Link } from "react-router-dom";
import  "./MyJourney.css" // Import CSS styles

function MyJourney() {
  // State to store journey details
  const [journeys, setJourneys] = useState([]);
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    date: "",
    notes: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.source || !formData.destination || !formData.date) {
      alert("Please fill in all required fields!");
      return;
    }
    setJourneys([...journeys, formData]); // Add new journey
    setFormData({ source: "",destination: "", date: "", notes: "" }); // Reset form
  };

  return (
    <div className="page-container">
      <h1 className="page-title">My Journey</h1>
      <p className="page-description">Plan and track your journeys easily.</p>

      {/* Journey Input Form */}
      <form className="journey-form" onSubmit={handleSubmit}>
      <input
          type="text"
          name="source"
          placeholder="Enter Source"
          value={formData.source}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="destination"
          placeholder="Enter Destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="notes"
          placeholder="Add Notes (optional)"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="submit-button">Add Journey</button>
      </form>

      {/* Journey List Display */}
      <div className="journey-list">
        {journeys.length === 0 ? (
          <p>No journeys added yet.</p>
        ) : (
          journeys.map((journey, index) => (
            <div key={index} className="journey-card">
              <h3>{journey.source}</h3>
              <h3>{journey.destination}</h3>
              <p>Date: {journey.date}</p>
              {journey.notes && <p>Notes: {journey.notes}</p>}
            </div>
          ))
        )}
      </div>

      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
}

export default MyJourney;
