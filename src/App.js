import React from "react";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import FooterSecond from "./components/FooterSecond";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <ContactMe />
      <Footer />
      <FooterSecond />
    </div>
  );
}

export default App;
