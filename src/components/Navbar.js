import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <h1>Email reader</h1>
    <ul className="navMenu">
      <li><Link to="/" className="navItem">MESSAGES</Link></li>
      <li><Link to="/categories" className="navItem">AUTHORS</Link></li>
      <li><Link to="/toolbar" className="navItem">TOOLBAR</Link></li>
    </ul>
    <button className="iconButton" type="button">
      <span className="materialIcons primaryColor">person</span>
    </button>
  </nav>
);

export default Navbar;
