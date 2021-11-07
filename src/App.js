import React, { useState } from "react";
import Navbar from './components/Navbar';
import Scripts from './components/Scripts';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './assets/css/style.css';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'About': return <About />;
      case 'Portfolio': return <Portfolio />;
      case 'Contact': return <Contact />;
      case 'Resume': return <Resume />
      default: return;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="App">
        { renderPage() }
      </main>
      <Footer />
      <Scripts />
    </>
  );
}

export default App;
