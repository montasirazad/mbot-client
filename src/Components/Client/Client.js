import React from 'react';
import './Client.css';
import googleImg from '../../images/icons8-google.svg'
import microsoftImg from '../../images/icons8-microsoft.svg'
import metaImg from '../../images/icons8-meta.svg'
import youTubeImg from '../../images/icons8-youtube.svg'
import tikTokImg from '../../images/icons8-tiktok.svg'
import amazonImg from '../../images/icons8-amazon.svg'

const Client = () => {

    const clients = [
        {
            id: 0,
            img: googleImg
        },
        {
            id: 1,
            img: microsoftImg
        },
        {
            id: 2,
            img: metaImg
        },
        {
            id: 3,
            img: youTubeImg
        },
        {
            id: 4,
            img: tikTokImg
        },
        {
            id: 5,
            img: amazonImg
        }
    ]

    return (
        <div className='client-container'>
            <div className='text-div'>
                <h2>Genie is designed for platforms such as</h2>
            </div>
            <div className='logo-container'>

                {
                    clients.map(client => <div className='logo-div' key={client.id}>
                        <img src={client.img} alt="icons" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Client;