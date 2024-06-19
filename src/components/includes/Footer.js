import React from 'react';
import { Col, Row } from 'reactstrap';

export default function Footer() {

	const currentYear = new Date();

	return (
		<Row className='footer-row position-absolute bottom-0 start-0 w-100 m-0'>
			<Col className='w-100'>
				<div className='w-100 d-flex flex-column justify-content-center align-items-start copyright-katja px-3'>
					<p className='pt-3 mb-0'>&copy; {currentYear.getFullYear()}&nbsp; Lesbotoč </p>
					<p>made by
						<a
							href='https://www.queuing4oranges.com/'
							target='_blank'
							rel='noreferrer'
							aria-label='Portfolio Katja Zenker'
							className='text-danger'
						>
							&nbsp;Katja Zenker
						</a>
					</p>
				</div>
			</Col>
		</Row>
	);
};
