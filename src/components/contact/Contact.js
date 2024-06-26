import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

import {
	Button,
	Card, CardTitle, CardBody,
	FormGroup, FormFeedback, Label, Input
} from 'reactstrap';
	
import Navbar from '../includes/Navbar';
import Footer from '../includes/Footer';
import ContactIllustration from './ContactIllustration';
import SemiCircle from './SemiCircle';

import { YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID } from './EmailCredentials';

export default function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const formRef = useRef();

	const [formData, setFormData] = useState({
		user_name: '',
		message: '',
		user_email: ''
	});

	const contactNameField = register('user_name', {
		required: 'Jméno je povinný údaj'
	});
	
	const contactMailField = register('user_email', {
		required: 'E-mailová adresa je povinný údaj',
		pattern: {
			value: /^[A-Z0-9._%+-ěščřžýá]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
			message: 'Tato e-mailová není správná, zadej prosím správnou.'
		}
	});
	
	const contactMessageField = register('message', {
		required: 'Tvoje zpráva je povinný údaj',
		pattern: {
			value: /^.{5,}$/,
			message: 'Tvoje zpráva musí obsahovat alespoň 5 znaků.'
		}
	});
	
	const sendEmail = () => {
		emailjs
		.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formRef.current, YOUR_PUBLIC_KEY)
		.then((response) => {
			swal('Děkujeme!', 'Ozveme se co nejdříve.', 'success');
			console.log('Response after form submitting: ', response);
			resetFormData();
		})
	};

	const resetFormData = () => {
		setFormData({
			user_name: '',
			message:'',
			user_email:''
		})
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};
	
	return (
		<div className='h-100 contact-container d-flex flex-column'>
			<Navbar />
				<div className='contact-row d-flex justify-content-center align-items-center h-100'>
					<div className='contact-image-column'>
						<SemiCircle />
						<ContactIllustration width={500} height={600}/>
					</div>
					<div className='contact-form-column'>
						<form
							ref={formRef}
							onSubmit={handleSubmit(sendEmail)}
							method='post'
							id='contactForm'
							className=''
						>
							<Card className='p-5 shadow w-100'>
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
											name='user_name'
											value={formData.user_name}
											onChange={handleInputChange}
											invalid={!!errors.user_name}
											innerRef={contactNameField.ref}
											onBlur={contactNameField.onBlur}
										/>
										{errors?.user_name && <FormFeedback className='text-start'>{errors.user_name.message}</FormFeedback>}
									</FormGroup>

									<FormGroup>
										<Label htmlFor='contactMailField' className='text-start w-100'>
											E-mailová adresa
										</Label>
										<Input
											id='contactMailField'
											name='user_email'
											value={formData.user_email}
											onChange={handleInputChange}
											invalid={!!errors.user_email}
											innerRef={contactMailField.ref}
											onBlur={contactMailField.onBlur}
										/>
										{errors?.user_email && <FormFeedback className='text-start'>{errors.user_email.message}</FormFeedback>}
									</FormGroup>

									<FormGroup>
										<Label htmlFor='contactMessageField' className='text-start w-100'>
											Tvoje zpráva
										</Label>
										<Input
											id='contactMessageField'
											name='message'
											type='textarea'
											value={formData.message}
											onChange={handleInputChange}
											style={{height: '200px'}}
											invalid={!!errors.message}
											innerRef={contactMessageField.ref}
											onBlur={contactMessageField.onBlur}
										/>
										{errors?.message && <FormFeedback className='text-start'>{errors.message.message}</FormFeedback>}
									</FormGroup>

								</CardBody>
								<div className='d-flex justify-content-center'>
									<Button type='submit' className='w-50' color='warning'>Odeslat zprávu</Button>
								</div>
							</Card>
						</form>
					</div>
				</div>
				<div className='position-relative'>
					<Footer />
				</div>
		</div>
	);
};
