import React from "react";
import "../Css/Reviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Star from "./Star";
import dataa from "../Data";
const Reviews = () => {
  // settings for slider
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="container my-5">
      <div className="row my-4">
        <div className="col-12 reviews">
          <div className="Revies-heading">
            Hear From Our Customers in Their Own Words
          </div>
          <Slider {...settings}>
            {dataa.map((prod) => {
              return (
                <div className="review-card">
                  <div className="inner-card">
                    <div className="star">
                      <Star rat={prod.rating} />
                    </div>
                    <div className="reviews-name">{prod.heading}</div>
                    <div className="message py-3 pb-5">{prod.message}</div>
                    <div className="client py-2">{prod.client}</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
