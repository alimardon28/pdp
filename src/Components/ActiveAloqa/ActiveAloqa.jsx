import React, { useState } from "react";
import "../ActiveAloqa/ActiveAloqa.scss";
import frame from "../../assets/icons/Frame.svg";
import video from "../../assets/icons/video.svg";
import xat from "../../assets/icons/xat.svg";
import videos from "../../assets/pdpicons/play-video.svg";
import acardion_api from "../../API/acardion";
import x from "../../assets/icons/x.svg";

const ActiveAloqa = () => {
  const [data] = useState(acardion_api);
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  };

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
                  <svg
                    className="activealoqa__box_list_item_box1_btn_svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.1668 15.5851C20.1664 16.8387 19.7379 18.0545 18.9523 19.0314C18.1666 20.0083 17.0709 20.6875 15.8466 20.9568L15.2617 19.2023C15.7973 19.114 16.3066 18.9081 16.753 18.5994C17.1993 18.2906 17.5717 17.8866 17.8431 17.4166H15.5835C15.0973 17.4166 14.631 17.2234 14.2871 16.8796C13.9433 16.5358 13.7502 16.0695 13.7502 15.5833V11.9166C13.7502 11.4304 13.9433 10.964 14.2871 10.6202C14.631 10.2764 15.0973 10.0833 15.5835 10.0833H18.2767C18.053 8.31124 17.1903 6.68175 15.8506 5.50054C14.5109 4.31932 12.7862 3.66757 11.0002 3.66757C9.21409 3.66757 7.48939 4.31932 6.14969 5.50054C4.80999 6.68175 3.94736 8.31124 3.72366 10.0833H6.41683C6.90306 10.0833 7.36937 10.2764 7.71319 10.6202C8.05701 10.964 8.25016 11.4304 8.25016 11.9166V15.5833C8.25016 16.0695 8.05701 16.5358 7.71319 16.8796C7.36937 17.2234 6.90306 17.4166 6.41683 17.4166H3.66683C3.1806 17.4166 2.71428 17.2234 2.37047 16.8796C2.02665 16.5358 1.8335 16.0695 1.8335 15.5833V10.9999C1.8335 5.93717 5.93741 1.83325 11.0002 1.83325C16.0629 1.83325 20.1668 5.93717 20.1668 10.9999V15.5851Z" />
                  </svg>
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
                    10 ta <br /> matnli javoblar
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
                    0 ta <br /> video javoblar
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
            <li className="activealoqa__box_list_item activealoqa__box_list_items">
              {data?.map((item, index) => {
                return (
                  <div
                    className="activealoqa__box_list_itemss"
                    key={item.id}
                    onClick={() => toggle(index)}
                  >
                    <div className="activealoqa__box_list_item_acardion">
                      {item.acardion_name}
                      <img src={x} alt="" />
                    </div>
                    <div
                      className={
                        active === index
                          ? "activealoqa__box_list_item_acardions activealoqa__box_list_item_acardions_show"
                          : "activealoqa__box_list_item_acardions"
                      }
                    >
                      <p className="activealoqa__box_list_item_acardions_desc ">
                        {item.acardion_desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActiveAloqa;
