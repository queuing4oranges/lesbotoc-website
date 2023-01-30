// import emailjs from '@emailjs/browser';
import React from "react";
import BubbleGrid from "../includes/BubbleGrid";
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";
import SpeedDating from "../speeddating/SpeedDating";

export default function ContactModal() {
  //mailchimp???
  // const sendEnquiry = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     serviceId2,
  //     tempateId2,
  //     form.current,
  //     publickKey2)
  //     .then
  //   )
  // }
  return (
    <div className="user-contact-container">
      <Navbar />
      <div className="user-contact-cont">
        <div className="contact-form-container">
          <form className="user-contact-form" action="">
            <h2 className="contact-form-title">
              Contact us! We love to hear from you.
            </h2>
            <div className="user-contact-item">
              <svg
                width="28"
                height="28"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 6C11 7.65685 9.65685 9 8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6Z"
                  fill="#B84639"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8 1C4.13401 1 1 4.13401 1 8C1 9.65343 1.57326 11.173 2.53186 12.3707C3.24293 11.2252 4.80464 10 8.00001 10C11.1954 10 12.7571 11.2252 13.4681 12.3707C14.4267 11.173 15 9.65343 15 8C15 4.13401 11.866 1 8 1Z"
                  fill="#B84639"
                />
              </svg>
              <div className="contact-name-input">
                <label htmlFor="user-name">Hi, I'm...</label>
                <input
                  type="text"
                  name="user-name"
                  placeholder="your name or nickname"
                />
              </div>
            </div>

            <div className="user-contact-item">
              <svg
                width="28"
                height="28"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 4.50001C3 4.22386 3.22386 4.00001 3.5 4.00001H9.5C9.77614 4.00001 10 4.22386 10 4.50001C10 4.77615 9.77614 5.00001 9.5 5.00001H3.5C3.22386 5.00001 3 4.77615 3 4.50001Z"
                  fill="#B84639"
                />
                <path
                  d="M3 6.50001C3 6.22386 3.22386 6.00001 3.5 6.00001H9.5C9.77614 6.00001 10 6.22386 10 6.50001C10 6.77615 9.77614 7.00001 9.5 7.00001H3.5C3.22386 7.00001 3 6.77615 3 6.50001Z"
                  fill="#B84639"
                />
                <path
                  d="M3 8.50001C3 8.22386 3.22386 8.00001 3.5 8.00001H9.5C9.77614 8.00001 10 8.22386 10 8.50001C10 8.77615 9.77614 9.00001 9.5 9.00001H3.5C3.22386 9.00001 3 8.77615 3 8.50001Z"
                  fill="#B84639"
                />
                <path
                  d="M3 10.5C3 10.2239 3.22386 10 3.5 10H9.5C9.77614 10 10 10.2239 10 10.5C10 10.7761 9.77614 11 9.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z"
                  fill="#B84639"
                />
                <path
                  d="M3 12.5C3 12.2239 3.22386 12 3.5 12H9.5C9.77614 12 10 12.2239 10 12.5C10 12.7761 9.77614 13 9.5 13H3.5C3.22386 13 3 12.7761 3 12.5Z"
                  fill="#B84639"
                />
                <path
                  d="M11.5 4.00001C11.2239 4.00001 11 4.22386 11 4.50001C11 4.77615 11.2239 5.00001 11.5 5.00001H12.5C12.7761 5.00001 13 4.77615 13 4.50001C13 4.22386 12.7761 4.00001 12.5 4.00001H11.5Z"
                  fill="#B84639"
                />
                <path
                  d="M11.5 6.00001C11.2239 6.00001 11 6.22386 11 6.50001C11 6.77615 11.2239 7.00001 11.5 7.00001H12.5C12.7761 7.00001 13 6.77615 13 6.50001C13 6.22386 12.7761 6.00001 12.5 6.00001H11.5Z"
                  fill="#B84639"
                />
                <path
                  d="M11.5 8.00001C11.2239 8.00001 11 8.22386 11 8.50001C11 8.77615 11.2239 9.00001 11.5 9.00001H12.5C12.7761 9.00001 13 8.77615 13 8.50001C13 8.22386 12.7761 8.00001 12.5 8.00001H11.5Z"
                  fill="#B84639"
                />
                <path
                  d="M11.5 10C11.2239 10 11 10.2239 11 10.5C11 10.7761 11.2239 11 11.5 11H12.5C12.7761 11 13 10.7761 13 10.5C13 10.2239 12.7761 10 12.5 10H11.5Z"
                  fill="#B84639"
                />
                <path
                  d="M11.5 12C11.2239 12 11 12.2239 11 12.5C11 12.7761 11.2239 13 11.5 13H12.5C12.7761 13 13 12.7761 13 12.5C13 12.2239 12.7761 12 12.5 12H11.5Z"
                  fill="#B84639"
                />
                <path
                  d="M2.35355 0.646453C2.23991 0.532805 2.07856 0.480718 1.91991 0.506462C1.76126 0.532207 1.62466 0.632645 1.55279 0.776399L1.05279 1.7764C1.01807 1.84583 1 1.92238 1 2.00001V15H0.5C0.223858 15 0 15.2239 0 15.5C0 15.7761 0.223858 16 0.5 16H15.5C15.7761 16 16 15.7761 16 15.5C16 15.2239 15.7761 15 15.5 15H15V2.00001C15 1.92238 14.9819 1.84583 14.9472 1.7764L14.4472 0.776399C14.3753 0.632645 14.2387 0.532207 14.0801 0.506462C13.9214 0.480718 13.7601 0.532805 13.6464 0.646453L13 1.2929L12.3536 0.646453C12.1583 0.45119 11.8417 0.45119 11.6464 0.646453L11 1.2929L10.3536 0.646453C10.1583 0.45119 9.84171 0.45119 9.64645 0.646453L9 1.2929L8.35355 0.646453C8.15829 0.45119 7.84171 0.45119 7.64645 0.646453L7 1.2929L6.35355 0.646453C6.15829 0.45119 5.84171 0.45119 5.64645 0.646453L5 1.2929L4.35355 0.646453C4.15829 0.45119 3.84171 0.45119 3.64645 0.646453L3 1.2929L2.35355 0.646453ZM2.13698 1.84409L2.64645 2.35356C2.84171 2.54882 3.15829 2.54882 3.35355 2.35356L4 1.70711L4.64645 2.35356C4.84171 2.54882 5.15829 2.54882 5.35355 2.35356L6 1.70711L6.64645 2.35356C6.84171 2.54882 7.15829 2.54882 7.35355 2.35356L8 1.70711L8.64645 2.35356C8.84171 2.54882 9.15829 2.54882 9.35355 2.35356L10 1.70711L10.6464 2.35356C10.8417 2.54882 11.1583 2.54882 11.3536 2.35356L12 1.70711L12.6464 2.35356C12.8417 2.54882 13.1583 2.54882 13.3536 2.35356L13.863 1.84409L14 2.11804V15H2V2.11804L2.13698 1.84409Z"
                  fill="#B84639"
                />
              </svg>
              <div className="contact-message-input">
                <label htmlFor="user-message">my message to you</label>
                <textarea
                  name="user-message"
                  type="text"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Hello. I have a question ..."
                ></textarea>
              </div>
            </div>

            <div className="user-contact-item">
              <svg
                width="28"
                height="28"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4C0 2.89543 0.895431 2 2 2H14C15.1046 2 16 2.89543 16 4V12C16 13.1046 15.1046 14 14 14H2C0.895431 14 0 13.1046 0 12V4ZM2 3C1.44772 3 1 3.44772 1 4V4.2169L8 8.4169L15 4.2169V4C15 3.44772 14.5523 3 14 3H2ZM15 5.3831L10.2919 8.20794L15 11.1052V5.3831ZM14.9662 12.2586L9.32583 8.7876L8 9.5831L6.67417 8.7876L1.03376 12.2586C1.14774 12.6855 1.53715 13 2 13H14C14.4628 13 14.8523 12.6855 14.9662 12.2586ZM1 11.1052L5.70808 8.20794L1 5.3831V11.1052Z"
                  fill="#B84639"
                />
              </svg>
              <div className="contact-email-input">
                <label htmlFor="user-email">you can reply to me</label>
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

        <div className="user-contact-grid">
          <BubbleGrid />
        </div>
      </div>

      <SpeedDating />

      <Footer />
    </div>
  );
}
