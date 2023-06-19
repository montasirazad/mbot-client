import React from 'react';
import './Review.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Review = () => {

    const reviews = [
        {
            id: 0,
            name: 'Ai',
            description: 'Lorem ipsum dolor sit amet.',
            img: "https://swiperjs.com/demos/images/nature-1.jpg"
        },
        {
            id: 1,
            name: 'Ai',
            description: 'Lorem ipsum dolor sit amet.',
            img: "https://swiperjs.com/demos/images/nature-3.jpg"
        }, {
            id: 2,
            name: 'Ai',
            description: 'Lorem ipsum dolor sit amet.',
            img: "https://swiperjs.com/demos/images/nature-4.jpg"
        }, {
            id: 3,
            name: 'Ai',
            description: 'Lorem ipsum dolor sit amet.',
            img: "https://swiperjs.com/demos/images/nature-5.jpg"
        }, {
            id: 4,
            name: 'Ai',
            description: 'Lorem ipsum dolor sit amet.',
            img: "https://swiperjs.com/demos/images/nature-6.jpg"
        }
    ]


    return (

        <>
            {/* <h1>Review</h1><br /> */}
            <div className='review-div'>

                {

                    reviews.map(review => <Card key={review.id} sx={{ maxWidth: 345, m: 2 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={review.img}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {review.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {review.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>)
                }
            </div>
        </>

    );
};

export default Review;