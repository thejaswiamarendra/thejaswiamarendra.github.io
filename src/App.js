import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Personal from './pages/Personal/Personal';

import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </div>
  );
}

export default App;
