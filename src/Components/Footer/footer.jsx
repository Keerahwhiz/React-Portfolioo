import React from "react";
import footer from "./footer.css";
import{FaFacebookF} from 'react-icons/fa'
import{FiInstagram }from 'react-icons/fi'
import {IoLogoTwitter}from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Keerah
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy; Keerah 2023
        </small>
      </div>
    </footer>
  );
};

export default Footer;
