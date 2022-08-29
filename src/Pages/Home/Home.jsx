import React from 'react';
import MainFour from '../../Components/MainFour/MainFour';
import MainOne from '../../Components/MainOne/MainOne';
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

        </div>
    );
}

export default Home;
