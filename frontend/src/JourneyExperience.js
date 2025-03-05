import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./JourneyExperience.css"; // Import CSS styles

function JourneyExperience() {
  // State for experiences
  const [experiences, setExperiences] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.rating) {
      alert("Please fill in all fields!");
      return;
    }
    setExperiences([...experiences, formData]); // Add new experience
    setFormData({ title: "", description: "", rating: "" }); // Reset form
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Journey Experience</h1>
      <p className="page-description">
        Share your journey experiences and help others!
      </p>

      {/* Experience Input Form */}
      <form className="experience-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Journey Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Describe your experience"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <select name="rating" value={formData.rating} onChange={handleChange} required>
          <option value="">Rate your journey</option>
          <option value="⭐">⭐</option>
          <option value="⭐⭐">⭐⭐</option>
          <option value="⭐⭐⭐">⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
        </select>
        <button type="submit" className="submit-button">Share Experience</button>
      </form>

      {/* Display Experiences */}
      <div className="experience-list">
        {experiences.length === 0 ? (
          <p>No experiences shared yet.</p>
        ) : (
          experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
              <p>Rating: {exp.rating}</p>
            </div>
          ))
        )}
      </div>

      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
}

export default JourneyExperience;
