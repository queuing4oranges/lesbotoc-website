import React from 'react';
import { Row, Button } from 'reactstrap';

export default function SemiCircle() {
  return (
	<Row className='position-relative'>
		<div className='contact-button-container'>
			<Button color='warning' className='fs-2 circle-btn'>
				<a
					href='https://www.instagram.com/lesbotoc/'
					target='_blank'
					rel='noreferrer'
					aria-label='Instagram'
					title='Instagram'
				>
					<i className='bi bi-instagram' />
				</a>
			</Button>
			<Button color='warning' className='fs-2 circle-btn'>
				<a
					href='https://www.facebook.com/seznamsenatoci'
					target='_blank'
					rel='noreferrer'
					aria-label='Facebook'
					title='Facebook'
				>
					<i className='bi bi-facebook' />
				</a>
			</Button>
			<Button color='warning' className='fs-2 circle-btn'>
				<a href='tel:737364699' aria-label='Phone Number'>
					<i className='bi bi-telephone' />
				</a>
			</Button>
			<Button color='warning' className='fs-2 circle-btn'>
				<a href='mailto: lesbotoc@gmail.com' aria-label='Email address'>
					<i className='bi bi-envelope' />
				</a>
			</Button>
		</div>
	</Row>
  );
};
