import React from "react";
import d1 from "../Assets/Clipping Mask Your Image.jpg";
import "../Css/Premium.css";
const Premium = () => {
  return (
    <div className="container my-3 ">
      <div className="row mx-5 premium py-5">
        <div className="col-md-6">
          <div className="data-container">
            <h1>
              Premium Quality Blinds <br /> at <br />
              Affordable Prices
            </h1>
            <p className="my-3">
              Ivy’s blinds range of premium quality made to measure blinds are
              meant to provide a custom fit solution to design your interior
              spaces at affordable prices. Our blinds are made of the highest
              quality materials sourced sustainably and locally from here in the
              UK. With our skilled artisans and proven manufacturing techniques,
              we offer you with the best blinds you can find in the UK. Customer
              satisfaction is at the heart of what we do, and so we offer a
              complete service right from the start to the finish. Read our
              complete guide to buying blinds to know what makes Ivy Blinds
              stand apart.
            </p>
            <button>Order Now</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="image-container-pemium">
            <img src={d1} alt="premium" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
