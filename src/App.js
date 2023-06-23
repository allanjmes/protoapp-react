import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Topbar from "./global/Topbar/Topbar";
import Hero from './components/Hero/Hero';
import Products from "./components/Products/Products";
import Download from "./components/Download/Download";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app">
      <main className="content">
        <Topbar />
        <Hero screenWidth={screenWidth} />
        <Products />
        <Download screenWidth={screenWidth} />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}

export default App;
