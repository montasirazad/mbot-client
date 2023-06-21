import React from 'react';

import './Banner.css';
import { AiFillGoogleCircle } from "react-icons/ai";


const Banner = () => {
    return (
        <div className='banner-div'>
            {/* <div className='banner-img'>
                <img src={robotImg} alt="" />
            </div> */}
            <div className='text-div'>
                <h1>Whatever you want to ask,</h1>
                <h1>our chat has the answers</h1>


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