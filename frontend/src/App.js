import React from "react";
import HomePage from "./HomePage";
import MyJourney from "./MyJourney";
import JourneyExperience from "./JourneyExperience";
import Chatbot from "./Chatbot";
import LiveUpdates from "./LiveUpdates";
import { Routes, Route } from "react-router-dom";
import TransportDashboard from "./TransportDashboard";

function App() {
return (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/my-journey" element={<MyJourney />} />
              <Route path="/journey-experience" element={<JourneyExperience />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/live-updates" element={<LiveUpdates />} />  
              <Route path="/transport-dashboard" element={<TransportDashboard />} />

            </Routes>
  );
}
export default App;
