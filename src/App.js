import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home.js';
import Solutions from './components/pages/Solutions.js';
import OurWork from './components/pages/OurWork.js';
import Resources from './components/pages/Resources.js';
import AboutUs from './components/pages/AboutUs.js';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'solutions':
        return <Solutions />;
      case 'ourwork':
        return <OurWork />;
      case 'resources':
        return <Resources />;
      case 'aboutus':
        return <AboutUs />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
