import React from "react";
import "../Css/Gallery.css";
import dataa from "../Data";
const Gallery = () => {
  return (
    <div className="container">
      <div className="row my-3 mx-md-5">
        {dataa.map((prod) => {
          return (
            <div className="col-md-4 col-sm-6  my-2">
              <div className="gallery-main">
                <h3>{prod.name}</h3>
                <div className="gallery-imagecontaner">
                  <img src={prod.img} alt="pic" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
