import React from "react";
import { Container, Col, Row } from "reactstrap";

export default function Footer() {
//getting updated year for footer
const currentYear = new Date();

	return (
		<Container fluid className="footer-wrapper">
			<Row>
				<Col md="8">					
					<div className="d-flex flex-column justify-content-center align-items-start copyright-katja">
						<p className="pt-3 mb-0">&copy; {currentYear.getFullYear()}&nbsp; Lesbotoč </p>
						<p>made by 						
							<a
								href="https://www.queuing4oranges.com/"
								target="_blank"
								rel="noreferrer"
								aria-label="Portfolio Katja Zenker"
								className="text-danger"
							>
							&nbsp;Katja Zenker
							</a>   
						</p>
					</div>
				</Col>
				
				<Col md="2" className="d-flex align-items-center justify-content-center">
					<div>
						<a
							href="https://www.facebook.com/seznamsenatoci"
							target="_blank"
							rel="noreferrer"
							aria-label="Facebook"
							className="mr-2"
						>
							<i className="bi bi-facebook" style={{fontSize: "2rem", color: "#003243"}}></i>
						</a>
						
						<a
							href="https://www.instagram.com/lesbotoc/"
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
							className="ml-2"
						>
							<i className="bi bi-instagram" style={{fontSize: "2rem", color: "#003243"}}></i>
						</a>
					</div>
				</Col>
				
				<Col md="2" className="d-flex align-items-center justify-content-center">
					{/*TODO <NavLink to={"/admin"}></NavLink> */}
					<button className="btn admin-panel-button">AdminPanel</button>
				</Col>
			</Row>
		</Container>
	);
}
