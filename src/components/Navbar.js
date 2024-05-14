import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <h1>EMAIL</h1>
    <ul className="navMenu">
      <li><Link to="/messages" className="navItem">MESSAGES</Link></li>
    </ul>
    <button className="iconButton" type="button">
      <span className="materialIcons primaryColor">PROFILE</span>
    </button>
  </nav>
);

export default Navbar;
