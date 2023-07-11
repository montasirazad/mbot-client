import React from 'react';
import Client from '../../Client/Client';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Faq from '../Faq/Faq';
import './Home.css';
import HowWillHelp from '../HowWillHelp/HowWillHelp';
import Contact from '../Contact/Contact';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div className='home-div'>
            <Banner />
            {/* <Services /> */}
            {/* <LogoSlider /> */}
            <HowWillHelp />
            <Client />
            <Pricing />
            <Faq />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;