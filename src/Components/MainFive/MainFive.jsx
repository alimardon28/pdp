import React from "react";
import "../MainFive/MainFive.scss";
import student from "../../assets/images/student.png";
import right from "../../assets/pdpicons/course-right.svg";

const MainFive = () => {
  return (
    <div className="mainfive">
      <div className="container">
        <ul className="mainfive__ul">
          <li className="mainfive__ul_li">
            <div className="mainfive__ul_li_left">
              <h3 className="mainfive__ul_li_left_title">Imtiyozlar</h3>
              <p className="mainfive__ul_li_left_dec">
                Agarda sizning hozirgi moliyaviy vaziyatingiz bizda o‘qish
                imkonini bermasa afsuslanmang siz uchun maxsus imtiyozlarimiz
                mavjud
              </p>
              <button className="mainfive__ul_li_left_btn">
                batafsil
                <img
                  className="mainfive__ul_li_left_btn_img"
                  src={right}
                  alt=""
                />
              </button>
            </div>
            <div className="mainfive__ul_li_right">
              <img className="mainfive__ul_li_right_img" src={student} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainFive;
