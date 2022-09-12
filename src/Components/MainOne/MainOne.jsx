import React, { useState } from "react";
import "./MainOne.scss";
import bg from "../../assets/images/bg.svg";
import video from "../../assets/pdpicons/play-video.svg";
import hq from "../../assets/images/hqdefault.jpg";

const MainOne = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="mainone">
      <div className="container">
        <ul className="mainone__ul">
          <li className="mainone__ul_li">
            <h1 className="mainone__ul_title">
              DASTURLASHNI QULAY <span>MUHITDA</span> O‘RGANING
            </h1>
          </li>
          <li className="mainone__ul_li">
            <img className="mainone__ul_li_homeimg" src={bg} alt="" />
          </li>
          <li className="mainone__ul_li">
            <button
              className="mainone__ul_li_box"
              onClick={() => setOpenModal(!openModal)}
            >
              <img
                className="mainone__ul_li_videoimg mainone__ul_li_img"
                src={video}
                alt=""
              />
            </button>

            {openModal && (
              <div className="mainone__ul_li_dialog">
                <div className="mainone__ul_li_dialog_box">
                  <iframe
                    className="mainone__ul_li_dialog_box_iframe"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/IlVpkBf3McU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <button
                  className="mainone__ul_li_dialog_btn"
                  onClick={() => setOpenModal(false)}
                >
                  x
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainOne;
