import React from "react";
import Navbar from "./sections/Navbar";
import HeroSection from "./sections/HeroSection";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
