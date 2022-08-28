import React from 'react';
import MainOne from '../../Components/MainOne/MainOne';
import MainTwo from '../../Components/MainTwo/MainTwo';
import "../Home/Home.scss";

const Home = () => {
    return (
        <div className='home'>
            <MainOne/>
            <MainTwo/>

        </div>
    );
}

export default Home;
