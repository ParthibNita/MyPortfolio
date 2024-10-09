import React from "react";
import Navbar from "./sections/Navbar";
import HeroSection from "./sections/HeroSection";
import About from "./sections/About";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
    </main>
  );
};

export default App;
