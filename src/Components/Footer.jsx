import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="#">Use Cases</a>
        <a href="#">Explore</a>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} EcoPart. All rights reserved.
      </div>
      <div className="footer-social">
        <a href="#"><FaXTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaLinkedin /></a>
      </div>
    </footer>
  );
};

export default Footer;
