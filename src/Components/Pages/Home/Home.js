import React from 'react';
import Client from '../../Client/Client';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Faq from '../Faq/Faq';
import './Home.css';
import HowWillHelp from '../HowWillHelp/HowWillHelp';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='home-div'>
            <Banner />
            {/* <Services /> */}
            <Faq />
            {/* <LogoSlider /> */}
            <HowWillHelp />
            <Client />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;