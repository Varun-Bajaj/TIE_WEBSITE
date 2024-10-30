import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Images/logo.png"; // Ensure the image path is correct

const Navbar = ({ navigate }) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isSolutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <li><button onClick={() => navigate('/')}>Home</button></li>

        <li className={`dropdown ${isSolutionsDropdownOpen ? 'active' : ''}`}>
          <button onClick={toggleSolutionsDropdown}>
            Solutions {isSolutionsDropdownOpen ? '▲' : '▼'}
          </button>
          <ul className="dropdown-menu">
            <li><button onClick={() => navigate('/solutions')}>Saral eWay</button></li>
            <li><button onClick={() => navigate('/saraltransport')}>Saral Transport</button></li>
          </ul>
        </li>
        <li><button onClick={() => navigate('/ourwork')}>Our Work</button></li>

        <li className={`dropdown ${isResourcesDropdownOpen ? 'active' : ''}`}>
          <button onClick={toggleResourcesDropdown}>
            Resources {isResourcesDropdownOpen ? '▲' : '▼'}
          </button>
          <ul className="dropdown-menu">
            <li><button onClick={() => navigate('/blogs')}>Articles</button></li> {/* Link to Blogs page */}
            <li><button onClick={() => navigate('/resources')}>Helpful Resources</button></li>
          </ul>
        </li>

        <li><button onClick={() => navigate('/aboutus')}>About Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
