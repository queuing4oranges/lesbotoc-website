import React, { Fragment, useState, useEffect } from "react";
import AdminNavbar from "../AdminNavbar";
import axios from "axios";
import { CSVLink } from "react-csv";
import ReportBug from "../../includes/ReportBug";
import Moment from "react-moment";
import swal from "sweetalert";

export default function More() {
  const [contacts, setContacts] = useState([]);
  const [successMsg, setSuccessMsg] = useState(false);
  const [subscribers, setSubscribers] = useState([]);
  const [speedDaters, setSpeedDaters] = useState([]);

  useEffect(() => {
    getSpeedDaters();
    getContacts();
  }, [successMsg]);

  const getContacts = () => {
    axios
      .get("https://api.itisgoodtohave.me/contacts/read.php")
      .then(function (response) {
        setContacts(response.data);
        setSuccessMsg(true);
      })
      //filtering the mail adresses for newsletter subscription
      .then(function () {
        let result = contacts.filter(function (contact) {
          return contact.newsletter === 1;
        });
        setSubscribers(result);
      });
  };

  const getSpeedDaters = () => {
    axios
      .get("https://api.itisgoodtohave.me/speeddating/read.php")
      .then(function (response) {
        setSpeedDaters(response.data);
      });
  };

  const deleteSpeedDaters = (id) => {
    swal(
      "Sure?",
      "Do you really want to ecxlude this fine creature from the Speed Dating?",
      "warning"
    ).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://api.itisgoodtohave.me/speeddating/delete.php/${id}`)
          .then(function () {
            swal("Deleted!", "She will stay single forever.", "success");
            successMsg === true ? setSuccessMsg(false) : setSuccessMsg(true);
          });
      } else {
        console.log("Could not delete Speed Dating Contact");
      }
    });
  };

  return (
    <Fragment>
      <AdminNavbar />

      <h3 className="admin-page-title">There's some more...</h3>

      <div className="more-container">
        <div className="more-data-container">
          <CSVLink data={subscribers} filename="newsletter_subscribers">
            <button className="btn btn-info btn-data">
              <p>
                Export Newsletter <br /> Subscribers
              </p>
            </button>
          </CSVLink>

          <CSVLink data={speedDaters} filename="speedDatingParticipants">
            <button className="btn btn-info btn-data">
              <p>
                Export Speed Dating <br /> Participants
              </p>
            </button>
          </CSVLink>
          <a href="https://mailchimp.com/" target="_blank" rel="noreferrer">
            <button className="btn btn-info btn-news">Go to mailchimp</button>
          </a>
        </div>

        <div className="signup-container signup-speeddating-cont">
          <h6>List of Speed Dating Participants</h6>
          <p>
            You can delete the participants after the event. They will still be
            in your contacts if they agreed to storing their data.
          </p>
          {speedDaters && (
            <div className="speeddaters-table-cont">
              <table className="table table-sm table-bordered speeddaters-table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>

                <tbody className="table-body">
                  {speedDaters.map((dater, key) => (
                    <tr className="table-row" key={key}>
                      <td className="td">
                        <Moment format="D. MM">{dater.date}</Moment>
                      </td>
                      <td className="td">{dater.name}</td>
                      <td className="td">{dater.phone}</td>
                      <td className="td">{dater.email}</td>
                      <td className="td">{dater.age}</td>
                      <td className="td">
                        <button
                          className="btn speed-delete-btn"
                          onClick={() => deleteSpeedDaters(dater.id)}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.5 5.5C5.77614 5.5 6 5.72386 6 6V12C6 12.2761 5.77614 12.5 5.5 12.5C5.22386 12.5 5 12.2761 5 12V6C5 5.72386 5.22386 5.5 5.5 5.5Z"
                              fill="red"
                            />
                            <path
                              d="M8 5.5C8.27614 5.5 8.5 5.72386 8.5 6V12C8.5 12.2761 8.27614 12.5 8 12.5C7.72386 12.5 7.5 12.2761 7.5 12V6C7.5 5.72386 7.72386 5.5 8 5.5Z"
                              fill="red"
                            />
                            <path
                              d="M11 6C11 5.72386 10.7761 5.5 10.5 5.5C10.2239 5.5 10 5.72386 10 6V12C10 12.2761 10.2239 12.5 10.5 12.5C10.7761 12.5 11 12.2761 11 12V6Z"
                              fill="red"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.5 3C14.5 3.55228 14.0523 4 13.5 4H13V13C13 14.1046 12.1046 15 11 15H5C3.89543 15 3 14.1046 3 13V4H2.5C1.94772 4 1.5 3.55228 1.5 3V2C1.5 1.44772 1.94772 1 2.5 1H6C6 0.447715 6.44772 0 7 0H9C9.55229 0 10 0.447715 10 1H13.5C14.0523 1 14.5 1.44772 14.5 2V3ZM4.11803 4L4 4.05902V13C4 13.5523 4.44772 14 5 14H11C11.5523 14 12 13.5523 12 13V4.05902L11.882 4H4.11803ZM2.5 3V2H13.5V3H2.5Z"
                              fill="red"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="signup-container signup-camp-cont">
          <p>here should be the table for signups to the camp</p>
        </div>
      </div>

      <ReportBug />
    </Fragment>
  );
}
