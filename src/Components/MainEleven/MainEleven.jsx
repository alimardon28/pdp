import React from "react";
import "../MainEleven/MainEleven.scss";
import ecma from "../../assets/pdpApiimagesfile/download-5.png";
import uzcard from "../../assets/pdpApiimagesfile/uzcard.png";
import smart from "../../assets/pdpApiimagesfile/download-9.png";
import datasite from "../../assets/pdpApiimagesfile/download-4.png";
import fidobiznes from "../../assets/pdpApiimagesfile/download-8.png";
import mytaxi from "../../assets/pdpApiimagesfile/download-10.png";
import itpark from "../../assets/pdpApiimagesfile/itpark.png";
import global from "../../assets/pdpApiimagesfile/download.png";
import yk from "../../assets/pdpApiimagesfile/yk.svg";
import right from "../../assets/pdpicons/right-first.svg";

const MainEleven = () => {
  return (
    <div className="maineleven">
      <div className="container">
        <div className="maineleven__box">
          <div className="maineleven__box_left">
            <img  className="maineleven__box_left_img" src={yk} alt="" />
            <h3  className="maineleven__box_left_title">Bizning hamkorlarimiz sizni kutmoqda</h3>
            <p  className="maineleven__box_left_desc">
              Bizning akademiyamiz bir nechta o’nlab kompaniyalar bilan
              hamkorlik aloqalari(memorandum)ni yo’lga qo’ygan. Kurslarimizni
              tamomlagan talabalarimiz hamkor kompaniyalarda tavsiyalarimizga
              ko’ra ishga joylashish imkoniyatiga ega bo’ladilar.
            </p>
            <button  className="maineleven__box_left_btn">
              Hamkorlik qilish
              <img  className="maineleven__box_left_btn_img" src={right} alt="" />
            </button>
          </div>
          <div className="maineleven__box_right">
            <ul className="maineleven__box_right_ul">
              <li className="maineleven__box_right_ul_li">
                <img
                  className="maineleven__box_right_ul_li_img maineleven__box_right_ul_li_img1"
                  src={datasite}
                  alt=""
                />
              </li>
              <li className="maineleven__box_right_ul_li">
                <img
                  className="maineleven__box_right_ul_li_img maineleven__box_right_ul_li_img2"
                  src={smart}
                  alt=""
                />
              </li>
              <li className="maineleven__box_right_ul_li">
                <img
                  className="maineleven__box_right_ul_li_img maineleven__box_right_ul_li_img3"
                  src={fidobiznes}
                  alt=""
                />
              </li>
              <li className="maineleven__box_right_ul_li">
                <img
                  className="maineleven__box_right_ul_li_img maineleven__box_right_ul_li_img4"
                  src={ecma}
                  alt=""
                />
              </li>
              <li className="maineleven__box_right_ul_li">
                <img
                  className="maineleven__box_right_ul_li_img maineleven__box_right_ul_li_img5"
                  src={uzcard}
                  alt=""
                />
              </li>
              <li className="maineleven__box_right_ul_li">
                <img
                  className="maineleven__box_right_ul_li_img maineleven__box_right_ul_li_img6"
                  src={mytaxi}
                  alt=""
                />
              </li>
              <li className="maineleven__box_right_ul_li">
                <img
                  className="maineleven__box_right_ul_li_img maineleven__box_right_ul_li_img7"
                  src={itpark}
                  alt=""
                />
              </li>
              <li className="maineleven__box_right_ul_li">
                <img
                  className="maineleven__box_right_ul_li_img maineleven__box_right_ul_li_img8"
                  src={global}
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

export default MainEleven;
