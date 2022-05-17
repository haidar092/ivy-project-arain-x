import React from "react";
import ReactStars from "react-rating-stars-component";
const Star = ({rat}) => {
  return (
    <ReactStars
      count={5}
      value={rat}
      edit={false}
      size={20}
      isHalf={true}
      activeColor="#ffd700"
    />
  );
};

export default Star;
