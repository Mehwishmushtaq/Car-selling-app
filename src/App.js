// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import SubmitCar from './SubmitCar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/submit-car" element={<SubmitCar />} />
      </Routes>
    </Router>
  );
}

export default App;
