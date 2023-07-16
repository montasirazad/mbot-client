import React from 'react';
import './AddNewWebsite.css';


const AddNewWebsite = () => {

    const handleSubmit = (e) => {
        console.log('hello');
        e.preventDefault()
    }

    return (
        <div className='add-website-container'>
            Add new website
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Site title</label> <br />
                <input type="text" name="" placeholder='Site title' /> <br />
                <label htmlFor="">Site Url(Domain name only)</label> <br />
                <input type="text" name="" placeholder='Site title' />
                <br />
                <label htmlFor="">Wordpress Username</label> <br />
                <input type="text" name="" placeholder='Wordpress Username' />
                <br />
                <label htmlFor="">Wordpress password</label> <br />
                <input type="password" name="" placeholder='Wordpress password' /> <br /> <br />
                <button type='submit' className='add-btn'>Verify and add website</button>
            </form>
        </div>
    );
};

export default AddNewWebsite;