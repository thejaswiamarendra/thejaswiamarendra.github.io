import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/personal">Personal</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

