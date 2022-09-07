import React from "react";
import "../offlinekurses/offlinekurses.scss";
import offline from "../../assets/images/offline.svg";
import video from "../../assets/pdpicons/play-video.svg";

const Offlinekurses = () => {
  return (
    <div className="offlinekurses">
      <div className="container">
        <div className="offlinekurses__box">
          <ul className="offlinekurses__box_ul">
            <li className="offlinekurses__box_ul_li">
              <h1 className="offlinekurses__box_ul_li_title">
                DASTURLASHNI OFFLINE DA <span>O'RGANING</span>
              </h1>
            </li>
            <li className="offlinekurses__box_ul_li">
              <img
                className="offlinekurses__box_ul_li_offlineimg"
                src={offline}
                alt=""
              />
            </li>
            <li className="offlinekurses__box_ul_li ">
              <button className="offlinekurses__box_ul_li_btn">
                <img
                  className="offlinekurses__box_ul_li_btn_videoimg"
                  src={video}
                  alt=""
                />
              </button>
            </li>
          </ul>
          <div className="offlinekurses__box_bottom">
            <h2 className="offlinekurses__box_bottom_title">
              O'zingizga mos yo'nalish tanlang
            </h2>
            <p className="offlinekurses__box_bottom_desc">
              Dasturlash sohasida eng rivojlangan va talabi yuqori bo'lgan
              kurslardan birini tanlang. Kurs davomida portfolio to'plash,
              rezyume hosil qilish va ish topishingizga esa biz yordam beramiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offlinekurses;
