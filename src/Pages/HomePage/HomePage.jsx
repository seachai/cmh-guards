import React from "react";
import "./HomePage.scss";

// Components
import Header from "../../Components/Header/Header";
import Carousel from "../../Components/Carousel/Carousel";
import About from "../../Components/About/About";
import Quote from "../../Components/Quote/Quote";

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      <Quote />
    </>
  );
};

export default HomePage;
