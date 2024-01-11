import React from 'react';
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { links } from './homeData';
import RightArrow from "../includes/icons/RightArrow";

export default function CarouselSlider() {
	const navigate = useNavigate();

	const goToCalendar = () => {
		navigate("/kalendar");
	}

	if (!links || links.length === 0) {
		return (
			<div className="enter-btn" onClick={() => goToCalendar()}>
				<RightArrow height={50} width={50} />
			</div>
		)
	}


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
		<Slider {...settings}>
			{links.map((event) => (
				<div key={event.id} className='slick-container d-flex flex-column'>
					<h2>{event.title}</h2>
					<img src={event.background} alt={event.title} className='carousel-event-img' />
				</div>
				))
			}
		</Slider>
	);
}
