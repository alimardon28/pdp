import React from "react";
import "../Header/Header.scss";
import icons from "../../assets/icons/icons.svg";
import enter from "../../assets/icons/enter.svg";
import menu from "../../assets/pdpicons/pdpuz-menu.svg";
import menu1 from "../../assets/pdpicons/pdpuz-menu1.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const Header = () => {
  // scrool header
  const [open, setOpen] = useState(false);

  const bgColor = () => {
    if (window.scrollY >= 90) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  window.addEventListener("scroll", bgColor);

  // responsive navbar
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("header__nav_responsive_nav");
  };

  return (
    <div className={open ? "header header_bg" : "header"}>
      <div className="container">
        <nav className="header__nav">
          <NavLink className="header__nav_link" to="/">
            <img className="header__nav_link_img" src={icons} alt="" />
          </NavLink>
          <ul className="header__nav_ul" ref={navRef}>
            <li className="header__nav_ul_li">
              <NavLink
                to="/activekurs"
                className="header__nav_ul_li_a header__nav_ul_li_links"
              >
                <img src={menu} alt="" />
                kurslarimiz
              </NavLink>
            </li>
            <li className="header__nav_ul_li">
              <a
                className="header__nav_ul_li_a header__nav_ul_li_link"
                href="#"
              >
                qo'llanma
                <span></span>
              </a>
              <a
                className="header__nav_ul_li_a header__nav_ul_li_link"
                href="#"
              >
                unicorn
                <span></span>
              </a>
            </li>
            <li className="header__nav_ul_li">
              <a
                className="header__nav_ul_li_a header__nav_ul_li_links"
                href="#"
              >
                <img src={enter} alt="" />
                kirish
              </a>
            </li>
            <li className="header__nav_ul_li header__nav_ul_lis">
              <button className="header__nav_ul_li_btn" onClick={showNavbar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-left"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            </li>
          </ul>
          <button className="header__nav_button" onClick={showNavbar}>
            <img src={menu1} alt="" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
