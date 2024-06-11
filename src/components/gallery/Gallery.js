import React, { useEffect, useState } from 'react';

import Footer from '../includes/Footer';
import Navbar from '../includes/Navbar';
import { Spinner } from '../includes/Spinner';
import GalleryModal from './GalleryModal'

import useGetImages from '../../hooks/useGetImages';

export default function Gallery() {
	const { images, loading, getImages } = useGetImages();
	const [galleryModal, setGalleryModal] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(false);

	useEffect(() => {
		getImages();
	}, []);

	if (loading) {
		return (
			<div>
				<Spinner />
			</div>
		);
	};

	const showImage = (idx) => {
		setCurrentIndex(idx);
		setGalleryModal(true);
	};

	return (
		<div>
			<div className='gallery-container position-relative position-relative d-flex flex-column'>
				<Navbar/>
					<h2 className='screen-title'>Galerie</h2>

					{images && (
						<div className='user-gallery-cont mb-5'>
							{images.map((img, idx) => {
								const { filename, alt, title } = img;
								return (
									<div key={idx} className='user-img-cont' onClick={() => showImage(idx)}>
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
				<GalleryModal
					galleryModal={galleryModal}
					setGalleryModal={setGalleryModal}
					images={images}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
				/>
			<Footer />
		</div>
	);
}
