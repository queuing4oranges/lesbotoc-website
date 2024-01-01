import React from "react";
import Moment from "react-moment";
import { useForm } from "react-hook-form";
import { ageGroups } from "../Datalists";
import { GrClose } from "react-icons/gr";

//libraries
import axios from "axios";
import swal from "sweetalert";

//icons
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
		<div //TODO change state openEditModal in this whole block
			className={`modal fade${showMod ? ' show backdrop' : ''}`} 
			tabIndex="-1" 
			id="speeddating-modal"
			style={{ display: showMod ? 'block' : 'none' }}
		>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					{/* TODO is this id correct? */}
					{/* TODO error messages for user */}
					<form onSubmit={handleSubmit(onSubmit)} id="add-speeddating-contact"> 
						<div className="modal-header">
							<h5>Lesbotoč speed dating sign up</h5>
							<button
								type="button"
								className="btn btn-outline-warning"
								onClick={() => {
								reset(); 
								setShowMod(false)
								}}>
							<GrClose />
							</button>
							<div className="d-flex">
								<div className="d-flex">
									<i className="bi bi-calendar2-heart mr-3"></i>
									<p><Moment format="D.MM.YYYY">{date}</Moment></p>
								</div>
								<div className="d-flex">
									<i className="bi bi-clock mr-3"></i>
									<p>{time}</p>
								</div>
								<div className="d-flex">
									<i className="bi bi-geo-alt mr-3"></i>
									<p>{location}</p>
								</div>
							</div>
						</div>
						
						<div className="modal-body">
							<p>Vyplněním tohoto dotazníku se přihlašuješ k účasti na Speed dating. Další informace Ti budou zaslány emailem.</p>
							
							<div className="d-flex">
								<i className="bi bi-person mr-2"></i>
								<label htmlFor="" className="form-label speed-label">Jméno</label>
								<input
									className="form-control ml-2"
									type="text"
									placeholder={errors.name?.message}
									{...register("name", {
										required: "Please enter a name here",
										minLength: 3,
										maxLength: 20
									})}
								/>
							</div>
							
							<div className="d-flex">
								<i className="bi bi-envelope-at mr-2"></i>
								<label htmlFor="" className="form-label">Email</label>
								<input
									className="form-control ml-2"
									type="email"
									placeholder={errors.email?.message}
									{...register("email", {
										required: "Please enter an email address",
									})}
								/>
							</div>
							
							<div className="d-flex">
								<i className="bi bi-cake2 mr-2"></i>
								<label htmlFor="" className="form-label">Věk</label>
								<input
									className="form-control ml-2"
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
							
							<div className="d-flex">
								<i className="bi bi-phone mr-2"></i>
								<label htmlFor="" className="form-label">Telefon</label>
								<input
									type="text"
									className="form-control speed-input"
									// placeholder={errors.phone?.message}
									placeholder="777888999"
									{...register("phone", {
									required: "Please enter a phone number",
									minLength: 9,
									maxLength: 12
									})}
								/>
								<span>Telefon  - bude použit pro předání pouze v případě shody</span>
							</div>
							
							<div className="d-flex">
								<input
								type="checkbox"
								className="form-check-input speed-input checkbox-input"
								{...register("newsletter")}
								id="speedNewsletter"
								/>
								<p>Chci dostávat informace o dalších akcích Lesbotoče.</p>		
							</div>
							
						</div>
						
						<div className="modal-footer">
							<button
								type="button"
								onClick={() => setShowMod(false)}
								className="btn btn-sm"
							>
							Zrušit
							</button>
							<button
								type="submit"
								className="btn btn-sm"
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

//up to line 206