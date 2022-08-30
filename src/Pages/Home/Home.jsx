import React from 'react';
import MainFive from '../../Components/MainFive/MainFive';
import MainFour from '../../Components/MainFour/MainFour';
import MainOne from '../../Components/MainOne/MainOne';
import MainSex from '../../Components/MainSex/MainSex';
import MainThree from '../../Components/MainThree/MainThree';
import MainTwo from '../../Components/MainTwo/MainTwo';
import "../Home/Home.scss";

const Home = () => {
    return (
        <div className='home'>
            <MainOne/>
            <MainTwo/>
            <MainThree/>
            <MainFour/>
            <MainFive/>
            <MainSex/>

        </div>
    );
}

export default Home;
