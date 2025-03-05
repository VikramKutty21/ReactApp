import React from "react";
import { Link } from "react-router-dom";

function Chatbot() {
  return (
    <div className="container">
      <h1>Chatbot</h1>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
}

export default Chatbot;
