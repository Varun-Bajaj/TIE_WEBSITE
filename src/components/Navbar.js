import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Images/img1.png'; // Ensure the image path is correct

const Navbar = () => {
  const [isSolutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const toggleSolutionsDropdown = () => {
    setSolutionsDropdownOpen(!isSolutionsDropdownOpen);
  };

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
        <div className="brand-tagline">
          <span className="navbar-brand-text">Simpler - Smarter - Faster</span>
        </div>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>

        {/* Solutions Dropdown */}
        <li className="dropdown">
          <button onClick={toggleSolutionsDropdown}>
            Solutions {isSolutionsDropdownOpen ? '▲' : '▼'}
          </button>
          {isSolutionsDropdownOpen && (
            <ul className="dropdown-menu">
              <li><button onClick={() => window.location.href = '/solution1'}>Solution 1</button></li>
              <li><button onClick={() => window.location.href = '/solution2'}>Solution 2</button></li>
            </ul>
          )}
        </li>

        {/* Resources Dropdown */}
        <li className="dropdown">
          <button onClick={toggleResourcesDropdown}>
            Resources {isResourcesDropdownOpen ? '▲' : '▼'}
          </button>
          {isResourcesDropdownOpen && (
            <ul className="dropdown-menu">
              <li><button onClick={() => window.location.href = '/resource1'}>Resource 1</button></li>
              <li><button onClick={() => window.location.href = '/resource2'}>Resource 2</button></li>
            </ul>
          )}
        </li>

        <li><a href="/ourwork">Our Work</a></li>
        <li><a href="/aboutus">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
