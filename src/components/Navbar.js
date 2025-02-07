import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../Images/logo.png"; // Ensure the image path is correct

const Navbar = ({ navigate }) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isSolutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  
  const solutionsRef = useRef(null);
  const resourcesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
      setSolutionsDropdownOpen(false);
      setResourcesDropdownOpen(false);
    };

    const handleClickOutside = (event) => {
      if (
        solutionsRef.current && !solutionsRef.current.contains(event.target) &&
        resourcesRef.current && !resourcesRef.current.contains(event.target)
      ) {
        setSolutionsDropdownOpen(false);
        setResourcesDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSolutionsDropdown = () => {
    setSolutionsDropdownOpen(!isSolutionsDropdownOpen);
    if (isResourcesDropdownOpen) setResourcesDropdownOpen(false);
  };

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!isResourcesDropdownOpen);
    if (isSolutionsDropdownOpen) setSolutionsDropdownOpen(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setSolutionsDropdownOpen(false);
    setResourcesDropdownOpen(false);
  };

  return (
    <nav className={`navbar ${isShrunk ? 'shrink' : ''}`}>
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
        <div className="brand-info">
          <span className="navbar-brand-text">Tech It Easy</span>
          <span className="navbar-tagline">Simpler - Smarter - Faster</span>
        </div>
      </div>

      <ul className="navbar-links">
        <li><button onClick={() => handleNavigate('/')}>Home</button></li>

        <li ref={solutionsRef} className={`dropdown ${isSolutionsDropdownOpen ? 'active' : ''}`}>
          <button onClick={toggleSolutionsDropdown}>
            Solutions {isSolutionsDropdownOpen ? '▲' : '▼'}
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-menu-btns" onClick={() => handleNavigate('/saraleway')}>Saral eWay</button></li>
            <li><button className="dropdown-menu-btns" onClick={() => handleNavigate('/saraltransport')}>Saral Transport</button></li>
          </ul>
        </li>
        <li><button onClick={() => handleNavigate('/ourwork')}>Our Work</button></li>

        <li ref={resourcesRef} className={`dropdown ${isResourcesDropdownOpen ? 'active' : ''}`}>
          <button onClick={toggleResourcesDropdown}>
            Resources {isResourcesDropdownOpen ? '▲' : '▼'}
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-menu-btns" onClick={() => handleNavigate('/blogs')}>Articles</button></li>
            <li><button className="dropdown-menu-btns" onClick={() => handleNavigate('/resources')}>Helpful Resources</button></li>
          </ul>
        </li>

        <li><button onClick={() => handleNavigate('/aboutus')}>About Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
