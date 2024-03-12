import Reactj, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function GalleryModal() {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
		<Button color="danger" onClick={toggle}>
			Click Me
		</Button>
		<Modal isOpen={modal} toggle={toggle}>
			<ModalHeader toggle={toggle}>Modal title</ModalHeader>
				<ModalBody>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>
						Do Something
					</Button>{' '}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}
