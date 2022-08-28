import React from "react";
import "../Header/Header.scss";
import icons from "../../assets/icons/icons.svg";
import enter from "../../assets/icons/enter.svg";
import menu from "../../assets/pdpicons/pdpuz-menu.svg";
import menu1 from "../../assets/pdpicons/pdpuz-menu1.svg";
import { useState } from "react";
import {  NavLink  } from "react-router-dom"

const Header = () => {

  return (
    <div className="header">
      <div className="container">
        <nav className="header__nav">
          <NavLink  className="header__nav_link" to="/">
            <img className="header__nav_link_img" src={icons} alt="" />
          </NavLink>
            <ul className="header__nav_ul">
              <li className="header__nav_ul_li">
                <NavLink to="/activekurs"
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
            </ul>
          <button
            className="header__nav_button"
          >
            <img src={menu1} alt="" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
