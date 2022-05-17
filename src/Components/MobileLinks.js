import React from "react";

const MobileLinks = ({ handleShow }) => {
  return (
    <div className="mobile-screen" onClick={handleShow}>
      <div className="mobile-links"onClick={(e)=>{e.stopPropagation();}}>
        <a>
          <span>Home</span>
        </a>
        <a>
          <span>About us</span>
        </a>
        <a>
          <span>our products</span>
        </a>
        <a>
          <span>why ivy</span>
        </a>
        <a>
          <span>blog</span>
        </a>
      </div>
    </div>
  );
};

export default MobileLinks;
