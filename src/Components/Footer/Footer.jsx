import React from "react";
import "../Footer/Footer.scss";
import document1 from "../../assets/images/document1.png";
import document2 from "../../assets/images/document2.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul className="footer__ul">
          <li className="footer__ul_li">
            <span className="footer__ul_li_span">(78) 777-47-47</span>
            <p className="footer__ul_li_p">Yagona xizmat raqami</p>
            <a href="#" className="footer__ul_li_link footer__ul_li_links">
              Toshkent shahar. <br></br>Shayxontohur tum.,<br></br> Beruniy
              ko'chasi., 3A-uy.
            </a>
          </li>
          <li className="footer__ul_li">
            <p className="footer__ul_li_desc">Asosiy</p>
            <a href="#" className="footer__ul_li_link">
              Kompaniya haqida
            </a>
            <a href="#" className="footer__ul_li_link">
              Huquqiy hujjatlar
            </a>
            <a href="#" className="footer__ul_li_link">
              Bog’lanish
            </a>
            <a href="#" className="footer__ul_li_link">
              FAQ
            </a>
          </li>
          <li className="footer__ul_li">
            <p className="footer__ul_li_desc">Ta'lim</p>
            <a href="#" className="footer__ul_li_link">
              Online
            </a>
            <a href="#" className="footer__ul_li_link">
              Onsite
            </a>
            <a href="#" className="footer__ul_li_link">
              Imtiyoz
            </a>
            <a href="#" className="footer__ul_li_link">
              Hamkorlik
            </a>
          </li>
          <li className="footer__ul_li">
            <p className="footer__ul_li_desc">Loyihalar</p>
            <a href="#" className="footer__ul_li_link">
              PDP Presentation
            </a>
            <a href="#" className="footer__ul_li_link">
              PDP Guest Lecture
            </a>
            <a href="#" className="footer__ul_li_link">
              PDP Live
            </a>
            <a href="#" className="footer__ul_li_link">
              PDP Meetup
            </a>
            <a href="#" className="footer__ul_li_link">
              PDP Generation
            </a>
          </li>
          <li className="footer__ul_li">
            <div className="footer__ul_li_box">
              <img
                className="footer__ul_li_box_img footer__ul_li_box_img1"
                src={document1}
                alt=""
              />
              <img
                className="footer__ul_li_box_img footer__ul_li_box_img2"
                src={document2}
                alt=""
              />
            </div>
            <a href="#" className="footer__ul_li_link">
              Davlat tomonidan
            </a>
            <p className="footer__ul_li_descs">tasdiqlangan hujjatlar</p>
          </li>
        </ul>
        <div className="footer__box">
          <p className="footer__box_desc">Inflex,Inc. 2017 – 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
