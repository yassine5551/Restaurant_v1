import React from "react";
import Header from "../components/Header";

import MainDish from "../components/MainDish";
import Footer from "../components/Footer"
import Appetizers from "../components/Appetizers";
import NewsLatter from "../components/NewsLatter";
const Menu = () => {
  return (
    <>
      <Header />

      {/* main dishes */}

      <MainDish />

      {/* Appetizer dish */}

      <Appetizers />
      
    <div className="mt-12">

    <NewsLatter/>
    </div>
      {/* footer */}
      <Footer/>
    </>
  );
};

export default Menu;
