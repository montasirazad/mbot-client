import React from 'react';

import './Banner.css';


const Banner = () => {
    return (
        <div className='banner-div'>
            {/* <div className='banner-img'>
                <img src={robotImg} alt="" />
            </div> */}
            <div className='text-div'>
                <h1 className='glowing-text'>Genie-Driven Text Solutions</h1> <br />
                <h2>Where Your Text-Based Content Wishes Come True!</h2>


            </div>
            <div className='btn-div'>
                <button>Sign up with Google</button>
                <p>or</p>
                <button>Get started</button>
            </div>
        </div>
    );
};

export default Banner;