import React from "react";
import "../MainTwo/MainTwo.scss";
import down from "../../assets/icons/roadmap/download.png";
import img from "../../assets/images/img.png";
import topright from "../../assets/pdpicons/top-right.svg";
import intensiv from "../../assets/icons/intensivEducation.svg";
import usual from "../../assets/icons/usualEducation.svg";

const MainTwo = () => {
  return (
    <div className="maintwo">
      <div className="container">
        <div className="maintwo__box">
          <div className="maintwo__box_left">
            <div className="maintwo__box_left_hover">
              <img className="maintwo__box_left_hover_img" src={usual} alt="" />
              <h2 className="maintwo__box_left_hover_h2">Odatiy ta’lim</h2>
              <p className="maintwo__box_left_hover_desc">
                O’zingiz istagan tezlikda va vaqtda ta’lim oling. Muvaffaqiyatli
                marraga yetib borishingiz to’liqligicha o’zingizga bog’liq
              </p>
            </div>
            <div className="maintwo__box_left_bg">
              <p className="maintwo__box_left_bg_desc">
                Tig’iz ish va o’qish grafigi bo’yicha harakatlanadigan insonlar
                uchun odatiy kurslar ayni muddao. Chunki bunda siz o’z ish
                faoliyatingizga jiddiy ta’sir ko’rsatmagan holda ta’lim
                olishingiz mumkin. Odatiy kurslar bu sizga qulay belgilangan
                vaqtda haftaning ma’lum kunlarida 3 marotaba 3 soatdan k
              </p>
              <img className="maintwo__box_left_bg_img" src={img} alt="" />
            </div>
            <button className="maintwo__box_btn">
              <svg
                className="maintwo__box_btn_svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414V9.414Z" />
              </svg>
            </button>
          </div>
          <div className="maintwo__box_right">
            <div className="maintwo__box_right_hover">
              <img
                className="maintwo__box_right_hover_img"
                src={intensiv}
                alt=""
              />
              <h2 className="maintwo__box_right_hover_h2">Intensiv ta’lim</h2>
              <p className="maintwo__box_right_hover_desc">
                Bizning intensiv ta’lim dasturimiz bo’yicha ta’lim oling. Har
                kunlik 8 soatlik ta’lim bilan muvaffaqiyatli marraga tezroq
                erishasiz.
              </p>
            </div>
            <div className="maintwo__box_right_bg">
              <p className="maintwo__box_right_bg_desc">
                {" "}
                Intensiv ta’lim bu hafta davomida kamida 5 kun 4 soatdan
                tanlangan yo’nalish bo’yicha ta’lim olish demakdir. Intensiv
                ta’lim bilan siz yanada ko’proq bilim, topshiriqlar, amaliyot,
                tajriba va eng asosiysi kurs so’nggida kutilgandan ham kattaroq
                natijalarga ega bo'lasiz. Yanada ko’prog’iga ega bo’ling,
                intensiv tarzda dasturlashni o’rganing.
              </p>
              <img className="maintwo__box_right_bg_img" src={down} alt="" />
            </div>
            <button className="maintwo__box_btn">
              <svg
                className="maintwo__box_btn_svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414V9.414Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTwo;
