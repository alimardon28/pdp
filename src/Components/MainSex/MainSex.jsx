import React, { useState } from "react";
import "../MainSex/MainSex.scss";
import left from "../../assets/pdpicons/carousel-arrow-left.svg";
import right from "../../assets/pdpicons/carousel-arrow.svg";
import diamond from "../../assets/images/diamond.svg";
import personal_api from "../../API/personal";
import { useRef } from "react";

const MainSex = () => {
  const [personal, setPersonal] = useState(personal_api);
  const [point, setPoint] = useState(0);

  const prevPerson = () => {
    if(point ===  personal.id){
console.log('work');
    }
  };
  const nextPerson = () => {
    if(point ===  personal.id){
      console.log('fork');
          }
  };

  return (
    <div className="mainsex">
      <div className="container">
        <div className="mainsex__aside">
          <div className="mainsex__left">
            <div className="mainsex__left_box">
              <img className="mainsex__left_box_img" src={diamond} alt="" />
              <h2 className="mainsex__left_box_title">Personal imkoniyatlar</h2>
              <p className="mainsex__left_box_desc">
                Yagona tizim - Har bir talaba uchun shaxsiy kabinet mavjud
                bo’lib, bunda o’quv jarayonidagi barcha ma’lumotlarni ushbu
                yagona tizim orqali kuzatishlari mumkin
              </p>
              <div className="mainsex__left_box_buttons">
                <button
                  className="mainsex__left_box_buttons_btn"
                  onClick={() => prevPerson()}
                >
                  <img
                    className="mainsex__left_box_buttons_btn_img mainsex__left_box_buttons_btn_imgs"
                    src={right}
                    alt=""
                  />
                </button>
                <button
                  className="mainsex__left_box_buttons_btn"
                  onClick={() => nextPerson()}
                >
                  <img
                    className="mainsex__left_box_buttons_btn_img"
                    src={right}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="mainsex__right">
            <ul className="mainsex__right_ul">
              {personal?.map((data, personIndex) => {
                return (
                  <li className="mainsex__right_ul_li" key={data.id} id={personIndex}>
                    <h2 className="mainsex__right_ul_li_title">
                      {data.personal_title}
                    </h2>
                    <p className="mainsex__right_ul_li_desc">
                      {data.personal_desc}
                    </p>
                    <img
                      className="mainsex__right_ul_li_img"
                      src={data.personal_img}
                      alt=""
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSex;
