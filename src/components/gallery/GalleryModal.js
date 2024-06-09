import React from 'react';
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import './gallerymodal.scss';

export default function GalleryModal({ galleryModal, setGalleryModal, images, currentIndex, setCurrentIndex }) {

	// Check if images array exists, has elements, and currentIndex is valid
	if (!images || images.length === 0 || !images[currentIndex]) {
		return null;
	}

	const { filename, title, alt } = images[currentIndex];

	const handleShowNext = () => {
		setCurrentIndex((currentIndex + 1) % images.length);
	};

	// Moving to next image and handling negative numbers
	const handleShowPrevious = () => {
		setCurrentIndex((currentIndex - 1 + images.length) % images.length);
	};

	const closeModal = () => {
		setGalleryModal(false);
	}

	return (
		<Modal centered size='xl' isOpen={galleryModal} toggle={closeModal} onBackdropClick={closeModal}>
			<ModalHeader className='d-flex justify-content-center'>
				<p>{title}</p>
				<i className="fs-1 bi bi-x-circle" onClick={() => closeModal()}/>
			</ModalHeader>
			<ModalBody className='d-flex justify-content-center align-items-center'>
				<span className='me-3' onClick={() => handleShowPrevious()}>
					<i className='fs-2 bi bi-arrow-left' />
				</span>
				<div>

					<img
						src={`https://api.lesbotoc.com/images/images/${filename}`}
						alt={alt}
						className='modal-gallery-img'
					/>
				</div>
				<span className='ms-3' onClick={() => handleShowNext()}>
					<i className='fs-2 bi bi-arrow-right' />
				</span>
			</ModalBody>
		</Modal>
	);
};
