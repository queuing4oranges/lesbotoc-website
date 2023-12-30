import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import SpeedDating from "./SpeedDating";
import { Spinner } from "../includes/Spinner";
import useShowEvent from "../../../hooks/useShowEvent";

import { Col, Row, Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import Moment from "react-moment";
import { SiGooglecalendar } from "react-icons/si";
import { FaApple } from "react-icons/fa";

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
		latitude, longitude, 
	} = oneEvent;
	const [paragraphs, setParagraphs] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		showEvent(id);
	}, []);

	useEffect(() => {
		if(description) {
			
			//make paragraphs - split signalled by \n
			const paragraphArray = description.split("\n"); 
			setParagraphs(paragraphArray);

		} else {
			setParagraphs([])
		}
	}, [description])
	
	const toggle = () => setDropdownOpen((prevState) => !prevState)

	if (error) {
		return console.log(error);
	}
	
	if (loading) {
		return <Spinner />
	}

	return (
		<div className="screen-wrapper">
			<Navbar />
			<h2 className="screen-title">{name}</h2>
			<div className="calendar-container">
				{oneEvent && (
				<div className="d-flex flex-column h-100">

					<Row md="12" className="mb-5 p-5 event-info justify-content-center">
						<Col md="5" sm="12" className="d-flex flex-column info-column p-4">
							<div className="d-flex justify-content-between align-items-start">
								<div className="d-flex">
									<i className="bi bi-calendar2-heart mr-3"></i>
									<p><Moment format="D.MM.YYYY">{date}</Moment></p>
								</div>
								<div className="mt-0">
									<Dropdown isOpen={dropdownOpen} toggle={toggle} className="add-event-dropdown">
										<DropdownToggle size="sm">
											<i className="bi bi-plus-square mr-2"></i>
											Add to Calendar
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem 
												onClick={()=>console.log("added to google")} 
												className="px-2">
													<SiGooglecalendar className="mr-3" />
													Google
											</DropdownItem>
											<DropdownItem 
												onClick={()=>console.log("added to apple")} 
												className="px-2">
													<FaApple className="mr-3"/>
													Apple
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
							
							<div className="d-flex">
								<i className="bi bi-clock mr-3"></i>
								<p>{time}</p>
							</div>
							
							<div className="d-flex">
								<i className="bi bi-geo-alt mr-3"></i>
								<p>{loc_name}</p>
							</div>
							
							<div className="d-flex">
								<i className="bi bi-map mr-3"></i>
								<p>{loc_address}</p>
							</div>
							
							{loc_website &&
							<div className="d-flex">
								<i className="bi bi-globe mr-3"></i>
								<p><a className="event-website" href={loc_website} target="_blank" rel="noreferrer">{loc_website}</a></p>
							</div>
							}
							
							{price &&
							<div className="d-flex">
								<i className="bi bi-cash-coin mr-3"></i>
								<p>{price} CZK</p>
							</div>
							}
							
							{capacity &&
							<div className="d-flex">
								<i className="bi bi-cash-coin mr-3"></i>
								<p>max. {capacity} lidí</p>
							</div>
							}
							
							{description &&
							<div className="d-flex">
								<i className="bi bi-info-square mr-3"></i>
									<div className="d-flex flex-column">
									{paragraphs.map((par, i) =>(
										<p key={i}>{par.replace(/\\n|\\r\\n|\\r/g, '')}</p> //when using \n - it will make a new line 
									))
									}
									</div>
							</div>
							}
							
							<div className="d-flex justify-content-start align-items-center">
								<Link to={"/kalendar"} className="mr-5">
									<Button className="btn back-btn">
										Zpět
									</Button>
								</Link>
								
								{event_type === "Speed Dating" ? (
								<Link>
									<Button
										onClick={() => setShowMod(!showMod)}
										className="btn back-btn orange-btn"
									>
										Přihlášeni
									</Button>
								</Link>
								) : (
									""
								)}
								{/* TODO {event_type === "Lesbotoc Camp" ? ( */}
							</div>
							
						</Col>
						
						<Col md="5" sm="12" className="p-5 image-column">
							<img
								src={`https://api.lesbotoc.com/events/images/${image_path}`}
								alt={image_alt}
								loading="eager"
								style={{ width: '100%', height: '100%', objectFit: 'contain' }}
							/>
						</Col>
					</Row>
					
					<Row md="12" className="mb-5 d-flex justify-content-center px-2">
						<Col md="8" className="mb-5">
							<div className="gmaps-wrapper">
								<iframe
									id="iframeId"
									height="300px"
									width="100%"
									src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`}
								></iframe>
							</div>
						</Col>
					</Row>
					
					{showMod && (
						<SpeedDating
							date={date}
							time={time}
							location={loc_name}
							setShowMod={setShowMod}
						/>
					)}
				</div>
				)}
			</div>
			<Footer />
		</div>
	);
}
