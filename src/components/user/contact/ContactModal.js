// import emailjs from '@emailjs/browser';
import React, { Fragment } from "react";
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";
import InstagramIcon from "../../includes/icons/InstagramIcon";
import FacebookIcon from "../../includes/icons/FacebookIcon";

export default function ContactModal() {
  return (
    <Fragment>
      <Navbar />
      <div className="user-contact-container">
        <div className="contact-title-container">
          <h2 className="contact-form-title">Contact us!</h2>
        </div>
        <div className="user-contact-cont">
          <div className="contact-form-container">
            <form className="user-contact-form" action="">
              <div className="user-contact-item">
                <div className="contact-name-input">
                  <input type="text" name="user-name" placeholder="Name" />
                </div>
              </div>

              <div className="user-contact-item">
                <div className="contact-message-input">
                  <textarea
                    name="user-message"
                    type="text"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>

              <div className="user-contact-item">
                <div className="contact-email-input">
                  <input
                    type="text"
                    name="user-email"
                    placeholder="your_email@address.cz"
                  />
                </div>
              </div>

              <div className="user-contact-btn-cont">
                <button className="btn">Send</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-icon-container">
          <div className="contact-icon contact-icon-email">
            <a href="mailto: lesbotoc@gmail.com" aria-label="Email address">
              lesbotoc@gmail.com
            </a>
          </div>
          <div className="contact-icon contact-icon-phone">
            <a href="tel:777696969" aria-label="Phone Number">
              +420 777 696 969
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
                <InstagramIcon width={25} height={25} color="#fb9644" />
              </a>
            </div>
            <div className="contact-icon contact-icon-fb">
              <a
                href="https://www.facebook.com/seznamsenatoci"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon width={25} height={25} color="#fb9644" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
