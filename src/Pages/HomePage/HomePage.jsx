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
import Footer from "../../Components/Footer/Footer";
import Video from "../../Components/Video/Video";

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      <Quality />
      <Quote
        subtitle={"Configure your oil-tight chain guard"}
        title={"Order Online"}
        button
      />
      <Video />
      <History />
      <Reviews />
      <Quote subtitle={"We have solutions"} title={"Contact Us"} />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
