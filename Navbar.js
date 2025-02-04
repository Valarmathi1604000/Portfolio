import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <h3>Valarmathi Rajendran</h3>
        <p>valarmathirajendran1604@gmail.com</p>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
