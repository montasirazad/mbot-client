import React from 'react';
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import './Services.css';


const Services = () => {

    const services = [
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
        <div >

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >



                {
                    services.map(slide =>
                        <SwiperSlide key={slide.id}>
                            <img src={slide.img} alt="" />
                        </SwiperSlide>
                    )
                }

                {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Services;