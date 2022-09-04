import React from "react";
import "../MainNine/MainNine.scss";
import approach from "../../API/approach";
import { useState } from "react";

const MainNine = () => {
  const [data] = useState(approach);
  console.log(data);

  return (
    <div className="mainnine">
      <div className="container">
        <div className="mainnine__box">
          <div className="mainnine__box_top">
            <h3 className="mainnine__box_top_title">
              TA'LIMGA TIZIMLI YONDASHUV
            </h3>
          </div>
          <div className="mainnine__box_bottom">
            <ul className="mainnine__box_bottom_ul">
              {data?.map((item) => {
                return (
                  <li className="mainnine__box_bottom_ul_li" key={item.id}>
                    <h3 className="mainnine__box_bottom_ul_li_title">
                      {item.approach_title}
                    </h3>
                    <p className="mainnine__box_bottom_ul_li_desc">
                      {item.approach_desc}
                    </p>
                    <img
                      className="mainnine__box_bottom_ul_li_img"
                      src={item.approach_img}
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

export default MainNine;
