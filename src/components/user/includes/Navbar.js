import React from "react";
import { NavLink } from "react-router-dom";

import { navbarlinks } from "../../../data/NavbarLinks";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand bg-light navbar-wrapper">
			<div className="container-fluid">
				<div className="logo-container d-flex ms-5">
					<NavLink
						className="navbar-brand"
						to={"/"}
						style={({ isActive }) => ({
						color: isActive ? "#eb5a49" : "#7ab6cb",
						textDecoration: "none",
						})}
					>
						<p
							style={{
							fontFamily: "'Amatic SC', cursive",
							fontSize: "22px",
							color: "black", 
							fontWeight: "600",
							marginBottom: 0
						}}
						>
						Lesbotoč
						</p>
					</NavLink>
				</div>
				<div className="d-flex justify-content-end" style={{width: "60%"}}>
					<a
						href="https://www.facebook.com/seznamsenatoci"
						target="_blank"
						rel="noreferrer"
						aria-label="Facebook"
					>
					<i className="bi bi-facebook me-2 fs-3" style={{fontSize: "2rem", color: "#003243"}}></i>
					</a>
					<a
						href="https://www.instagram.com/lesbotoc/"
						target="_blank"
						rel="noreferrer"
						aria-label="Instagram"
					>
					<i className="bi bi-instagram fs-3" style={{fontSize: "2rem", color: "#003243"}}></i>
					</a>
				</div>
			
				<ul className="navbar-nav navbar-list me-3">
				{navbarlinks.map((link) => (
						<li key={link.id} className="me-4">
							<NavLink
								to={link.to}
								style={({ isActive }) => ({
									color: isActive ? "#feebdd" : "#003243",
									textDecoration: "none"
								})}
							>
							{link.name}
							</NavLink>
						</li>
				))}
				</ul>
			</div>
		</nav>
	);
}
