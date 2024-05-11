import React from "react";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Hero from "./screen/Hero";
import Footer from "./Components/Footer.jsx";
import About from "./screen/About.jsx";
import ComingSoon from "./screen/ComingSoon.jsx";
import News from "./screen/News.jsx";
import TeamPage from "./screen/TeamPage.jsx";
import ContactUs from "./screen/ContactUs.jsx";

function App() {
  
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ComingSoon />} />
        <Route path="/news" element={<News />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
