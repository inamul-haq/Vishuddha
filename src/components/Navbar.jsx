import React, { useState } from 'react';
import '../components/Navbar.css';
import { NavLink } from "react-router-dom";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icon";
import Image from '../assets/vashuddha.svg';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo ">
            <img src={Image} alt="Vashuddha Logo" className="icon" />
            <span>Vishuddha</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink
                exact
                to="/onlineclasses"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Online Classes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/offlineclasses"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Offline Classes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/courses"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/subjects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Subjects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/yoga"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Yoga Classes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contactus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
