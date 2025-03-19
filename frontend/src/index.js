import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyJourney from './MyJourney';
import JourneyExperience from './JourneyExperience';
import Chatbot from './Chatbot';
import LiveUpdates from './LiveUpdates';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    {/* <HomePage/>
    <MyJourney/>
    <JourneyExperience/>
    <Chatbot/>
    <LiveUpdates/> */}
  </Router>
   
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

