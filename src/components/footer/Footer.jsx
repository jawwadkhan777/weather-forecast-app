import React from "react";
import "./Footer.scss";
import personal_image from "../../assets/Cover Photo.jpeg";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <span>Developed By:</span>
        <div className="footer_left_personal">
          <img src={personal_image} alt="loading..." />
          <span>Muhammad Jawwad Khan</span>
        </div>
      </div>

      <div className="footer_right">
        <Link to={"https://www.linkedin.com/in/jawwadkhan777"} target="blank">
          <FaLinkedin size={35} className="logos" />
        </Link>
        <Link to={"https://github.com/jawwadkhan777"} target="blank">
          <FaGithub size={35} className="logos" />
        </Link>
        <Link to={"https://www.facebook.com/jawwad777/"} target="blank">
          <FaFacebook size={35} className="logos" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
