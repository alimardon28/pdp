import React from "react";
import "../message/message.scss";
import { NavLink } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <NavLink to="/aloqa">
          <div className="message__box">
            <svg
              className="message__box_svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.5 11.2425C2.49867 9.25367 3.28866 7.34601 4.69569 5.94039C6.10272 4.53477 8.01116 3.74669 10 3.75001H20C24.1413 3.75001 27.5 7.11876 27.5 11.2425V26.25H10C5.85875 26.25 2.5 22.8813 2.5 18.7575V11.2425ZM17.5 13.75V16.25H20V13.75H17.5ZM10 16.25V13.75H12.5V16.25H10Z"
              />
            </svg>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Message;
