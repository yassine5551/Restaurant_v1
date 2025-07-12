import React from "react";
import Cards from "../components/Cards"
import Header from "../components/Header";
import Hero from "../components/Hero";
import Details from "../components/Details";
import Chef from "../components/Chef";
import Testimonials from "../components/Testimonials";
import NewsLatter from "../components/NewsLatter";
import Footer from "../components/Footer";
const Accuile = () => {
  return (
    <>
    <div className="mx-[7%]">

      <Header />
      <Hero />
      <Cards />
      <Details />
      <Chef />
      <Testimonials />
      <NewsLatter />
      <Footer />
    </div>
    </>
  );
};

export default Accuile;
