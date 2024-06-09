import React, { useEffect } from 'react';

import Footer from '../includes/Footer';
import Navbar from '../includes/Navbar';
import { Spinner } from '../includes/Spinner';

import useGetImages from '../../hooks/useGetImages';

export default function Gallery() {
	const { images, loading, getImages } = useGetImages();

	useEffect(() => {
		getImages();
	}, []);

	if (loading) {
		return (
			<div>
				<Spinner />
			</div>
		);
	}

	return (
		<div>
			<Navbar />
				<div className='user-container gallery-container position-relative'>
					<h2 className='screen-title'>Galerie</h2>

					{images && (
						<div className='user-gallery-cont'>
							{images.map((img, key) => {
								const { filename, alt, title } = img;
								return (
									<div key={key} className='user-img-cont'>
										<img
											className='user-gallery-img'
											src={`https://api.lesbotoc.com/images/images/${filename}`}
											alt={`${alt}`}
										/>
										<p className='user-img-title'>{title}</p>
									</div>
								);
							})}
						</div>
					)}
				</div>
			<Footer />
		</div>
	);
}
