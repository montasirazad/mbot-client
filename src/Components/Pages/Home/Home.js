import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Services from '../../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import './Home.css';
import Review from '../Review/Review';
import Client from '../../Client/Client';
import Faq from '../Faq/Faq';
import LogoSlider from '../LogoSlider/LogoSlider';

const Home = () => {
    return (
        <div className='home-div'>
            <Banner />
            {/* <Services /> */}
            <Faq />
            {/* <LogoSlider /> */}
            <Review />
            <Client />
            <Footer />
        </div>
    );
};

export default Home;