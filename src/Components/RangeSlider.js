import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
    <div className="container my-5">
      <div className="row my-5">
        <div className="range-top mt-5">New Blinds Collection Range by Ivy</div>
        <div className="range-heading mb-3">
          Our Unique Blinds Range From Roller, Venetian to Perfect Fit Blinds &
          More Helps You Create Unique Spaces
        </div>

        {/* slider */}
        <Slider {...settings}>
          <div className="container-fluid range my-5">
            <div className="row">
              <div className="range-image col-6">
                <img src="https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80" />
              </div>
              <div className="slider-data col-6">
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
                <img src="https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80" />
              </div>
              <div className="slider-data col-6">
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
                <img src="https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80" />
              </div>
              <div className="slider-data col-6">
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
        </Slider>
      </div>
    </div>
  );
};

export default RangeSlider;
