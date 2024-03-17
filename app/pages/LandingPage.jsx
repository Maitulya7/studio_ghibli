"use client";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from "../components/Sections/AboutUs";
import Hero from "../components/Sections/Hero";
import Movies from "../components/Sections/Movies";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Movies/>
      <AboutUs/>
      <Footer/>
    </>
  );
};

export default LandingPage;
