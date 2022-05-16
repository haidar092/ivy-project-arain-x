import React from "react";
import "../Css/Header.css";
import logo from "../Assets/logo.jpg";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav">
        <a>
          <span>guide to buying</span>
        </a>
        <a>
          <span>Know your fit</span>
        </a>
        <a>
          <span>contact us</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
