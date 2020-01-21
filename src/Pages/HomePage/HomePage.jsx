import React from "react";
import "./HomePage.scss";

// Components
import Header from "../../Components/Header/Header";
import Carousel from "../../Components/Carousel/Carousel";
import About from "../../Components/About/About";
import Quote from "../../Components/Quote/Quote";
import Quality from "../../Components/Quality/Quality";
import Reviews from "../../Components/Reviews/Reviews";
import History from "../../Components/History/History";
import Contact from "../../Components/Contact/Contact";

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      <Quality />
      <Quote />
      <History />
      <Reviews />
      <Quote />
      <Contact />
    </>
  );
};

export default HomePage;
