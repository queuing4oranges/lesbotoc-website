import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import useGetEvents from '../../hooks/useGetEvents';
import Navbar from '../includes/Navbar';
import Footer from '../includes/Footer';
import { Spinner } from '../includes/Spinner';
import bgImage from '../../assets/calendar_images/pride-flag-house-bg.png';
import RainbowCloud from '../../assets/icons/RainbowCloud';

import { 
	Row, Col, 
	Card, CardBody, CardText, CardTitle, CardSubtitle
} from 'reactstrap';


export default function Calendar() {
	const { events, loading, error, getEvents } = useGetEvents();
	const [moreEvents, setMoreEvents] = useState(false);
	const [sortedEvents, setSortedEvents] = useState({
		upcomingEvents: [],
		pastEvents: []
	});

	useEffect(() => {
		getEvents(300);
	}, []);

	useEffect(() => {
		if (events) {
			const sorted = sortEvents(events);
			setSortedEvents(sorted);
		}
	}, [events]);

	const sortEvents = (events) => {

		// Get current timestamp in milliseconds
		const currentTimestamp = new Date().getTime();

		// Extract dates, then convert object to an array of events
		const eventsArray = Object.values(events).map(eve => ({
			...eve,
			date: new Date(eve.date).getTime()
		}))

		// Sort nearest events in the future to the start of the array
		eventsArray.sort((a,b) => {
			const timeDifferenceA = Math.abs(a.date - currentTimestamp);
			const timeDifferenceB = Math.abs(b.date - currentTimestamp);
			return timeDifferenceA - timeDifferenceB
		});

		const upcomingEvents = [];
		const pastEvents = [];
		const oneDayInMilliseconds = 86400000; // Add one day for the event to stay in the upcoming events longer
		eventsArray.forEach(event => {
			if (event.date > (currentTimestamp - oneDayInMilliseconds)) {
				upcomingEvents.push(event);
			} else {
				pastEvents.push(event);
			}
		});

		return { upcomingEvents, pastEvents }
	};

	if (loading) {
		return (
			<div><Spinner/></div>
		);
	};

	if (error) {
		return console.log(error);
	};

	return (
		<div 
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: 'repeat',
				backgroundSize: 'auto',
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
			}}
		>
			<Navbar/>
			<h2 className='screen-title calendar-title'>Kalendář</h2>
			
			<div className='events-container d-flex flex-column mb-5 h-100'>
				
				<Row className='d-flex justify-content-center mb-4 categories'>
					<Col md='2' className='d-flex justify-content-center'>
						<i className='bi bi-square me-2 blue' />
						<p>Lesbotoč events</p>
					</Col>
					<Col md='2' className='d-flex justify-content-center'>
						<i className='bi bi-square me-2 grey' />
						<p>Other events</p>
					</Col>
					<Col md='2' className='d-flex justify-content-center'>
						<i className='bi bi-square me-2 red' />
						<p>Speed Dating</p>
					</Col>
				</Row>
				
				<Row className='d-flex justify-content-center align-items-center h-100'>
					<div className='grid-wrapper h-100'>
						{sortedEvents &&
							sortedEvents.upcomingEvents.map((event) => (
								<Link
									key={event.id}
									className='d-flex flex-column align-items-center'
									to={`/kalendar/${event.id}`}
								>
									<Card
										style={{
											width: '12rem',
											height: '12rem',
											backgroundColor: (event.event_type === 'Speed Dating') ? '#ed7f71'
												: (event.event_type === 'Other Event') ? '#3fc16f'
												: (event.event_type === 'Lesbotoc Camp') ? '#EC9704'
												: '#7ab6cb',
											boxShadow: '3px 3px 3px 0px rgba(0, 0, 0, 0.3)',
											}}>
											<CardBody className='h-100'>
											<CardSubtitle className='d-flex justify-content-between'>
												{(event.date === '0000-00-00') ? (
												''
												) : (
												<p>
													<Moment format='D.MM.YYYY'>{event.date}</Moment>
													&nbsp;
												</p>
												)}
												<p>{(event.time === '00:00:00') ? '' : event.time}</p>
											</CardSubtitle>

											<CardTitle className='fw-bold'>
												<h5>{event.name}</h5>
											</CardTitle>

											<CardText className='d-flex'>
												<i className='bi bi-geo-alt me-1' />
												<span className='mb-1' title={event.loc_name}>{event.loc_name}</span>
											</CardText>
											</CardBody>
									</Card>
								</Link>
							))
						}
						<Link
							className='d-flex flex-column align-items-center'
							onClick={() => setMoreEvents(!moreEvents)}>
							<Card
								className='more-events-card d-flex flex-column justify-content-center align-items-center'
								style={{
									width: '12rem',
									height: '12rem',
									backgroundColor: '#7ab6cb',
									boxShadow: '3px 3px 3px 0px rgba(0, 0, 0, 0.3)',
									}}>
											{moreEvents ?
												<RainbowCloud width={50} height={50}/>
											:
												<span className='d-flex flex-column justify-content-center'>
													<h6>Minulé</h6>
													<h6>eventy</h6>
													<i className="fs-2 bi bi-arrow-bar-right" />
												</span>
											}
							</Card>
						</Link>

						{!moreEvents && sortedEvents &&
							sortedEvents.pastEvents.map((event) => (
								<Link
									key={event.id}
									className='d-flex flex-column align-items-center'
									to={`/kalendar/${event.id}`}
								>
									<Card
										style={{
											width: '12rem',
											height: '12rem',
											backgroundColor: '#808588',
											opacity: 0.8,
											boxShadow: '3px 3px 3px 0px rgba(0, 0, 0, 0.3)',
											}}>
											<CardBody className='h-100'>
											<CardSubtitle className='d-flex justify-content-between'>
												{(event.date === '0000-00-00') ? (
												''
												) : (
												<p>
													<Moment format='D.MM.YYYY'>{event.date}</Moment>
													&nbsp;
												</p>
												)}
												<p>{(event.time === '00:00:00') ? '' : event.time}</p>
											</CardSubtitle>
											<CardTitle className='fw-bold'>
												<h5>{event.name}</h5>
											</CardTitle>
											<CardText className='d-flex'>
												<i className='bi bi-geo-alt me-1'/>
												<span className='mb-1' title={event.loc_name}>{event.loc_name}</span>
											</CardText>
											</CardBody>
									</Card>
								</Link>
							))
						}
					</div>
				</Row>
			</div>
			<div className='w-100 position-absolute bottom-0 end-0'>
				<Footer/>
			</div>
		</div>
	)
}
