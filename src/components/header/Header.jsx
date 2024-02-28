import React from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/WeatherHub logo.png";


const pages = [
  { label: "ABOUT APP", to: "/about" },
  { label: "REVIEW", to: "/review" },
];

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"} className="header_logo">
        <img src={logo} alt="loading..." />
      </Link>

      <ul className="header_pages">
        {pages.map((page, key) => (
          <li key={key} className="header_pages_list">
            <NavLink to={page.to} className="header_pages_list_item">
              {page.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
