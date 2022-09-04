import React from "react";
import "../MainTen/MainTen.scss";
import mentor_api from "../../API/mentor";
import { useState } from "react";

const MainTen = () => {
  const [data] = useState(mentor_api);

  return (
    <div className="mainten">
      <div className="container">
        <div className="mainten__box">
          <div className="mainten__box_top">
            <h3 className="mainten__box_top_title">
              MENTORLARIMIZ <br></br>
              JAMOASI
            </h3>
          </div>
          <div className="mainten__box_bottom">
            <ul className="mainten__box_bottom_ul">
              {data?.map((item) => {
                return (
                  <li className="mainten__box_bottom_ul_li" key={item.id}>
                    <img
                      className="mainten__box_bottom_ul_li_img"
                      src={item.mentor_avatar}
                      alt=""
                    />
                    <h4 className="mainten__box_bottom_ul_li_name">
                      {item.mentor_name}
                    </h4>
                    <p className="mainten__box_bottom_ul_li_desc">
                      {item.mentor_job}
                    </p>
                    <img
                      className="mainten__box_bottom_ul_li_edu"
                      src={item.mentor_edu}
                      alt=""
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTen;
