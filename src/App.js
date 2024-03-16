import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, useParams,} from "react-router-dom";

import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Personal from './pages/Personal/Personal';
import Work from './pages/Work/Work';
import { Navbar } from './components';

import './App.css';
const App = ()=> {

    return (
        <div className='app'>
            <Navbar/>
            <Home/>
            <Work/>
            <Personal/>
            <Contact/>
      </div>
    );
}

export default App;