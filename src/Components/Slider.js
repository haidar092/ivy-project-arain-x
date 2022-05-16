import React from "react";
import "../Css/Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  // settings for slider
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className="top">
        <div className="slider-heading">
          BOOK A FREE NO OBLIGATION CONSULTATION TODAY
        </div>
        <button className="slider-button">BOOK NOW</button>
      </div>
      {/* slider */}
      <Slider {...settings}>
        <div className="wrap">
          <div className="gradiant">
            <h1>
              Made to Measure Blinds <br />
              in the UK
            </h1>
            <p>
              Locally & Sustainably Sourced
              <br /> Explore Our Recycled Premium Blinds Range Today
            </p>
          </div>
        </div>
        <div className="wrap-1">
          <div className="gradiant">
            <h1>10% OFF ON VENETIAN BLINDS</h1>
            <p>
              Available in Wooden, Faux Wooden & Metal
              <br /> From Only £89
            </p>
          </div>
        </div>
        <div className="wrap-2">
          <div className="gradiant">
            <h1>3 VERTICAL BLINDS FOR <br/> £79</h1>
            <p>Explore the Complete Range</p>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default ImgSlider;
