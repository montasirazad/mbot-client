import React from 'react';
import './ManualPublish.css';

const ManualPublish = () => {
    const handleSubmit = (e) => {
        console.log('hello');
        e.preventDefault()
    }

    return (
        <div className='newPost-container'>

            <h1> new post</h1> <br />

            <form onSubmit={handleSubmit}>
                <h5>Keyword*:</h5>
                <input name="" id="" placeholder='Enter the key word' required />
                <br />
                <label >
                    <input type="checkbox" name="" id="" /> Ai generated title
                </label>
                <br /> <br />
                <h5>Select Websites* (watch website adding tutorial)</h5>
                <select name="" id="">
                    <option value="">google.com</option>
                    <option value="">yahoo.com</option>
                    <option value="">facebook.com</option>
                    <option value="">youtube.com</option>
                </select>
                <br /> <br />
                <h5>Select category [required]</h5>

                <select name="" id="">
                    <option value="">Writing</option>
                    <option value="">Shopping</option>
                    <option value="">Cooking</option>
                    <option value="">Traveling</option>
                </select>
                <br /> <br />
                <h5>Choose Type of Info Article</h5>
                <select name="" id="">
                    <option value="">Long Post</option>
                    <option value="">Medium Post</option>
                    <option value="">Short Post</option>

                </select>
                <br /> <br />
                <h5>Post Status</h5>
                <select name="" id="">
                    <option value="">Default</option>
                    <option value="">Manual</option>


                </select>
                <br /><br />
                <button type='submit'>Submit</button>
            </form>
        </div >)
};

export default ManualPublish;