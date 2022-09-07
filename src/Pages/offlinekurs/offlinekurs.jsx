import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Offlinekurses from "../../Components/offlinekurses/offlinekurses";

const Offlinekurs = () => {
  return (
    <>
      <div className="offlinekurs">
        <Header />
        <Offlinekurses />
        <Footer />
      </div>
    </>
  );
};

export default Offlinekurs;
