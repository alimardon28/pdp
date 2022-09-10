import React from "react";
import "../Sign/Sign.scss";
import sign from "../../assets/images/sign.svg";

const Sign = () => {
  return (
    <div className="sign">
      <div className="container">
        <div className="sign__box">
          <div className="sign__box_left">
            <h2 className="sign__box_left_title">Tizimga kirish</h2>
            <form action="" className="sign__box_left_form">
              <input
                type="num"
                className="sign__box_left_form_numinput sign__box_left_form_numinput_number"
                required
                defaultValue="+998"
              />
              <input
                type="password"
                className="sign__box_left_form_numinput sign__box_left_form_numinput_parol"
                required
                placeholder="Parol"
              />
              <div className="sign__box_left_box">
                <button className="sign__box_left_box_btn"> Kirish </button>
                <a className="sign__box_left_box_link" href="#">
                  Parolingizni unutdingizmi?
                </a>
              </div>
            </form>
            <div className="sign__box_left_bottom">
              <span className="sign__box_left_bottom_span">
                Yangi foydalanuvchimisiz?
              </span>
              <a className="sign__box_left_bottom_link" href="#">
                Ro'yxatdan o'tish
              </a>
            </div>
          </div>
          <div className="sign__box_right">
            <img className="sign__box_right_img" src={sign} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
