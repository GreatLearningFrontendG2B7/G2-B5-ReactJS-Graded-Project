import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <ul className="nav-links">
            <li>
              <NavLink to="/">Movies in theatres</NavLink>
            </li>
            <li>
              <NavLink to="/">Coming soon</NavLink>
            </li>
            <li>
              <NavLink to="/">Top rated Indian</NavLink>
            </li>
            <li>
              <NavLink to="/">Top rated movies</NavLink>
            </li>
            <li>
              <NavLink to="/">Favorites</NavLink>
            </li>
          </ul>
          <form className="search-form">
            <input type="text" placeholder="Search movie" aria-label="Search" />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </nav>
      <span className="line"></span>
    </>
  );
};

export default Navbar;
