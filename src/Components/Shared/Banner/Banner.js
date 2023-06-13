import React from 'react';
import robotImg from '../../../images/robot2.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-div'>
            <div>
                <img src={robotImg} alt="" />
            </div>
            <div className='text-div'>
               <h1>Lorem, ipsum.</h1>
               <h3>Lorem, ipsum dolor.</h3>
               <button>GET STARTED</button>
            </div>

        </div>
    );
};

export default Banner;