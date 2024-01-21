import React from "react";
import { Label, Input, FormGroup, FormText, FormFeedback, Col } from "reactstrap";
import { ageGroups } from "../../data/Datalists";

export const NameField = ({ register, errors }) => {

	return (
		<FormGroup row className="mt-3">
			<Label sm={2} htmlFor="name" className="d-flex justify-content-start">
				<i className="bi bi-person me-2"></i>
				Jméno
			</Label>
			<Col sm={10} className="d-flex flex-column">
				<input	// errors not shown in reactstrap Input field
					className="form-control"
					id="name"
					{...register("name", { required: true, maxLength: 30, minLength: 3 })}
				/>
				{errors.name && errors.name.type === "required" && (
				<small className="text-danger">Our form feels a bit lonely without your name</small>
				)}
				{errors.name && errors.name.type === "minLength" && (
				<small className="text-danger">Minimum 3 characters. You can do it.</small>
				)}
				{errors.name && errors.name.type === "maxLength" && (
				<small className="text-danger">Maximum 30 characters.</small>
				)}

			</Col>
		</FormGroup>
	)
}

export const EmailField = ({ register, errors }) => {
	return (
		<FormGroup row>
			<Label sm={2} htmlFor="email" className="d-flex justify-content-start">
				<i className="bi bi-envelope-at me-2"></i>
				Email
			</Label>
			<Col sm={10}>
				<input
					className="form-control"
					id="email"
					type="email"
					{...register("email", { required: true, pattern: /^[A-Z0-9._%+-ěščřžýá]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
				/>
				{errors.email && errors.email.type === "required" && (
				<small className="text-danger">Oh, seems like we're missing an email address here</small>
				)}
				{errors.email && errors.email.type === "pattern" && (
				<small className="text-danger">"Oops! Stick to a valid format"</small>
				)}
			</Col>
		</FormGroup>
	)
}

export const AgeField = ({ register, errors }) => {
	return (
		<FormGroup row>
			<Label sm={2} htmlFor="age" className="d-flex justify-content-start">
				<i className="bi bi-cake2 me-2"></i>
				Věk
			</Label>
			<Col sm={10}>
				<input
					className="form-control"
					placeholder="*Share if you wish."
					id="age"
					type="text"
					list="user_ages"
					{...register("age", { pattern: /^[0-9]{2,3}$/ })}
				/>
				{errors.age && errors.age.type === "pattern" && (
				<small className="text-danger">Invalid format.</small>
				)}
				<datalist id="user_ages">
					{ageGroups.map((age) => (
					<option key={age.id} value={age.age}></option>
					))}
				</datalist>
			</Col>
		</FormGroup>
	)
}

export const PhoneField = ({ register, errors }) =>{
	return (
		<FormGroup row>
				<Label sm={2} htmlFor="phone" className="d-flex justify-content-start">
					<i className="bi bi-phone me-2"></i>
					Telefon*
				</Label>
				<Col sm={10}>
					<input
						className="form-control"
						id="phone"
						type="text"
						placeholder={errors.phone?.message}
						{...register("phone", { required: true, pattern: /^[0-9]+$/, maxLength: 14, minLength: 9 })}
					/>
					{errors.phone && errors.phone.type === "required" && (
					<small className="text-danger">Add your phone number for updates, please</small>
					)}
					{errors.phone && errors.phone.type === "pattern" && (
					<small className="text-danger">"Oops! Stick to a valid format"</small>
					)}
					{errors.phone && errors.phone.type === "minLength" && (
					<small className="text-danger">Minimum 9 digits. You can do it.</small>
					)}
					{errors.phone && errors.phone.type === "maxLength" && (
					<small className="text-danger">Maximum 14 digits..</small>
					)}
					<br />
					<FormText>*Telefon  - bude použit pro předání pouze v případě shody</FormText>
				</Col>
		</FormGroup>
	)
}

export const NewsletterCheckbox = ({ register }) => {
	return (
		<FormGroup row>
			<Col sm={12} className="pe-0">
				<input
					type="checkbox"
					{...register("newsletter")}
					id="speedNewsletter"
					className="me-2"
				/>
				<Label>Chci dostávat informace o dalších akcích Lesbotoče.</Label>
			</Col>
		</FormGroup>
	)
}
