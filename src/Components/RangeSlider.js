import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import r1 from "../Assets/Your Image Details.jpg";
import r2 from "../Assets/Your Image Details-1.png";
import r3 from "../Assets/Your Image Details-2.png";
import r4 from "../Assets/Your Image Details-3.png";
import r5 from "../Assets/Your Image Details-4.png";
const RangeSlider = () => {
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
    <div className="container range-slider-main my-1 ">
      <div className="row  mx-md-5">
        <div className="range-top mt-5">New Blinds Collection Range by Ivy</div>
        <div className="range-heading mb-3">
          Our Unique Blinds Range From Roller, Venetian to Perfect Fit Blinds &
          More Helps You Create Unique Spaces
        </div>

        {/* slider */}
        <Slider {...settings}>
          <div className="container-fluid range my-5">
            <div className="row">
              <div className="range-image col-md-6">
                <img src={r1} alt="first" />
              </div>
              <div className="slider-data col-md-6">
                <div className="range-slider-data">
                  <h1>Lux Appeal</h1>
                  <p>
                    Venetian Blinds with Edgy, Shimmering Finishes For Luxurious
                    Interiors
                  </p>
                  <div className="slider-buttons">
                    <button>VIEW MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid range my-5">
            <div className="row">
              <div className="range-image col-6">
                <img src={r2} alt="second" />
              </div>
              <div className="slider-data col-6">
                <div className="range-slider-data">
                  <h1>Pastel Hues </h1>
                  <p>Earthy, Pastel Toned Roller Blinds For Calming Spaces</p>
                  <div className="slider-buttons">
                    <button>VIEW MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid range my-5">
            <div className="row">
              <div className="range-image col-6">
                <img src={r3} alt="r3" />
              </div>
              <div className="slider-data col-6">
                <div className="range-slider-data">
                  <h1>Countrycore </h1>
                  <p>
                    Countrycore Nature Inspired Wooden Blinds For A Balanced
                    Aesthetic
                  </p>
                  <div className="slider-buttons">
                    <button>VIEW MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid range my-5">
            <div className="row">
              <div className="range-image col-6">
                <img src={r4} alt="r3" />
              </div>
              <div className="slider-data col-6">
                <div className="range-slider-data">
                  <h1>Pattern Twist </h1>
                  <p>
                    Pattern Twist Patterned Vertical Blinds Blending Form and
                    Functionality
                  </p>
                  <div className="slider-buttons">
                    <button>VIEW MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid range my-5">
            <div className="row">
              <div className="range-image col-6">
                <img src={r5} alt="r3" />
              </div>
              <div className="slider-data col-6">
                <div className="range-slider-data">
                  <h1>Lights Out </h1>
                  <p>
                    Lights Out Deep, Dark Hued Skylight Blinds For Peace Within
                  </p>
                  <div className="slider-buttons">
                    <button>VIEW MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default RangeSlider;
