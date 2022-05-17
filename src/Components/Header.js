import React, { useState } from "react";
import "../Css/Header.css";
import logo from "../Assets/logo.jpg";
import MobileLinks from "./MobileLinks";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleShow = () => {
    setShowLinks(!showLinks);
    console.log("first");
  };
  return (
    <>
      {showLinks && <MobileLinks handleShow={handleShow} />}
      <div className="header-main">
        <div className="menue-icon" onClick={handleShow}>
          <GiHamburgerMenu />
        </div>
        <div className="container">
          <div className="row mx-md-5">
            <div className="header">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="nav">
                <a>
                  <span>contact us</span>
                </a>
                <a>
                  <span>Know your fit</span>
                </a>
                <a>
                  <span>guide to buying</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
