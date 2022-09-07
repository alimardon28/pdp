import React from "react";
import "../MainFour/MainFour.scss";
import direction from "../../API/direction";
import { useState } from "react";

const MainFour = () => {
  const [data] = useState(direction);

  return (
    <div className="mainfour">
      <div className="container">
        <div className="mainfour__top">
          <div className="mainfour__top_box">
            <h2 className="mainfour__top_box_title">
              O'zingizga mos yo'nalish tanlang
            </h2>
            <p className="mainfour__top_box_desc">
              Dasturlash sohasida eng rivojlangan va talabi yuqori bo'lgan
              kurslardan birini tanlang. Kurs davomida portfolio to'plash,
              rezyume hosil qilish va ish topishingizga esa biz yordam beramiz.
            </p>
          </div>
          <ul className="mainfour__top_ul">
            {data?.map((data) => {
              return (
                <li className="mainfour__top_ul_li" id={data.id}>
                  <div className="mainfour__top_ul_li_top">
                    <p className="mainfour__top_ul_li_top_desc">
                      {data.direction}
                    </p>
                    <button className="mainfour__top_ul_li_top_btn">
                      <svg
                      className="mainfour__top_ul_li_top_btn_svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414V9.414Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mainfour__top_ul_li_bottom">
                    <div className="mainfour__top_ul_li_bottom_box">
                      <span className="mainfour__top_ul_li_bottom_box_span">
                        Kurslar soni
                      </span>
                      <span className="mainfour__top_ul_li_bottom_box_num">
                        {data.num} ta
                      </span>
                    </div>
                    <div className="mainfour__top_ul_li_bottom_box_images">
                      <img
                        className="mainfour__top_ul_li_bottom_images_img"
                        src={data.avatar}
                        alt=""
                      />
                      {/* <img
                        className="mainfour__top_ul_li_bottom_images_img"
                        src={data.avatar1}
                        alt=""
                      /> */}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainFour;
