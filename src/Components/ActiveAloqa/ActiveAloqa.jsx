import React from "react";
import "../ActiveAloqa/ActiveAloqa.scss";
import aloqa from "../../assets/icons/aloqa.svg";
import frame from "../../assets/icons/Frame.svg";
import video from "../../assets/icons/video.svg";
import xat from "../../assets/icons/xat.svg";
import videos from "../../assets/pdpicons/play-video.svg";

const ActiveAloqa = () => {
  return (
    <div className="activealoqa">
      <div className="container">
        <div className="activealoqa__box">
          <ul className="activealoqa__box_ul">
            <li className="activealoqa__box_ul_li">
              <h1 className="activealoqa__box_ul_li_title">
                TEZ-TEZ SO'RALADIGAN <span>SAVOLLAR</span>
              </h1>
            </li>
            <li className="activealoqa__box_ul_li">
              <div className="activealoqa__box_ul_li_box">
                <img
                  className="activealoqa__box_ul_li__box_images activealoqa__box_ul_li__box_images2"
                  src={frame}
                  alt=""
                />
              </div>
            </li>
            <li className="activealoqa__box_ul_li activealoqa__box_ul_li1">
              <button className="activealoqa__box_ul_li_btn">
                <img
                  className="activealoqa__box_ul_li_img"
                  src={videos}
                  alt=""
                />
              </button>
            </li>
          </ul>
          <ul className="activealoqa__box_list">
            <li className="activealoqa__box_list_item">
              <div className="activealoqa__box_list_item_box1">
                <h2 className="activealoqa__box_list_item_box1_title">
                  SIZ UCHUN JAVOBLAR KONTENTI
                </h2>
                <button className="activealoqa__box_list_item_box1_btn">
                  <img
                    className="activealoqa__box_list_item_box1_img"
                    src={aloqa}
                    alt=""
                  />
                  Admin bilan aloqa
                </button>
              </div>
            </li>
            <li className="activealoqa__box_list_item">
              <div className="activealoqa__box_list_item_items">
                <div className="activealoqa__box_list_item_items_boxes">
                  <img
                    className="activealoqa__box_list_item_items_boxes_img"
                    src={xat}
                    alt=""
                  />
                </div>
                <div className="activealoqa__box_list_item_items_box">
                  <h3 className="activealoqa__box_list_item_items_box_title">
                    10 ta matnli javoblar
                  </h3>
                  <p className="activealoqa__box_list_item_items_box_desc">
                    Platformada online va onsite ta'lim jarayoni yuzasidan eng
                    ko'p beriladigan savollar javobini batafsil ushbu bo'lim
                    orqali olishingiz mumkin. Bizda sizni qiynayotgan barcha
                    savollar javobi bazasi mavjud.
                  </p>
                </div>
              </div>
              <div className="activealoqa__box_list_item_items">
                <div className="activealoqa__box_list_item_items_boxes">
                  <img
                    className="activealoqa__box_list_item_items_boxes_img"
                    src={video}
                    alt=""
                  />
                </div>
                <div className="activealoqa__box_list_item_items_box">
                  <h3 className="activealoqa__box_list_item_items_box_title">
                    0 ta video javoblar
                  </h3>
                  <p className="activealoqa__box_list_item_items_box_desc">
                    Balki siz ta'lim jarayonidagi eng kerakli va muammoli
                    vaziyatlarga nisbatan video-javoblar tarafdoridirsiz. Unda
                    ushbu bo'lim orqali 40 dan ziyod yo'riqnoma videolarni
                    ko'zdan kechirishni tavsiya etamiz.
                  </p>
                </div>
              </div>
            </li>
            <li className="activealoqa__box_list_item"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActiveAloqa;
