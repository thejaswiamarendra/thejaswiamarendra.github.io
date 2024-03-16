import React from 'react';
import {Outlet, Link} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div class="container">
            <nav>
                <ul>
                {['Home', 'Work', 'Personal', 'Contact'].map((item) => (
                    <li key={`link-${item}`}>
                    <div/>
                    <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
                </ul>
            </nav>
            </div>
        </>
        
    )
}

export default Navbar;

