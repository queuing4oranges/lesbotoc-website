import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGetEvents from "../../hooks/useGetEvents";

import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import { Spinner } from "../includes/Spinner";

import Moment from "react-moment";

import bgImage from "../../assets/calendar_images/pride-flag-house-bg.png";

import { 
	Row, Col, 
	Card, CardBody, CardText, CardTitle, CardSubtitle
} from "reactstrap";


export default function Calendar() {
	const { events, loading, error, getEvents } = useGetEvents();

	useEffect(() => {
		getEvents(300);
	}, []);

	if (loading) {
		return (
			<div><Spinner/></div>
		);
	}

	if (error) {
		return console.log(error);
	}

	return (
		<div 
			className="screen-wrapper h-100"
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: "repeat",
			}}
		>
			<Navbar/>
			<h2 className="screen-title calendar-title">Kalendář</h2>
			
			<div className="events-container d-flex flex-column mb-5 h-100">
				
				<Row className="d-flex justify-content-center mb-2 categories">
					<Col md="2" className="d-flex justify-content-center">						
						<i className="bi bi-square me-2 blue"></i>
						<p>Lesbotoč events</p>
					</Col>
					<Col md="2" className="d-flex justify-content-center">						
						<i className="bi bi-square me-2 grey"></i>
						<p>Other events</p>
					</Col>
					<Col md="2" className="d-flex justify-content-center">						
						<i className="bi bi-square me-2 red"></i>
						<p>Speed Dating</p>
					</Col>
				</Row>
				
				<Row className="d-flex justify-content-center h-100">
					<div className="grid-wrapper h-100">
						{events &&
						events.map((event) => (
								<Link
									key={event.id}
									className="d-flex flex-column"
									to={`/kalendar/${event.id}`}
								>
									<Card
										style={{
											width: "12rem",
											height: "12rem",
											backgroundColor:
												event.event_type === "Speed Dating"
												? "#ed7f71"
												: event.event_type === "Other Event"
												? "#3fc16f"
												: event.event_type === "Lesbotoc Camp"
												? "#EC9704"
												: "#7ab6cb",
											boxShadow: "3px 3px 3px 0px rgba(0, 0, 0, 0.3)",
											}}>
											<CardBody className="h-100">
											<CardSubtitle className="d-flex justify-content-between">
												{event.date === "0000-00-00" ? (
												""
												) : (
												<p>
													<Moment format="D.MM.YYYY">{event.date}</Moment>
													&nbsp;
												</p>
												)}
												<p>{event.time === "00:00:00" ? "" : event.time}</p>
											</CardSubtitle>

											<CardTitle className="fw-bold">
												<h5>{event.name}</h5>
											</CardTitle>

											<CardText className="d-flex">
												<i className="bi bi-geo-alt me-1"></i>
												<span className="mb-1" title={event.loc_name}>{event.loc_name}</span>
											</CardText>
											</CardBody>
									</Card>
								</Link>
							))
						}
					</div>
				</Row>

			</div>
			<Footer/>
		</div>
	)
}