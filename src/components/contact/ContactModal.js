import emailjs from "@emailjs/browser";
import React, { Fragment, useRef, useState } from "react";
import swal from "sweetalert";
//components
import Navbar from "../includes/Navbar";

//credentials
import {
  YOUR_PUBLIC_KEY,
  YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID,
} from "./EmailCredentials";

export default function ContactModal() {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    message: "",
    user_email: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          swal("Děkujeme!", "Ozveme se co nejdříve.", "success");
          //reset form fields after successful submission
          setFormData({
            user_name: "",
            message: "",
            user_email: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Fragment>
      <Navbar />
      <div className="user-contact-container">
        <div className="contact-title-container">
          <h2 className="contact-form-title">Contact us!</h2>
        </div>
        <div className="user-contact-cont">
          <div className="contact-form-container">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="user-contact-form"
              action=""
            >
              <div className="user-contact-item">
                <div className="contact-name-input">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="user-contact-item">
                <div className="contact-message-input">
                  <textarea
                    name="message"
                    type="text"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              <div className="user-contact-item">
                <div className="contact-email-input">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="your_email@address.cz"
                    value={formData.user_email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="user-contact-btn-cont">
                <button type="submit" value="Send" className="btn">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-icon-container">
          <div className="contact-icon contact-icon-email">
            <a href="mailto: lesbotoc@gmail.com" aria-label="Email address">
              <p>info@lesbotoc.com</p>

              <div className="mobile-contact">
                <i className="bi bi-envelope"></i>
              </div>
            </a>
          </div>
          <div className="contact-icon contact-icon-phone">
            <a href="tel:737364699" aria-label="Phone Number">
              <p>+420 737 364 699</p>

              <div className="mobile-contact">
                <i className="bi bi-phone"></i>
              </div>
            </a>
          </div>
          <div className="contact-icon-fb-insta">
            <div className="contact-icon contact-icon-insta">
              <a
                href="https://www.instagram.com/lesbotoc/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <div className="contact-icon contact-icon-fb">
              <a
                href="https://www.facebook.com/seznamsenatoci"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
               <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
