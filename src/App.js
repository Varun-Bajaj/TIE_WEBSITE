import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home.js';
import Solutions from './components/pages/Solutions.js';
import OurWork from './components/pages/OurWork.js';
import Resources from './components/pages/Resources.js';
import AboutUs from './components/pages/AboutUs.js';
import Blogs from './components/pages/Blogs.js'; 
import PostPage from './components/pages/postpage1.js';
import ContactUs from './components/pages/ContactUs.js';
import Footer from './components/Footer.js'; 
import SaralTransport from  './components/pages/SaralTransport.js';
import SaralEway from './components/pages/SaralEway.js';
import OtherProducts from './components/pages/Other_Products.js';
import OtherProductsDetails from  './components/pages/Other_Products_detail.js';

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
      case '/blogs':
        return <Blogs navigate={navigate} />; // Pass navigate to Blogs
      case '/postpage1': // Ensure this route is correct
        return <PostPage />; // Make sure you render PostPage here
      case '/contactus':
        return <ContactUs />;
      case '/saraltransport':
        return  <SaralTransport />;
      case '/saraleway':
        return <SaralEway />;
      case '/otherproducts':
        return <OtherProducts />;
      case '/otherproductsdetails':
        return  <OtherProductsDetails />;
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
