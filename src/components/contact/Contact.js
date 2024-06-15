import React from 'react';
import { useForm } from 'react-hook-form';

import {
	Row, Col, Button,
	Card, CardTitle, CardBody,
	Form, FormGroup, FormFeedback, Label, Input
	} from 'reactstrap';
	
import Navbar from '../includes/Navbar';
import Footer from '../includes/Footer';
import ContactIllustration from './ContactIllustration';

export default function Contact() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();
	
	const contactNameField = register('contactName', {
		required: 'Jméno je povinný údaj'
	});
	
	const contactMailField = register('contactMail', {
		required: 'E-mailová adresa je povinný údaj',
		pattern: {
			value: /^[A-Z0-9._%+-ěščřžýá]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
			message: 'Tato e-mailová není správná, zadej prosím správnou.'
		}
	});
	
	const contactMessageField = register('contactMessage', {
		required: 'Tvoje zpráva je povinný údaj',
		pattern: {
			value: /^.{5,}$/,
			message: 'Tvoje zpráva musí obsahovat alespoň 5 znaků.'
		}
	});
	
	const onSubmit = async () => {
		console.log('this form works')
	}
	
	
	return (
		<>
			<Navbar />
			<div className='contact-container h-100'>
				<Row className='d-flex justify-content-center align-items-center'>
					<Col md='5' sm='12'>
						<ContactIllustration width={600} height={800} />
					</Col>
					<Col md='7' sm='12' className='p-5' style={{width: '40vw', height: 'fit-content'}}>
						<Form onSubmit={handleSubmit(onSubmit)} className='h-100'>
							<Card className='h-100 p-5 shadow'>
								<CardTitle>
									<h3>Kontaktuj nás</h3>
								</CardTitle>

								<CardBody>
									<FormGroup>
										<Label htmlFor='contactNameField' className='text-start w-100'>
											Jméno
										</Label>
										<Input
											id='contactNameField'
											name='contactName'
											invalid={!!errors.contactName}
											innerRef={contactNameField.ref}
											onBlur={contactNameField.onBlur}
											onChange={contactNameField.onChange}
										/>
										{errors?.contactName && <FormFeedback className='text-start'>{errors.contactName.message}</FormFeedback>}
									</FormGroup>

									<FormGroup>
										<Label htmlFor='contactMailField' className='text-start w-100'>
											E-mailová adresa
										</Label>
										<Input
											id='contactMailField'
											name='contactMail'
											invalid={!!errors.contactMail}
											innerRef={contactMailField.ref}
											onBlur={contactMailField.onBlur}
											onChange={contactMailField.onChange}
										/>
										{errors?.contactMail && <FormFeedback className='text-start'>{errors.contactMail.message}</FormFeedback>}
									</FormGroup>

									<FormGroup>
										<Label htmlFor='contactMessageField' className='text-start w-100'>
											Tvoje zpráva
										</Label>
										{/* TODO this should be a textarea! */}
										<Input
											id='contactMessageField'
											name='contactMessage' 
											invalid={!!errors.contactMessage}
											innerRef={contactMessageField.ref}
											onBlur={contactMessageField.onBlur}
											onChange={contactMessageField.onChange}
										/>
										{errors?.contactMessage && <FormFeedback className='text-start'>{errors.contactMessage.message}</FormFeedback>}
									</FormGroup>
								</CardBody>
								<div className='d-flex justify-content-center'>
									<Button type='submit' className='w-50' color='warning'>Odeslat zprávu</Button>
								</div>
							</Card>
						</Form>
					</Col>
				</Row>
			</div>
			<div>
				<Footer />
			</div>
		</>
	)
}
