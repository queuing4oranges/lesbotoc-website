import { HomeGradient } from './HomeGradient';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../includes/Navbar';

import LogoPart1 from '../../assets/icons/LogoPart1';
import LogoPart2 from '../../assets/icons/LogoPart2';

import { links } from '../home/homeData';
import RightArrow from './RightArrow';
import CarouselSlider from './CarouselSlider';
import { Col, Container, Row } from 'reactstrap';

export default function Home() {
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [fontColor, setFontColor] = useState('#003243');
	const [currentIndex, setCurrentIndex] = useState(0);

	const eventImages = links.map((link) => link.background);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
		}, 2500);

		return () => clearInterval(interval);
	}, [eventImages]);

	const handleMouseEnter = (newTitle) => {
		setTitle(newTitle);
		setFontColor('#003243');
	};

	const handleMouseLeave = () => {
		setFontColor('transparent');
	};

	const goToCalendar = () => {
		navigate('/kalendar');
	};

	return (
		<Container fluid className='home-wrapper h-100 w-100 px-5 '>

			<div className='gradient-container'>
				<HomeGradient />
			</div>
			<div className='mobile-navbar-container'>
				<Navbar />
			</div>

			<Row className='logo-row d-flex justify-content-center align-items-center'>
				<Col md='4'>
						<div className='home-logo-container d-flex align-items-center justify-content-center'>
							<div className='logo-part-one me-1'>
								<LogoPart1 width={105} height={125} color='#2B2A29' />

							</div>
							<div className='logo-part-two'>
								<LogoPart2
									className='logo-part-two'
									width={152}
									height={160}
									color='#2B2A29'
									circle='#7AB6CB'
								/>
							</div>
						</div>

						<div className='logo-caption'>
							<p>seznámení podle vašich představ</p>
						</div>
				</Col>

				<Col md='8'>
					<div className='panel-container d-flex p-3'>
						{links.map((link) => (
							<div
								key={link.id}
								style={{ backgroundImage: `url(${link.background})` }}
								className={`home-card ${link.CName}`}
								onMouseEnter={() => handleMouseEnter(link.title)}
								onMouseLeave={() => handleMouseLeave()}
								onClick={() => goToCalendar()}
							>
							</div>
						))}
					</div>

					<div className='mobile-home-container mt-3 p-5'>
						<CarouselSlider />
					</div>
				</Col>
			</Row>

			<Row>
				<div className='dynamic-title-container d-flex justify-content-end align-items-center'>
					<p
						className='dynamic-home-title  mb-0 me-3'
						id='dynamic-home-title'
						style={{ color: fontColor }}
					>
					{title}
					</p>
					<div className='enter-btn' onClick={() => goToCalendar()}>
						<RightArrow height={50} width={50} />
					</div>
				</div>
			</Row>
		</Container>
	);
}
