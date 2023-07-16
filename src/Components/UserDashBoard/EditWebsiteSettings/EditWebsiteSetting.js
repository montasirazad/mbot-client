import React from 'react';
import './EditWebsiteSetting.css';


const EditWebsiteSetting = () => {

    const handleSubmit = (e) => {
        console.log('hello');
        e.preventDefault()
    }
    return (
        <div className='edit-website-container'>
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
                <label htmlFor="">Wordpress Application password</label> <br />
                <input type="password" name="" placeholder='Wordpress password' /> <br />

                <label htmlFor="">Wordpress Author Id</label> <br />
                <input type="number" name="" /> <br />
                <label htmlFor="">Wordpress Post Category Id</label> <br />
                <input type="number" name="" /> <br />
                <label htmlFor="">Wordpress Post Status</label>
                <br />
                <select name="" id="">
                    <option value="">Draft</option>
                    <option value="">Save</option>

                </select> <br /> <br />
                <button type='submit' className='add-btn'>Update</button>
            </form>
        </div>
    );
};

export default EditWebsiteSetting;