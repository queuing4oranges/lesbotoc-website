import React, { useState } from "react";
import { send } from "emailjs-com";


function Modal({ hideModal }) {
    // const [openModal, setOpenModal] = useState(true);
    const [toSend, setToSend] = useState({
        namefrom: "",
        topic: "",
        replyto: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            "service_hzahxgj", 
            "template_ekj5muj", 
            toSend, 
            "hGPQvp50oflM09nyO"
        )
        hideModal();
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value})
    }


  return (
    // <div className="modalBackground">       
        <div className="modalContainer">

                <form onSubmit={handleSubmit} className="contact__form">

                <h2 className="form__title">Hello, there!</h2>
                <label>
                    <span>My name is *</span>
                    <input 
                    className="modal__input"
                    type="text"
                    name="namefrom"
                    value={toSend.namefrom}
                    onChange={handleChange}
                    required />
                </label>
                <label>
                    <span>I'm contacting you because</span>
                    <input 
                    className="modal__input"
                    type="text"
                    name="topic"
                    value={toSend.topic}
                    onChange={handleChange} />
                </label>

                <label>
                    <span>You can reply to me at *</span>
                    <input 
                    className="modal__input"
                    placeholder="your email" 
                    type="text"
                    name="replyto"
                    value={toSend.replyto}
                    onChange={handleChange}
                    required />
                </label>

                <label>
                    <span>My message to you *</span>
                    <textarea 
                    className="textarea" 
                    id="" 
                    cols="30" 
                    rows="10"
                    name="message"
                    value={toSend.message}
                    onChange={handleChange}
                    required>
                    </textarea>
                </label>
                <div className="btn__cont">
                    <button
                    type="submit"
                    onClick={hideModal}
                    className="contact__button cancel">Cancel
                    </button>
                    <button 
                    type="submit"
                    className="contact__button">Send
                    </button>
                    
                </div>
            </form>
        </div>
    // </div>
  )
}

export default Modal

