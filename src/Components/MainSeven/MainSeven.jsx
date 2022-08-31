import React from "react";
import "../MainSeven/MainSeven.scss";
import checkSertifekati from "../../assets/pdpicons/check-sertificate.svg";
import people from "../../assets/icons/people.svg";
import right from "../../assets/pdpicons/course-right.svg";
import peoples from "../../API/student";
import { useState } from "react";

// import images student
import people1 from "../../assets/student/one.png";
import people2 from "../../assets/student/two.png";
import people3 from "../../assets/student/three.png";
import people4 from "../../assets/student/four.png";
import people5 from "../../assets/student/five.png";
import people6 from "../../assets/student/six.png";
import people7 from "../../assets/student/seven.png";
import people8 from "../../assets/student/eight.png";
import people9 from "../../assets/student/nine.png";
import people10 from "../../assets/student/ten.png";
import people11 from "../../assets/student/eleven.png";
import people12 from "../../assets/student/eighteen.png";
import people13 from "../../assets/student/fifteen.png";
import people14 from "../../assets/student/fourteen.png";
import people15 from "../../assets/student/seventen.png";
import people16 from "../../assets/student/sexteen.png";
import people17 from "../../assets/student/thirteen.png";
import people18 from "../../assets/student/twenty.png";

const MainSeven = () => {
  return (
    <div className="mainseven">
      <div className="container">
        <div className="mainseven__box">
          <div className="mainseven__box_left">
            <div className="mainseven__box_left_box">
              <img
                className="mainseven__box_left_box_img"
                src={people}
                alt=""
              />
              <p className="mainseven__box_left_box_description">
                500+ talabalarimiz
              </p>
              <p className="mainseven__box_left_box_desc">
                PDP akademiyasi o’z faoliyati davomida 500 dan ortiq dasturlash
                sohasi vakillarini tayyorlagan.
              </p>
              <button className="mainseven__box_left_box_btn">
                <img
                  className="mainseven__box_left_box_btn_img"
                  src={checkSertifekati}
                  alt=""
                />
                Sertifikatni tekshiring
                <img
                  className="mainseven__box_left_box_btn_imges"
                  src={right}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="mainseven__box_right">
            <ul className="mainseven__box_right_ul">
              <li className="mainseven__box_right_ul_li">
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people1}
                  alt=""
                />
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people2}
                  alt=""
                />
              </li>
              <li className="mainseven__box_right_ul_li">
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people3}
                  alt=""
                />
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people4}
                  alt=""
                />
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people5}
                  alt=""
                />
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people6}
                  alt=""
                />
              </li>
              <li className="mainseven__box_right_ul_li">
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people7}
                  alt=""
                />
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people8}
                  alt=""
                />
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people9}
                  alt=""
                />
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people10}
                  alt=""
                />
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people11}
                  alt=""
                />
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people12}
                  alt=""
                />
              </li>
              <li className="mainseven__box_right_ul_li">
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people13}
                  alt=""
                />
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people14}
                  alt=""
                />
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people15}
                  alt=""
                />
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people16}
                  alt=""
                />
              </li>
              <li className="mainseven__box_right_ul_li">
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people17}
                  alt=""
                />
                <img
                  className="mainseven__box_right_ul_li_img"
                  src={people18}
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSeven;
