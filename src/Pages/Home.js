import React from "react";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Premium from "../Components/Premium";
import RangeSlider from "../Components/RangeSlider";
import Reviews from "../Components/Reviews";
import ImgSlider from "../Components/Slider";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header />
          <Navbar />
          <ImgSlider />
          <Gallery />
          <Premium />
          <RangeSlider />
          <Reviews />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
