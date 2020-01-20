import React from "react";
import "./HomePage.scss";

// Components
import Header from "../../Components/Header/Header";
import Carousel from "../../Components/Carousel/Carousel";
import About from "../../Components/About/About";
import Quote from "../../Components/Quote/Quote";
import Quality from "../../Components/Quality/Quality";
import Reviews from "../../Components/Reviews/Reviews";

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      <Quote />
      <Quality />
      <Reviews />
    </>
  );
};

export default HomePage;
