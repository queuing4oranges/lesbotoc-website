import React, { useState } from "react";
import Moment from "react-moment";
import axios from "axios";
import swal from "sweetalert";
import Kalender from "../../../assets/svg-icons/Kalender";
import Clock from "../../../assets/svg-icons/Clock";
import AddressPin from "../../../assets/svg-icons/AddressPin";
import Person from "../../../assets/svg-icons/Person";
import Letter from "../../../assets/svg-icons/Letter";
import Dino from "../../../assets/svg-icons/Dino";
import Handy from "../../../assets/svg-icons/Handy";

export default function SpeedDating({ date, time, location, setShowMod }) {
  const [speedName, setSpeedName] = useState("");
  const [speedMail, setSpeedMail] = useState("");
  const [speedPhone, setSpeedPhone] = useState("");
  const [speedAge, setSpeedAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const speedNews = document.querySelector("#speedNewsletter");
    console.log(speedNews.checked);

    const inputs = {
      date: date,
      name: speedName,
      email: speedMail,
      phone: speedPhone,
      age: speedAge,
      newsletter: "1",
      wherefrom: "SpeedDating",
    };

    //getting value from checkbox - if user agrees to newsletter, it'll be saved to contacts table too
    if (speedNews.checked === true) {
      axios
        .post("https://api.itisgoodtohave.me/contacts/create.php", inputs)
        .then(function () {
          console.log("Speed Dating contact was added to 'contacts' table.");
        });
    } else {
      console.log("nic tam neni");
    }

    //sign up for the speed dating
    axios
      .post("https://api.itisgoodtohave.me/speeddating/create.php", inputs)
      .then(function (response) {
        console.log(response.data.message);
        if (response.status === 200) {
          swal({
            title: "SKVĚLE",
            text: "We're looking forward to seeing you there.",
            icon: "success",
            button: "Me too!",
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

  return (
    <div className="user-container">
      <div className="speed-container">
        <div className="speed-form">
          <div className="speed-title">
            <h3>Lesbotoč speed dating sign up</h3>
          </div>

          <form onSubmit={handleSubmit} id="add-speeddating-contact">
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
                  type="text"
                  className="form-control speed-input"
                  name="name"
                  id="speed-name"
                  onChange={(e) => {
                    setSpeedName(e.target.value);
                  }}
                  required
                  minLength="3"
                  maxLength="20"
                />
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
                  type="email"
                  className="form-control speed-input"
                  placeholder="youremail@address.cz"
                  name="email"
                  onChange={(e) => {
                    setSpeedMail(e.target.value);
                  }}
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
                  name="age"
                  onChange={(e) => {
                    setSpeedAge(e.target.value);
                  }}
                />
                <datalist id="user_ages">
                  <option value="20-25"></option>
                  <option value="26-30"></option>
                  <option value="31-35"></option>
                  <option value="36-40"></option>
                  <option value="41-45"></option>
                  <option value="46-50"></option>
                  <option value="50+"></option>
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
                  placeholder="777 888 999"
                  name="phone"
                  onChange={(e) => {
                    setSpeedPhone(e.target.value);
                  }}
                  required
                  minLength="9"
                  maxLength="12"
                />
              </div>
            </div>
            <div className="speed-form-cont checkbox-cont">
              <input
                type="checkbox"
                className="form-check-input speed-input checkbox-input"
                id="speedNewsletter"
              />

              <p>Chci dostávat informace o dalších akcích Lesbotoče.</p>
            </div>
            <div className="speed-btn-cont">
              <button
                type="button"
                onClick={() => setShowMod(false)}
                className="button btn sm single-event-button"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="button btn sm single-event-button orange-btn"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
