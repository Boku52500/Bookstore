import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => (
  <nav className="nav">
    <h1 className="logo">Bookstore</h1>
    <ul className="nav-links">
      <li>
        <Link to="/" className="link">
          Books
        </Link>
      </li>
      <li>
        <Link to="/categories" className="link">
          Categories
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
