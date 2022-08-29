import React from 'react';
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

        </div>
    );
}

export default Home;
