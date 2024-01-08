import React from "react";
import Moment from "react-moment";
import { useForm } from "react-hook-form";
import { ageGroups } from "../Datalists";

import axios from "axios";
import swal from "sweetalert";

import { ADD_CONTACT, ADD_SPEEDDATER } from "../../../urls";

export default function SpeedDating({ date, time, location, setShowMod, showMod }) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();

	const onSubmit = (data) => {
		const inputs = { ...data, date, wherefrom: "SpeedDating" };

		//if user ticks newsletter, also add contact to user table
		if (data.newsletter) {
			axios.post(ADD_CONTACT, inputs)
			.then(function () {
			console.log("Speed Dating contact was added to 'contacts' table.");
			});
		} else {
			console.log("nic tam neni");
		}

		axios.post(ADD_SPEEDDATER, inputs)
			.then(function (response) {
				if (response.status === 200) {
					swal({
						title: "SKVĚLE",
						text: "Těšíme se na Vás.",
						icon: "success",
						button: "Já také!",
					});
					setShowMod(false);
				} else if (response.status === 500) {
					swal("DAMN!", "Could not add event. Something is  missing here.", "error");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div
			className={`speed-dating-wrapper modal fade${showMod ? ' show backdrop' : ''}`} 
			tabIndex="-1" 
			id="speeddating-modal"
			style={{ display: showMod ? 'block' : 'none' }}
		>
			<div className="modal-dialog modal-dialog-centered speed-container">
				<div className="modal-content">
					<form onSubmit={handleSubmit(onSubmit)} id="add-speeddating-contact"> 
						<div className="modal-header flex-column align-items-center">
							<div className="mb-2">
								<h5>Lesbotoč Speed Dating</h5>
							</div>
							<div className="d-flex justify-content-between" style={{width: "80%"}}>
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
							<p>Vyplněním tohoto dotazníku se přihlašuješ k účasti na Speed Dating. Další informace Ti budou zaslány emailem.</p>
							
							<div className="d-flex justify-content-between mb-3">
								<div>
									<i className="bi bi-person me-2"></i>
									<label htmlFor="" className="form-label speed-label">Jméno</label>
								</div>
								<input
									className="form-control ms-2"
									type="text"
									placeholder={errors.name?.message}
									{...register("name", {
										required: "Please enter a name here",
										minLength: 3,
										maxLength: 20
									})}
								/>
							</div>
							
							<div className="d-flex justify-content-between mb-3">
								<div>
									<i className="bi bi-envelope-at me-2"></i>
									<label htmlFor="" className="form-label">Email</label>
								</div>
								<input
									className="form-control ms-2"
									type="email"
									placeholder={errors.email?.message}
									{...register("email", {
										required: "Please enter an email address",
									})}
								/>
							</div>
							
							<div className="d-flex justify-content-between mb-3">
								<div>
									<i className="bi bi-cake2 me-2"></i>
									<label htmlFor="" className="form-label">Věk</label>
								</div>
								<input
									className="form-control ms-2"
									type="text"
									list="user_ages"
									{...register("age")}
								/>		
								<datalist id="user_ages">
									{ageGroups.map((age) => (
									<option key={age.id} value={age.age}></option>
									))}
								</datalist>
							</div>
							
							<div className="d-flex justify-content-between">
								<div>
									<i className="bi bi-phone me-2"></i>
									<label htmlFor="" className="form-label">Telefon*</label>
								</div>
								<input
									type="text"
									className="form-control"
									placeholder={errors.phone?.message}
									{...register("phone", {
									required: "Please enter a phone number",
									minLength: 9,
									maxLength: 12
									})}
								/>
							</div>
								<span><p className="fs-6">*Telefon  - bude použit pro předání pouze v případě shody</p></span>
							
							
						</div>
						
						<div className="modal-footer">
							<div className="d-flex justify-content-start">
								<input
									type="checkbox"
									className="mt-0"
									{...register("newsletter")}
									id="speedNewsletter"
									style={{width: "unset"}}
								/>
								<p className="mb-0 ms-3">Chci dostávat informace o dalších akcích Lesbotoče.</p>
							</div>
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
					</form>
					
				</div>
			</div>
		</div>
	);
}
