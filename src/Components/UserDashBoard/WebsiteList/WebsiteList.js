import React from 'react';
import './WebsiteList.css';
import { Link } from 'react-router-dom';


const WebsiteList = () => {

    return (
        <div className='website-list-container'>
            <div >
                <label>Website list </label>
                <Link to='/user/dashboard/add-new-website'>
                    <button className=''> <span>&#43;</span> Add New Website</button>
                </Link>
            </div>

            <div style={{ overflowX: 'auto',overflowY:'auto' }}>
                <table >

                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Url</th>
                            <th>Username</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Post Status</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>example.com</td>
                            <td>example.com</td>
                            <td>example</td>
                            <td>1</td>
                            <td>blog</td>
                            <td>draft</td>
                            <td>1</td>
                            <td>{new Date().toLocaleDateString()}</td>
                            <td>
                                <Link to='/user/dashboard/edit-website-setting'><button>Edit</button></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>example2.com</td>
                            <td>example2.com</td>
                            <td>example2</td>
                            <td>1</td>
                            <td>blog</td>
                            <td>draft</td>
                            <td>1</td>
                            <td>{new Date().toLocaleDateString()}</td>
                            <td>
                                <Link to='/user/dashboard/edit-website-setting'><button>Edit</button></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>example3.com</td>
                            <td>example3.com</td>
                            <td>example3</td>
                            <td>1</td>
                            <td>blog</td>
                            <td>draft</td>
                            <td>1</td>
                            <td>{new Date().toLocaleDateString()}</td>
                            <td>
                                <Link to='/user/dashboard/edit-website-setting'><button>Edit</button></Link>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>


        </div>
    );
};

export default WebsiteList;