import React, { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { links } from './homeData';

export default function CarouselSlider() {

    const [events, setEvents] = useState(links)


    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true, 
      autoplay: true, 
      autoplaySpeed: 2000,
      swipe: true,
      prevArrow: null, 
      nextArrow: null

    };
    return (
      <div className='slick-container'>
        <Slider {...settings}>
            {events.map((event) => {
            
            return (
            <div key={event.id} className='slick-cont'>
            <h2>{event.title}</h2>       
            <img src={event.background} alt={event.title} className='carousel-event-img' /> 
            </div> 
                )


            })}
                

        </Slider>
      </div>
    );
  }