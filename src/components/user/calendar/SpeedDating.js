import React, { useState } from "react";
import Moment from "react-moment";
import { useForm } from "react-hook-form";
import { ageGroups } from "../Datalists";

//libraries
import axios from "axios";
import swal from "sweetalert";

//icons
import Kalender from "../../../assets/svg-icons/Kalender";
import Clock from "../../../assets/svg-icons/Clock";
import AddressPin from "../../../assets/svg-icons/AddressPin";
import Person from "../../../assets/svg-icons/Person";
import Letter from "../../../assets/svg-icons/Letter";
import Dino from "../../../assets/svg-icons/Dino";
import Handy from "../../../assets/svg-icons/Handy";
import { ADD_CONTACT, ADD_SPEEDDATER } from "../../../urls";

export default function SpeedDating({ date, time, location, setShowMod }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const inputs = { ...data, date, wherefrom: "SpeedDating" };

    //if newsletter in data obj is true, also add contact to user table
    if (data.newsletter) {
      axios.post(ADD_CONTACT, inputs).then(function () {
        console.log("Speed Dating contact was added to 'contacts' table.");
      });
    } else {
      console.log("nic tam neni");
    }

    axios
      .post(ADD_SPEEDDATER, inputs)
      .then(function (response) {
        console.log(response.data.message);
        if (response.status === 200) {
          swal({
            title: "SKVĚLE",
            text: "Těšíme se na Vás.",
            icon: "success",
            button: "Já také!",
          });
          setShowMod(false);
        } else if (response.status === 500) {
          swal(
            "DAMN!",
            "Could not add event. Something is  missing here.",
            "error"
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(errors);
  return (
    <div className="user-container">
      <div className="speed-container">
        <div className="speed-form">
          <div className="speed-title">
            <h3>Lesbotoč speed dating sign up</h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} id="add-speeddating-contact">
            <div className="speed-data">
              <div className="speed-data__item">
                <Kalender width={16} height={16} fill="#003243" />
                <p>
                  <Moment format="D.MM.YYYY">{date}</Moment>
                </p>
              </div>
              <div className="speed-data__item">
                <Clock width={16} height={16} fill="#003243" />
                <p>{time}</p>
              </div>
              <div className="speed-data__item">
                <AddressPin width={16} height={16} fill="#003243" />
                <p>{location}</p>
              </div>
            </div>
            <div className="speed-intro">
              <p>
                Vyplněním tohoto dotazníku se přihlašuješ k účasti na Speed
                dating. Další informace Ti budou zaslány emailem.
              </p>
            </div>
            <div className="speed-form-cont">
              <div className="speed-form-cont__logo">
                <Person width={16} height={16} fill="#003243" />
              </div>

              <div className="speed-form-cont__input">
                <label htmlFor="" className="form-label speed-label">
                  Jméno
                </label>
                <input
                  className="form-control speed-input"
                  type="text"
                  placeholder={errors.name?.message}
                  {...register("name", {
                    required: "Please enter a name here",
                    minLength: 3,
                    maxLength: 20,
                  })}
                />
                {/* <p>{errors.name?.message}</p> */}
              </div>
            </div>
            <div className="speed-form-cont">
              <div className="speed-form-cont__logo">
                <Letter width={15} height={20} fill="#003243" />
              </div>
              <div className="speed-form-cont__input">
                <label htmlFor="" className="form-label speed-label">
                  Email
                </label>
                <input
                  className="form-control speed-input"
                  type="email"
                  placeholder={errors.email?.message}
                  {...register("email", {
                    required: "Enter an email - someone@email.cz",
                  })}
                />
              </div>
            </div>
            <div className="speed-form-cont">
              <div className="speed-form-cont__logo">
                <Dino width={20} height={20} fill="#003243" />
              </div>
              <div className="speed-form-cont__input">
                <label htmlFor="" className="form-label speed-label">
                  Věk
                </label>
                <input
                  type="text"
                  className="form-control speed-input"
                  list="user_ages"
                  {...register("age")}
                />
                <datalist id="user_ages">
                  {ageGroups.map((age) => (
                    <option key={age.id} value={age.age}></option>
                  ))}
                </datalist>
              </div>
            </div>

            <div className="speed-form-cont">
              <div className="speed-form-cont__logo">
                <Handy width={20} height={20} fill="#003243" />
              </div>
              <div className="speed-form-cont__input">
                <label
                  htmlFor=""
                  className="form-label speed-label speed-label-telefon"
                >
                  Telefon - bude použit pro předání pouze v případě shody.
                </label>
                <input
                  type="text"
                  className="form-control speed-input"
                  // placeholder={errors.phone?.message}
                  placeholder="777888999"
                  {...register("phone", {
                    required: "Please enter a phone number",
                    minLength: 9,
                    maxLength: 12,
                  })}
                />
              </div>
            </div>
            <div className="speed-form-cont checkbox-cont">
              <input
                type="checkbox"
                className="form-check-input speed-input checkbox-input"
                {...register("newsletter")}
                // id="speedNewsletter"
              />

              <p>Chci dostávat informace o dalších akcích Lesbotoče.</p>
            </div>
            <div className="speed-btn-cont">
              <button
                type="button"
                onClick={() => setShowMod(false)}
                className="button btn sm single-event-button"
              >
                Zrušit
              </button>
              <button
                type="submit"
                className="button btn sm single-event-button orange-btn"
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
