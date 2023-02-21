// import emailjs from '@emailjs/browser';
import React, { Fragment } from "react";
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";
import TwoWomenMobiles from "../../includes/icons/TwoWomenMobiles";
import PersonIcon from "../../includes/icons/PersonIcon";
import EnvelopeIcon from "../../includes/icons/EnvelopeIcon";
import MessageIcon from "../../includes/icons/MessageIcon";

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
                <PersonIcon width={50} height={50} color="white" />

                <div className="contact-name-input">
                  {/* <label htmlFor="user-name">Hi, I'm...</label> */}
                  <input type="text" name="user-name" placeholder="Name" />
                </div>
              </div>

              <div className="user-contact-item">
                <MessageIcon width={50} height={50} color="white" />
                <div className="contact-message-input">
                  {/* <label htmlFor="user-message">my message to you</label> */}
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
                <EnvelopeIcon width={50} height={50} color="white" />
                <div className="contact-email-input">
                  {/* <label htmlFor="user-email">you can reply to me</label> */}
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
          <TwoWomenMobiles widthSize={190} heightSize={190} color="#FB9644" />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
