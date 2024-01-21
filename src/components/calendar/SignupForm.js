import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useForm } from "react-hook-form";
import { FormText } from "reactstrap";

import axios from "axios";
import swal from "sweetalert";

import { ADD_CONTACT, ADD_PARTICIPANT } from "../../urls";
import { NameField, EmailField, AgeField, PhoneField, NewsletterCheckbox } from "./FormFields";

export default function SignupForm({ date, time, location, name: event_name, event_type, setShowMod, showMod }) {
	const [isSpeedDating, setIsSpeedDating] = useState(false)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();
			
	useEffect(() => {
		if(event_type) {
			if(event_type === "Speed Dating") {
				setIsSpeedDating(true);
			}
		}
	},[])
console.log(isSpeedDating)


	const onSubmit = (data) => {
		const inputs = { ...data, date, wherefrom: event_name };

		//if user ticks newsletter, also add contact to user table
		if (data.newsletter) {
			axios.post(ADD_CONTACT, inputs)
			.then(function () {
			console.log("Sign contact was added to 'contacts' table.");
			});
		} else {
			console.log("nic tam neni");
		}

		axios.post(ADD_PARTICIPANT, inputs)
			.then(function (response) {
				if (response.status === 200) {
					swal({
						title: "SKVĚLE",
						text: "Těšíme se na tebe.",
						icon: "success",
						button: "Já také!",
					});
					setShowMod(false);
				} else if (response.status === 500) {
					swal("DAMN!", "Could not add participant. Something is  missing here.", "error");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div
			className={`modal fade${showMod ? ' show backdrop' : ''}`} 
			tabIndex="-1" 
			id="signup-modal"
			style={{ display: showMod ? 'block' : 'none' }}
		>
			<div className="modal-dialog modal-dialog-centered signup-container w-100">
				<div className="modal-content">
					<form onSubmit={handleSubmit(onSubmit)} id="add-signup-contact"> 
						<div className="modal-header flex-column align-items-center">
							<div className="mb-2">
								<h5>{event_name}</h5>
							</div>
							<div className="d-flex justify-content-between basic-info" style={{width: "80%"}}>
								<div className="d-flex">
									<i className="bi bi-calendar2-heart me-2"></i>
									<p className="mb-0"><Moment format="D.MM.YYYY">{date}</Moment></p>
								</div>
								<div className="d-flex">
									<i className="bi bi-clock me-2"></i>
									<p className="mb-0">{time}</p>
								</div>
								<div className="d-flex">
									<i className="bi bi-geo-alt me-2"></i>
									<p className="mb-0">{location}</p>
								</div>
							</div>
						</div>
						
						<div className="modal-body">
							{isSpeedDating ? (
								<FormText>
									Vyplněním tohoto dotazníku se přihlašuješ k účasti na Speed Dating. Další informace Ti budou zaslány emailem.
								</FormText>
							) : null}
							
							<NameField register={register} errors={errors} />
							<EmailField register={register} errors={errors} />
							<PhoneField register={register} errors={errors} />
							
							{isSpeedDating ? (<AgeField register={register} errors={errors} /> ) : null }
						</div>
						
						<div className="modal-footer">
							<NewsletterCheckbox register={register} />

							<div className="d-flex justify-content-between w-100">
								<button
									type="button"
									className="btn btn-sm btn-info"
									onClick={() => {
										reset(); 
										setShowMod(false)
									}}
									>
								Zrušit
								</button>
								<button
									type="submit"
									className="btn btn-sm btn-success"
									>
								Přihlášeni
								</button>
							</div>
						</div>
					</form>
					
				</div>
			</div>
		</div>
	);
}
