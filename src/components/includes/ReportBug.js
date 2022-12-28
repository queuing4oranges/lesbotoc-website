import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { serviceId, templateId, publicKey } from './variables'
import swal from 'sweetalert';


export default function ReportBug() {
    const form = useRef();
    const [showBugReport, setShowBugReport] = useState(false)
    const [showBug, setShowBug] = useState(true)

    const sendBugReport = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            serviceId, 
            templateId, 
            form.current, 
            publicKey)
            .then((result) => {
            console.log(result.text);
            e.target.reset();
            }, (error) => {
            console.log(error.text);
            });
            swal("Thank you!", "Feedback is the breakfast for champions. (Ken Blanchard)", "success")
            setShowBugReport(false)
            setShowBug(true)
    };

    useEffect(() => {
      if (showBugReport === true) {
        document.querySelector("#bugformCont").classList.add("slide-in-right");
      } else {
        
      }

    }, [showBugReport])
    

    const openForm = () => {
        
        if (showBugReport === false) {
            setShowBugReport(true);
            setShowBug(false);
        } else {
            setShowBugReport(false);
            setShowBug(true)

        }
    }


  return (
      <div className="report-container"  >
        {showBugReport &&
        <div className="bug-form-cont" id="bugformCont">

            <form ref={form} onSubmit={sendBugReport}>
                <svg onClick={openForm} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x close-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>

                {/* <p className="close-x">X</p> */}
                <h6 className="bug-title">Found a bug?</h6>
                
                <h6 className="bug-title">Let me know about it!</h6>

                
                <label className="bug-label" ></label>
                <textarea name="report" required minLength="5" />

                {/* <label className="bug-label">Name</label>
                <input type="text" name="user_name" className="bug-input" />
                <label className="bug-label">Email</label>
                <input type="email" name="user_email" className="bug-input" /> */}

                <button className="btn btn-info btn-sm bug-btn" type="submit">Send</button>
    
            </form>

        </div>
        }

        <div className="report-bug-cont">
            {showBug && 
            <div className="bug-cont" onClick={openForm}>
                
                <svg onClick={openForm} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="rep-bug bi bi-bug" viewBox="0 0 16 16">
                <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z"/>
                </svg>

            </div>}
        </div>

    </div>

  )
}
