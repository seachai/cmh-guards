import React from "react";
import "./HomePage.scss";

// Components
import Header from "../../Components/Header/Header";
import Carousel from "../../Components/Carousel/Carousel";
import About from "../../Components/About/About";

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <About />
    </>
  );
};

export default HomePage;
