import React from "react";
import "./MainThree.scss";
import online from "../../assets/images/online.png";
import onsite3x from "../../assets/images/onsite3x.png";
import home from "../../assets/icons/home.svg";
import onsite from "../../assets/icons/onsite.svg";
import right from "../../assets/pdpicons/course-right.svg";

const MainThree = () => {
  return (
    <div className="mainthree">
      <div className="container ">
        <ul className="mainthree__ul">
          <li className="mainthree__ul_li">
            <div className="mainthree__ul_li_hover mainthree__ul_li_hoveres">
              <div className="mainthree__ul_li_hover_left">
                <img
                  className="mainthree__ul_li_hover_left_img"
                  src={onsite}
                  alt=""
                />
              </div>
              <div className="mainthree__ul_li_hover_right">
                <h2 className="mainthree__ul_li_hover_right_title">onsite</h2>
                <p className="mainthree__ul_li_hover_right_desc">
                  Ushbu ta’lim shaklida siz bizning o‘quv filiallarimizdan
                  birida o‘zingizga qulay vaqtda ta’lim olishingiz mumkin
                </p>
                <button className="mainthree__ul_li_hover_right_btn">
                  batafsil
                  <img
                    className="mainthree__ul_li_hover_right_btn_img"
                    src={right}
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="mainthree__ul_li_bg">
              <div className="mainthree__ul_li_bg_box">
                <h2 className="mainthree__ul_li_bg_title">onsite</h2>
                <p className="mainthree__ul_li_bg_desc">
                  Zamonaviy o’quv sinflarda ta’lim oling
                </p>
                <button className="mainthree__ul_li_bg_btn">
                  batafsil
                  <img
                    className="mainthree__ul_li_bg_btn_img"
                    src={right}
                    alt=""
                  />
                </button>
              </div>
              <img className="mainthree__ul_li_bg_img" src={onsite3x} alt="" />
            </div>
          </li>
          <li className="mainthree__ul_li">
            <div className="mainthree__ul_li_hover mainthree__ul_li_hovers">
              <div className="mainthree__ul_li_hover_left">
                <img
                  className="mainthree__ul_li_hover_left_img"
                  src={home}
                  alt=""
                />
              </div>
              <div className="mainthree__ul_li_hover_right">
                <h2 className="mainthree__ul_li_hover_right_title">online</h2>
                <p className="mainthree__ul_li_hover_right_desc">
                  Ushbu ta’lim shaklida o’qish va ishdan ajralmagan holda
                  kunning istalgan vaqtida masofaviy ta’lim olishingiz mumkun
                </p>
                <button className="mainthree__ul_li_hover_right_btn">
                  batafsil
                  <img
                    className="mainthree__ul_li_hover_right_btn_img"
                    src={right}
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="mainthree__ul_li_bg">
              <div className="mainthree__ul_li_bg_box ">
                <h2 className="mainthree__ul_li_bg_title">online</h2>
                <p className="mainthree__ul_li_bg_desc">
                  Online Istalgan joyda, istalgan vaqtda
                </p>
                <button className="mainthree__ul_li_bg_btn">
                  batafsil
                  <img
                    className="mainthree__ul_li_bg_btn_img"
                    src={right}
                    alt=""
                  />
                </button>
              </div>
              <img className="mainthree__ul_li_bg_img " src={online} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainThree;
