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
                        <Typography variant="h5" sx={{ color: 'white' }}>What is lorem ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                        <Typography variant="h5" sx={{ color: 'white' }}>What is lorem ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion> <Accordion sx={{
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
                        <Typography variant="h5" sx={{ color: 'white' }}>What is lorem ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion> <Accordion sx={{
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
                        <Typography variant="h5" sx={{ color: 'white' }}>What is lorem ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion> <Accordion sx={{
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
                        <Typography variant="h5" sx={{ color: 'white' }}>What is lorem ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    );
};

export default Faq;