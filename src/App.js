import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Personal from './pages/Personal/Personal';

import ghatInBenaras from './assets/ghatInBenaras.png';
import kujukushimashimabara from './assets/kujukushimashimabara.png';
import moonOverToyamaPlain from './assets/moonOverToyamaPlain.png'
import shinobazuPondAtNight from './assets/shinobazuPondAtNight.png'
import shirahamaEngetsuIsland from './assets/shirahamaEngetsuIsland.png'
import tajMahalUnderMoonlight from './assets/tajMahalUnderMoonlight.png'
import basishinjiBeach from './assets/basishinjiBeach.png'
import './App.css';


const backgroundImages = [
    {
        "title": "Ghat in Benaras (Benaresu no gatto)",
        "src": ghatInBenaras,
        "artist": "Hiroshi Yoshida",
        "year": "1931"
    },
    {
        "title": "Kujukushima Shimabara Island",
        "src": kujukushimashimabara,
        "artist": "Kawase Hasui",
        "year": "1922"
    },
    {
        "title": "Winter Moon over Toyama Plain (Fuyu no tsuki (Toyamagahara))",
        "src": moonOverToyamaPlain,
        "artist": "Kawase Hasui",
        "year": "1931"
    },
    {
        "title": "Shinobazu Pond at Night (Yoru no chihan (Shinobazu no ike))",
        "src": shinobazuPondAtNight,
        "artist": "Kawase Hasui",
        "year": "1932"
    },
    {
        "title": "Engetsu Island, Shirahama (Shirahama Engetsuto)",
        "src": shirahamaEngetsuIsland,
        "artist": "Kawase Hasui",
        "year": "1932"
    },
    {
        "title": "Taj Mahal under Moonlight (Tsukiyo no Taji Maharu)",
        "src": tajMahalUnderMoonlight,
        "artist": "Hiroshi Yoshida",
        "year": "1931"
    },
    {   
        "title": "Basishinji Beach, Iyo (Iyo Baishinji no hama)",
        "src": basishinjiBeach,
        "artist": "Kawase Hasui",
        "year": "1950"
    }
]

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
