import React from "react";
import "../Css/Reviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Star from "./Star";
import dataa from "../Data";
const Reviews = () => {
  // settings for slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1283,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-5">
      <div className="row my-4 mx-4">
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
                    <div className="message py-1 pb-1">{prod.message}</div>
                    <div className="client ">{prod.client}</div>
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
