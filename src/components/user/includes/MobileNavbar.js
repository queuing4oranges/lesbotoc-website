import React, { useState } from "react";
import { navbarlinks } from "../../../data/NavbarLinks";
import { NavLink } from "react-router-dom";

export default function MobileNavbar() {
	const [openMenu, setOpenMenu] = useState(false);
	
	return (
		<nav className="navbar mobile-navbar-wrapper sticky-top">
			{!openMenu ? (
				<div className="d-flex justify-content-between w-100">
					<div className="logo-container d-flex align-items-center ms-2">
						<NavLink
							className="navbar-brand"
							to={"/"}
							style={({ isActive }) => ({
							color: isActive ? "#eb5a49" : "#7ab6cb",
							textDecoration: "none",
							})}
						>
							<p>Lesbotoč</p>
						</NavLink>
					</div>
					<button
						className="btn btn-outline fs-1"
						onClick={() => setOpenMenu(!openMenu)}
					>
						<i className="bi bi-list"></i>
					</button>
				</div>
				) : (
				<div className="d-flex flex-column align-items-end">
					<button
						className="btn btn-outline fs-1"
						onClick={() => setOpenMenu(!openMenu)}
					>
						<i className="bi bi-x-lg me-2"></i>
					</button>

					{navbarlinks.map((link) => (
						<div key={link.id} className="navbar-link">
							<NavLink to={link.to} className="fs-4">
								<p className="me-4 mb-1 text-end">{link.name}</p>
							</NavLink>
						</div>
					))}
				</div>
				)
			}
		</nav>
	);
}
