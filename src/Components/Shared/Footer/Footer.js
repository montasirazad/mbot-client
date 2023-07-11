import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";


const Footer = () => {

    return (
        <div>
            <Box
                component="footer"
                // sx={{
                //     backgroundColor: 
                //     (theme) =>
                //         theme.palette.mode === "light"
                //             ? theme.palette.grey[200]
                //             : theme.palette.grey[800],
                //     p: 6,
                // }}

                sx={{backgroundColor:'#0C081E',p: 6,color:'white'}}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="text.white" gutterBottom>
                                About Us
                            </Typography>
                            <Typography variant="body2" ccolor="text.white">
                                We are XYZ company, dedicated to providing the best service to our
                                customers.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="text.white" gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body2" color="text.white">
                                285, Road 4, Baridhara DOHS, Dhaka 1206, Bangladesh
                            </Typography>
                            <Typography variant="body2" color="text.white">
                                Email: contact@gengenie.io
                            </Typography>
                            <Typography variant="body2" color="text.white">
                                Phone: +8809696809087
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="text.white" gutterBottom>
                                Follow Us
                            </Typography>
                            <Link href="https://www.facebook.com/" color="inherit">
                                <Facebook />
                            </Link>
                            <Link
                                href="https://www.instagram.com/"
                                color="inherit"
                                sx={{ pl: 1, pr: 1 }}
                            >
                                <Instagram />
                            </Link>
                            <Link href="https://www.twitter.com/" color="inherit">
                                <Twitter />
                            </Link>
                        </Grid>
                    </Grid>
                    <Box mt={5} >
                        <Typography variant="body2" sx={{color:'white'}} align="center">
                            {"Copyright © "}
                            <Link color="inherit" href="https://your-website.com/">
                               genGenie
                            </Link>{" "}
                            {new Date().getFullYear()}
                            {"."}
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default Footer;