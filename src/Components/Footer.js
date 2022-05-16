import React from "react";
import "../Css/Footer.css";
import logo from "../Assets/logo-footer.png";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="container-fluid footer-background">
      <div className="container ">
        <div className="row py-4 footer-border mb-3">
          <div className="col-md-3">
            <div className="footer-image">
              <img src={logo} alt="logo" />
            </div>
            <div className="footer-location my-2">
              <div className="icon">
                <HiLocationMarker />
              </div>
              <div className="footer-text">
                Ivy Beds & Blinds, Potters Lane, Wednesbury, WS10 7LH
              </div>
            </div>
            <div className="footer-location my-3">
              <div className="icon">
                <IoMdCall />
              </div>
              <div className="footer-text">0121 340 2885</div>
            </div>
            <div className="footer-location my-3">
              <div className="icon">
                <BsGlobe2 />
              </div>
              <div className="footer-text">www.ivybedsandblinds.com</div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-terms pt-5">
              <div className="terms-heading">Terms & Policies</div>
              <a href="">Privacy Policy</a>
              <a href="">Returns Policy</a>
              <a href="">Terms & Conditions</a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-terms pt-5">
              <div className="terms-heading">Need Help?</div>
              <a href="">Contact Us</a>
              <a href="">Know Your Fit</a>
              <a href="">Guide to Buying</a>
              <a href="">Get a Quote</a>
              <a href="">Place an Order</a>
              <a href="">Shipping & Delivery</a>
              <a href="">Payment Methods</a>
              <a href="">FAQs</a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-terms pt-5">
              <div className="terms-heading">Ivy Blinds</div>
              <a href="">About Ivy</a>
              <a href="">Our Products</a>
              <a href="">Made To Measure Blinds</a>
              <a href="">Child Safet</a>
              <a href="">Price Comparison</a>
              <a href="">Competition</a>
              <a href="">Reviews</a>
              <a href="">Customer Satisfaction</a>
              <a href="">Blogs</a>
              <a href="">Guarantee</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-terms pt-5">
              <div className="terms-heading">Follow Us On</div>
              <div className="footer-social">
                <a href="">
                  <BsInstagram />
                </a>
                <a href="">
                  <BsTwitter />
                </a>
                <a href="">
                  <FaFacebookF />
                </a>
                <a href="">
                  <BsYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-write pb-4">
        &copy; 2022 Ivy Beds & Blinds
        </div>
      </div>
    </div>
  );
};

export default Footer;
