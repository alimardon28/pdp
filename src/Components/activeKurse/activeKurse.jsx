import React from "react";
import "../activeKurse/activeKurse.scss";
import info from "../../assets/icons/clearx.svg";
import clear from "../../assets/icons/xclear.svg";
import right from "../../assets/pdpicons/course-right.svg";
import { NavLink } from "react-router-dom";

const ActiveKurse = () => {
  return (
    <div className="activekurse">
      <div className="container">
        <div className="activekurse__box">
          <div className="activekurse__box_left">
            <ul className="activekurse__box_left_ul">
              <li className="activekurse__box_left_ul_li activekurse__box_left_ul_li1">
                <button className="activekurse__box_left_ul_li_btn activekurse__box_left_ul_li_btn1 activekurse__box_left_ul_li_active">
                  Online
                </button>
                <button className="activekurse__box_left_ul_li_btn activekurse__box_left_ul_li_btn2">
                  Onsite
                </button>
              </li>
              <li className="activekurse__box_left_ul_li activekurse__box_left_ul_li2">
                <button className="activekurse__box_left_ul_li_btn activekurse__box_left_ul_li_btn3">
                  Offline kurslar
                </button>
              </li>
              <li className="activekurse__box_left_ul_li activekurse__box_left_ul_li3">
                <button className="activekurse__box_left_ul_li_btn activekurse__box_left_ul_li_btn4">
                  Barcha kurslar
                  <img
                    className="activekurse__box_left_ul_li_btn4_img"
                    src={right}
                    alt=""
                  />
                </button>
              </li>
            </ul>
          </div>
          <div className="activekurse__box_right">
            <ul className="activekurse__box_right_ul">
              <li className="activekurse__box_right_ul_li">
                <p className="activekurse__box_right_ul_li_desc">
                  Kurslar <img src={info} alt="" />
                </p>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  C# Development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  ReactJS Development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Frontend Development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Android App Development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Data Structures and Algorithms
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  {" "}
                  Foundation
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  ReactJS Development 2021
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Spring Development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  {" "}
                  Django development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  PDP START
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Python development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  iOS App Development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Flutter App Development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  {" "}
                  Database Development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Android Development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Java Development
                </a>
              </li>
              <li className="activekurse__box_right_ul_li">
                <p className="activekurse__box_right_ul_li_desc">
                  Mutaxassislik <img src={info} alt="" />
                </p>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Android App Development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Python Backend
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Java Backend
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  iOS
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Flutter
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  {" "}
                  Frontend
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Android
                </a>
              </li>
              <li className="activekurse__box_right_ul_li">
                <p className="activekurse__box_right_ul_li_desc">
                  Bootcamp <img src={info} alt="" />
                </p>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Java Backend Development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Frontend Development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  Flutter Development
                </a>
                <a className="activekurse__box_right_ul_li_link" href="#">
                  .NET development
                </a>
              </li>
            </ul>

            <div className="activekurse__box_righttop">
              <NavLink to="/" className="activekurse__box_righttop_btn">
                <img
                  className="activekurse__box_righttop_btn_img"
                  src={clear}
                  alt=""
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveKurse;
//
//
//
//
//
//
//
