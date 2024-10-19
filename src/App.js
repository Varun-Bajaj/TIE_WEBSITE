import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home.js';
import Solutions from './components/pages/Solutions.js';
import OurWork from './components/pages/OurWork.js';
import Resources from './components/pages/Resources.js';
import AboutUs from './components/pages/AboutUs.js';
import Blogs from './components/pages/Blogs.js'; // Import Blogs component
import Footer from './components/Footer.js'; // Import Footer component

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (page) => {
    window.history.pushState({}, '', page); // Change the URL without reloading
    setCurrentPage(page); // Update the state to render the correct component
  };

  const renderPage = () => {
    switch (currentPage) {
      case '/solutions':
        return <Solutions />;
      case '/ourwork':
        return <OurWork />;
      case '/resources':
        return <Resources />;
      case '/aboutus':
        return <AboutUs />;
      case '/blogs':  // Add case for blogs page
        return <Blogs />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar navigate={navigate} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
