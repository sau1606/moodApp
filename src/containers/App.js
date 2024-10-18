import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import SignupPage from '../components/SignupPage';
import LoginPage from '../components/LoginPage';
import MoodCheckInPage from '../components/MoodCheckInPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<MoodCheckInPage />} />
      </Routes>
    </Router>
  );
};

export default App;
