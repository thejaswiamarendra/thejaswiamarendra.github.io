import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Personal from './pages/Personal/Personal';
import { backgroundImages } from './data';
import './App.css';

function App() {
  // Select three unique images for the pages
  const [homeBg, workBg, personalBg] = useMemo(() => {
    const shuffled = [...backgroundImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home bgImage={homeBg} />} />
         <Route path="/work" element={<Work bgImage={workBg} />} />
        <Route path="/personal" element={<Personal bgImage={personalBg} />} />
      </Routes>
    </div>
  );
}

export default App;
