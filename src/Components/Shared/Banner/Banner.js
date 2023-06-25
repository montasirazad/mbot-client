import React from 'react';

import './Banner.css';


const Banner = () => {
    return (
        <div className='banner-div'>
            {/* <div className='banner-img'>
                <img src={robotImg} alt="" />
            </div> */}
            <div className='text-div'>
                <h1 className='glowing-text'>Whatever you want to ask</h1> <br />
                <h2>our chat has the answers</h2>


            </div>
            <div className='btn-div'>
                <button>Sign up with Google</button>
                <p>or</p>
                <button>GET STARTED</button>
            </div>
        </div>
    );
};

export default Banner;