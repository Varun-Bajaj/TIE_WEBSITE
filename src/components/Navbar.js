import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Images/logo.png"; // Ensure the image path is correct

const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isSolutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  // Scroll event to toggle the 'shrink' class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle Solutions Dropdown
  const toggleSolutionsDropdown = () => {
    setSolutionsDropdownOpen(!isSolutionsDropdownOpen);
    if (isResourcesDropdownOpen) setResourcesDropdownOpen(false); // Close other dropdown if open
  };

  // Toggle Resources Dropdown
  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!isResourcesDropdownOpen);
    if (isSolutionsDropdownOpen) setSolutionsDropdownOpen(false); // Close other dropdown if open
  };

  return (
    <nav className={`navbar ${isShrunk ? 'shrink' : ''}`}>
      {/* Brand logo and tagline */}
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
        <div className="brand-info">
          <span className="navbar-brand-text">Tech It Easy</span> {/* Company name */}
          <span className="navbar-tagline">Simpler - Smarter - Faster</span> {/* Tagline */}
        </div>
      </div>
  
      {/* Navbar links and dropdowns */}
      <ul className="navbar-links">
        <li><a href="/" className="active">Home</a></li>
  
        {/* Solutions Dropdown */}
        <li className={`dropdown ${isSolutionsDropdownOpen ? 'active' : ''}`}>
          <button onClick={toggleSolutionsDropdown}>
            Solutions {isSolutionsDropdownOpen ? '▲' : '▼'}
          </button>
          <ul className="dropdown-menu">
            <li><button onClick={() => window.location.href = '/solution1'}>Saral eWay</button></li>
            <li><button onClick={() => window.location.href = '/solution2'}>Saral Transport</button></li>
          </ul>
        </li>
        <li><a href="/ourwork">Our Work</a></li>
  
        {/* Resources Dropdown */}
        <li className={`dropdown ${isResourcesDropdownOpen ? 'active' : ''}`}>
          <button onClick={toggleResourcesDropdown}>
            Resources {isResourcesDropdownOpen ? '▲' : '▼'}
          </button>
          <ul className="dropdown-menu">
            <li><button onClick={() => window.location.href = '/resource1'}>Articles</button></li>
            <li><button onClick={() => window.location.href = '/resource2'}>Helpful Resources</button></li>
          </ul>
        </li>
  
        
        <li><a href="/aboutus">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
