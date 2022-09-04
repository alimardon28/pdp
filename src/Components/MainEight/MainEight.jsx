import React from "react";
import "../MainEight/MainEight.scss";
import selver from "../../assets/images/Silver.png";
import pdp from "../../assets/images/pdp.svg";

const MainEight = () => {
  return (
    <div className="maineight">
      <div className="container">
        <div className="maineight__box">
          <div className="maineight__box_left">
            <img className="maineight__box_left_img" src={selver} alt="" />
          </div>
          <div className="maineight__box_right">
            <img className="maineight__box_right_img" src={pdp} alt="" />
            <h3 className="maineight__box_right_title">Sertifikat</h3>
            <p className="maineight__box_right_desc">
              Mutaxassislik kurslarini to'liq tamomlagan talabalarga sertifikat
              beriladi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainEight;
