import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment-timezone';

import Navbar from '../includes/Navbar';
import Footer from '../includes/Footer';
import SignupForm from './SignupForm';
import { Spinner } from '../includes/Spinner';
import useShowEvent from '../../hooks/useShowEvent';
import { API_BASE_URL } from '../../config';

import { Col, Row, Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import Moment from 'react-moment';
import { SiGooglecalendar } from 'react-icons/si';
import { FaApple } from 'react-icons/fa';

export default function SingleCalendarEvent() {
	const [showMod, setShowMod] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const { oneEvent, error, loading, showEvent } = useShowEvent();
	const {
		name, event_type, description,
		date, time,
		loc_name, loc_website, loc_address,
		price, capacity,
		image_path, image_alt,
		latitude, longitude, signup 
	} = oneEvent;
	const [paragraphs, setParagraphs] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		showEvent(id);
	}, []);

	useEffect(() => {
		if(description) {
			
			// Make paragraphs - split by \n
			const paragraphArray = description.split('\n');
			setParagraphs(paragraphArray);

		} else {
			setParagraphs([])
		}
	}, [description])
	
	if ((oneEvent === 0) || undefined) {
		return (
			<div className='mt-5 pt-5 d-flex align-items-center justify-content-center'>
				<h1 className='mt-5 pt-5'><Spinner/></h1>
			</div>
		)
	}

	const toggle = () => setDropdownOpen((prevState) => !prevState)
	
	// Create a calender event for Google user
	const handleGoogleCalendar = () => {		
		const startTime = moment.tz(`${date}T${time}`, 'Europe/Paris');
		const endTime = startTime.clone().add(3, 'hours')
		
		// Format the dates to YYYYMMDDTHHmmssZ
		const formattedStartTime = startTime.format('YYYYMMDDTHHmmss');
		const formattedEndTime = endTime.format('YYYYMMDDTHHmmss');

		const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(name)}&dates=${formattedStartTime}/${formattedEndTime}&location=${encodeURIComponent(loc_address)}&sprop=&sprop=name:`;
		
		window.open(googleCalendarUrl, '_blank');
	}
	
	// Create a calender event for Apple user
	const handleAppleCalendar = () => {
		const startTime = moment.tz(`${date}T${time}`, 'Europe/Paris');
		const endTime = startTime.clone().add(3, 'hours')

		// Format the dates to YYYYMMDDTHHmmssZ
		const formattedStartTime = startTime.format('YYYYMMDDTHHmmss');
		const formattedEndTime = endTime.format('YYYYMMDDTHHmmss');

		// Strip leading whitespace
		const stripIndent = (str) => str.replace(/^\s+/gm, ''); // Preventing problems with whitespace in isContent
		
		// Create the .ics file content
		const icsContent = stripIndent(`
			BEGIN:VCALENDAR
			VERSION:2.0
			BEGIN:VEVENT
			SUMMARY:${name}
			DTSTART:${formattedStartTime}
			DTEND:${formattedEndTime}
			LOCATION:${loc_address}
			END:VEVENT
			END:VCALENDAR
		`);
		
		// Create a Blob with the .ics content
		const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', 'event.ics');
		document.body.appendChild(link);

		// Trigger a click on the link to start the download
		link.click();

		// Remove the link from the document
		document.body.removeChild(link);
	};

	
	if (error) {
		return console.log(error);
	}
	
	if (loading) {
		return <Spinner />
	}

	return (
		<div className='screen-wrapper'>
			<Navbar />
			<h2 className='screen-title'>{name}</h2>
			<div className='event-container'>
				{oneEvent && (
					<div className='d-flex flex-column h-100'>

						<Row md='12' sm='10' className='mb-5 p-5 event-info d-flex justify-content-center align-items-center'>
							<Col md='5' sm='12' className='h-100 d-flex flex-column info-column p-4'>
								<div className='d-flex justify-content-between align-items-start'>
									<div className='d-flex'>
										<i className='bi bi-calendar2-heart me-3' />
										<p><Moment format='D.MM.YYYY'>{date}</Moment></p>
									</div>
									<div className='mt-0'>
										<Dropdown isOpen={dropdownOpen} toggle={toggle} className='add-event-dropdown'>
											<DropdownToggle size='sm' className='d-flex'>
												<i className='bi bi-plus-square me-2' />
												<p className='m-0'>Add to Calendar</p>
											</DropdownToggle>
											<DropdownMenu>
												<DropdownItem
													onClick={()=>handleGoogleCalendar()}
													className='d-flex px-2 align-items-center'>
													<SiGooglecalendar className='me-3' />
													<p className='mb-0'>Google</p>
												</DropdownItem>
												<DropdownItem
													onClick={()=>handleAppleCalendar()}
													className='d-flex px-2 align-items-center'>
													<FaApple className='me-3'/>
													<p className='mb-0'>Apple</p>
												</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</div>
								</div>

								{time &&
								<div className='d-flex'>
									<i className='bi bi-clock me-3' />
									<p>{time}</p>
								</div>
								}

								{loc_name &&
								<div className='d-flex'>
									<i className='bi bi-geo-alt me-3' />
									<p>{loc_name}</p>
								</div>
								}
								
								{loc_address &&
								<div className='d-flex'>
									<i className='bi bi-map me-3' />
									<p>{loc_address}</p>
								</div>
								}

								{loc_website &&
								<div className='d-flex'>
									<i className='bi bi-globe me-3' />
									<p><a className='event-website' href={loc_website} target='_blank' rel='noreferrer'>{loc_website}</a></p>
								</div>
								}

								{price &&
								<div className='d-flex'>
									<i className='bi bi-cash-coin me-3' />
									<p>{price} CZK</p>
								</div>
								}

								{capacity &&
								<div className='d-flex'>
									<i className='bi bi-people me-3' />
									<p>max. {capacity} lidí</p>
								</div>
								}

								{description &&
								<div className='d-flex'>
									<i className='bi bi-info-square me-3' />
										<div className='d-flex flex-column'>
										{paragraphs.map((par, i) =>(
											<p key={i}>{par.replace(/\\n|\\r\\n|\\r/g, '')}</p> // When using \n - it will make a new line
										))
										}
										</div>
								</div>
								}

								<div className='d-flex justify-content-start align-items-center'>
									<Link to={'/kalendar'} className='me-5'>
										<Button className='btn back-btn'>
											Zpět
										</Button>
									</Link>

									{signup && signup === '1' ? (
										<Link>
											<Button
												onClick={() => setShowMod(!showMod)}
												className='btn back-btn orange-btn'
											>
												Přihlášeni
											</Button>
										</Link>
									) : (
										null
									)}
								</div>

							</Col>

							<Col md='5' sm='12' className='p-5 single-image-column'>
								<img
									src={`${API_BASE_URL}/events/images/${image_path}`}
									alt={image_alt}
									loading='eager'
									style={{ width: '100%', height: '100%', objectFit: 'contain' }}
								/>
							</Col>
						</Row>

						<Row md='12' className='mb-5 d-flex justify-content-center px-2'>
							<Col md='8' className='mb-5'>
								<div className='gmaps-wrapper'>
									<iframe
										title='Find us here'
										id='iframeId'
										height='300px'
										width='100%'
										src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`}
									></iframe>
								</div>
							</Col>
						</Row>
						
						{showMod && (
							<SignupForm
								date={date}
								time={time}
								location={loc_name}
								name={name}
								event_type={event_type}
								setShowMod={setShowMod}
								showMod={showMod}
							/>
						)}
					</div>
				)}
			</div>
			<div className='position-relative'>
				<Footer />
			</div>
		</div>
	);
}
