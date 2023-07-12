import React from 'react';
import './Contact.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.white" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
        <div className='contact-container'>
            <div className='contact-div'>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" color="text.white" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body2" color="text.white">
                        {/* 285, Road 4, Baridhara DOHS, Dhaka 1206, Bangladesh */}
                        Lytchett House, 13 Freeland Park,Wareham Road,
                        Poole, Dorset
                        BH16 6FA
                    </Typography>

                    <Typography variant="body2" color="text.white">
                        <EmailIcon sx={{ fontSize: '12px' }} /> contact@gengenie.io
                    </Typography>
                    <Typography variant="body2" color="text.white">
                        {/* Phone: +8809696809087 */}
                        <PhoneIcon sx={{ fontSize: '12px' }} /> +447576456479

                    </Typography>
                </Grid>
            </div>
            <div className='form-div'>
                <h4>Keep in touch</h4>
                <form >

                     
                    <input type="email" name="" id="" placeholder='Your E-mail'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='your message'></textarea>
                    <button type="submit">Submit</button>

                </form>

            </div>
        </div>
    );
};

export default Contact;