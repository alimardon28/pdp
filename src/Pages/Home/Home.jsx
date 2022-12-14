import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MainEight from "../../Components/MainEight/MainEight";
import MainEleven from "../../Components/MainEleven/MainEleven";
import MainFive from "../../Components/MainFive/MainFive";
import MainFour from "../../Components/MainFour/MainFour";
import MainNine from "../../Components/MainNine/MainNine";
import MainOne from "../../Components/MainOne/MainOne";
import MainSeven from "../../Components/MainSeven/MainSeven";
import MainSex from "../../Components/MainSex/MainSex";
import MainTen from "../../Components/MainTen/MainTen";
import MainThree from "../../Components/MainThree/MainThree";
import MainTwo from "../../Components/MainTwo/MainTwo";
import "../Home/Home.scss";
import Message from "../../Components/message/message";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <MainOne />
      <MainTwo />
      <MainThree />
      <MainFour />
      <MainFive />
      <MainSex />
      <MainSeven />
      <MainEight />
      <MainNine />
      <MainTen />
      <MainEleven />

      <Footer />
<Message/>
    </div>
  );
};

export default Home;
