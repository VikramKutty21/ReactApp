import React from "react";
import HomePage from "./HomePage";
import MyJourney from "./MyJourney";
import JourneyExperience from "./JourneyExperience";
import Chatbot from "./Chatbot";
import LiveUpdates from "./LiveUpdates";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
//import { StateProvider } from "./StateProvider";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [{ user }] = useStateValue(); // Ensure `useStateValue` is correctly imported

  return (
    <BrowserRouter> {/* ✅ Moved BrowserRouter here */}
      <div className="App">
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            {/* <Sidebar /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/my-journey" element={<MyJourney />} />
              <Route path="/journey-experience" element={<JourneyExperience />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/live-updates" element={<LiveUpdates />} />
              <Route path="/rooms/:roomId" element={<Chat />} />
            </Routes>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
