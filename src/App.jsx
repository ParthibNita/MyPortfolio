import React from "react";
import Navbar from "./sections/Navbar";
import HeroSection from "./sections/HeroSection";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default App;
