import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { navbarlinks } from '../../data/NavbarLinks';
import MobileNavbar from './MobileNavbar';

export default function Navbar() { 
	const [showBurger, setShowBurger] = useState(false)
	
	useEffect(()=>{
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				setShowBurger(true)
			} else {
				setShowBurger(false)
			}
		};
		
		handleResize();
		
		window.addEventListener('resize', handleResize);
		
		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	
	return (
		<>
		{showBurger ? (
			<MobileNavbar />
		) : (
		<nav className='navbar navbar-expand bg-light navbar-wrapper'>
				<div className='container-fluid'>
					<div className='logo-container d-flex ms-5'>
						<NavLink
							className='navbar-brand'
							to={'/'}
							style={({ isActive }) => ({
							color: isActive ? '#eb5a49' : '#7ab6cb',
							textDecoration: 'none',
							})}
						>
							<p>Lesbotoč</p>
						</NavLink>
					</div>
					<div className='d-flex justify-content-end' style={{width: '60%'}}>
						<a
							href='https://www.facebook.com/seznamsenatoci'
							target='_blank'
							rel='noreferrer'
							aria-label='Facebook'
						>
							<i className='bi bi-facebook me-2 fs-2' style={{color: '#003243'}} />
						</a>
						<a
							href='https://www.instagram.com/lesbotoc/'
							target='_blank'
							rel='noreferrer'
							aria-label='Instagram'
						>
							<i className='bi bi-instagram fs-2' style={{fontSize: '2rem', color: '#003243'}} />
						</a>
					</div>
				
					<ul className='navbar-nav navbar-list me-3'>
						{navbarlinks.map((link) => (
							<li key={link.id} className='me-4 fs-4'>
								<NavLink
									to={link.to}
									style={({ isActive }) => ({
										color: isActive ? '#ed7f71' : '#003243',
										textDecoration: 'none',
										whiteSpace: 'nowrap'
									})}
								>
								{link.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</nav>
			)}
		</>
	);
}
