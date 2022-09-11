import React from 'react';
import ActiveAloqa from '../../Components/ActiveAloqa/ActiveAloqa';
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Aloqa = () => {
    return (
        <div className='aloqa'>

            <Header/>
            <ActiveAloqa/>
            <Footer/>
        </div>
    );
}

export default Aloqa;
