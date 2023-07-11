import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Faq.css';

const Faq = () => {
    return (
        <div className="question-container">

            <h1>Frequently asked questions</h1>
            <br />
            <div className='question-div'>

                <Accordion sx={{
                    backgroundColor: '#053574',
                    backgroundImage: `linear-gradient(to right,#053574, #09522d)`,
                    color: 'white',
                    margin: '15px'
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="subtitle1" sx={{ color: 'white' }}>What is GenGinie ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1">
                            GenGenie is the world's best AI writing platform for creating SEO-optimized
                            content that increases organic traffic to your website on Google. By
                            strategically placing keywords, internal links, and external links in
                            your generated content, you can increase traffic, sales, and revenue 10x.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{
                    backgroundColor: '#053574',
                    backgroundImage: `linear-gradient(to right,#053574, #09522d)`,
                    color: 'white',
                    margin: '15px'
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="subtitle1" sx={{ color: 'white' }}>Is GenGenie free?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1">
                            That's right. GenGenie offers a free trial of 10000 Premium words which
                            is sufficient to give this AI platform a try.
                            As with other platforms like Jasper (Jarvis), no credit card is required
                            for this free trial. It is possible to switch from GPT-4 to GPT-3.5 anytime and experience
                            any quality you desire. Our <a href="/contact-us">customer support</a> can provide you with more free words
                            if you are a large business, agency or enterprise. If you don't like our AI writing platform after enjoying a free trial, you will receive a full refund within one week of subscribing.
                            Try GenGenie's free trial and experience our AI writing capabilities for yourself.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{
                    backgroundColor: '#053574',
                    backgroundImage: `linear-gradient(to right,#053574, #09522d)`,
                    color: 'white',
                    margin: '15px'
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="subtitle1" sx={{ color: 'white' }}>Who owns the generated copy ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1">
                            You do. You retain ownership of all the copy generated in your account.
                            You can use it for both personal and commercial use. GenGenie does not
                            claim any ownership of the copy in your account.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{
                    backgroundColor: '#053574',
                    backgroundImage: `linear-gradient(to right,#053574, #09522d)`,
                    color: 'white',
                    margin: '15px'
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="subtitle1" sx={{ color: 'white' }}>Is content generated with GenGenie plagiarism-free?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1">
                            GenGenie’s AI is trained on billions of parameters (almost 10% of the internet).
                            The AI has learned the nuances of grammar, spelling, and style to generate completely
                            original content.
                        </Typography>
                    </AccordionDetails>
                </Accordion>


                <Accordion sx={{
                    backgroundColor: '#053574',
                    backgroundImage: `linear-gradient(to right,#053574, #09522d)`,
                    color: 'white',
                    margin: '15px'
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="subtitle1" sx={{ color: 'white' }}>Who can use GenGenie ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1">
                            Basically, GenGenie is for anyone who wants to create content, whether they are marketers, entrepreneurs, agencies, or students. You do not need to be a professional writer to use GenGenie.The AI-generated, SEO-optimized content produced by GenGenie is used by thousands of professional writers as well since it helps them brainstorm new ideas, saves them time, increases their productivity, and therefore generates more revenue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    );
};

export default Faq;