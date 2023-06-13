import React from 'react';
import './Client.css';
import logo1 from '../../images/logo1.jpg'
import logo2 from '../../images/logo2.jpg'
import logo3 from '../../images/logo3.png'

const Client = () => {

    const clients = [
        {
            id: 0,
            img: logo1
        },
        {
            id: 1,
            img: logo2
        },
        {
            id: 2,
            img: logo3
        }
    ]

    return (
        <>
            <h1>clients</h1>
            <div className='client-container'>

                {
                    clients.map(client => <div className='client-div' key={client.id}>
                        <img src={client.img} alt="" />
                    </div>)
                }
            </div>
        </>
    );
};

export default Client;