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
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getSpeedDaters();
    getContacts();
    getEvents();
  }, [successMsg]);

  const getEvents = () => {
    axios
      .get("https://api.itisgoodtohave.me/events/read.php")
      .then(function (response) {
        setEvents(response.data);
      })
      .catch(function (error) {
        if (error.response) {
        }
      });
  };

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
          <CSVLink
            style={{ textDecoration: "none" }}
            data={subscribers}
            filename="newsletter_subscribers"
          >
            <button className="btn btn-info btn-data">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.64645 10.8536C7.84171 11.0488 8.15829 11.0488 8.35355 10.8536L10.3536 8.85355C10.5488 8.65829 10.5488 8.34171 10.3536 8.14645C10.1583 7.95118 9.84171 7.95118 9.64645 8.14645L8.5 9.29289V5.5C8.5 5.22386 8.27614 5 8 5C7.72386 5 7.5 5.22386 7.5 5.5V9.29289L6.35355 8.14645C6.15829 7.95118 5.84171 7.95118 5.64645 8.14645C5.45118 8.34171 5.45118 8.65829 5.64645 8.85355L7.64645 10.8536Z"
                  fill="white"
                />
                <path
                  d="M4.40576 3.34182C5.31176 2.56046 6.57359 2 8 2C10.6902 2 12.9233 3.99944 13.1657 6.57898C14.7581 6.80411 16 8.13656 16 9.77273C16 11.5695 14.5023 13 12.6875 13H3.78125C1.70754 13 0 11.366 0 9.31818C0 7.55511 1.26586 6.09512 2.94223 5.725C3.08479 4.8617 3.63985 4.00237 4.40576 3.34182ZM5.05886 4.09909C4.3023 4.75157 3.90625 5.5383 3.90625 6.15455V6.6026L3.46088 6.65155C2.06371 6.80512 1 7.95266 1 9.31818C1 10.7849 2.23059 12 3.78125 12H12.6875C13.9793 12 15 10.9884 15 9.77273C15 8.55703 13.9793 7.54545 12.6875 7.54545H12.1875V7.04545C12.1875 4.8256 10.3273 3 8 3C6.83758 3 5.80253 3.45773 5.05886 4.09909Z"
                  fill="white"
                />
              </svg>
              <p>
                Newsletter <br /> Subscribers
              </p>
            </button>
          </CSVLink>

          <CSVLink
            style={{ textDecoration: "none" }}
            data={speedDaters}
            filename="speedDatingParticipants"
          >
            <button className="btn btn-info btn-data">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.64645 10.8536C7.84171 11.0488 8.15829 11.0488 8.35355 10.8536L10.3536 8.85355C10.5488 8.65829 10.5488 8.34171 10.3536 8.14645C10.1583 7.95118 9.84171 7.95118 9.64645 8.14645L8.5 9.29289V5.5C8.5 5.22386 8.27614 5 8 5C7.72386 5 7.5 5.22386 7.5 5.5V9.29289L6.35355 8.14645C6.15829 7.95118 5.84171 7.95118 5.64645 8.14645C5.45118 8.34171 5.45118 8.65829 5.64645 8.85355L7.64645 10.8536Z"
                  fill="white"
                />
                <path
                  d="M4.40576 3.34182C5.31176 2.56046 6.57359 2 8 2C10.6902 2 12.9233 3.99944 13.1657 6.57898C14.7581 6.80411 16 8.13656 16 9.77273C16 11.5695 14.5023 13 12.6875 13H3.78125C1.70754 13 0 11.366 0 9.31818C0 7.55511 1.26586 6.09512 2.94223 5.725C3.08479 4.8617 3.63985 4.00237 4.40576 3.34182ZM5.05886 4.09909C4.3023 4.75157 3.90625 5.5383 3.90625 6.15455V6.6026L3.46088 6.65155C2.06371 6.80512 1 7.95266 1 9.31818C1 10.7849 2.23059 12 3.78125 12H12.6875C13.9793 12 15 10.9884 15 9.77273C15 8.55703 13.9793 7.54545 12.6875 7.54545H12.1875V7.04545C12.1875 4.8256 10.3273 3 8 3C6.83758 3 5.80253 3.45773 5.05886 4.09909Z"
                  fill="white"
                />
              </svg>
              <p>
                Speed Dating <br /> Participants
              </p>
            </button>
          </CSVLink>
          <CSVLink
            style={{ textDecoration: "none" }}
            data={events}
            filename="List of Events"
          >
            <button className="btn btn-info btn-data">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.64645 10.8536C7.84171 11.0488 8.15829 11.0488 8.35355 10.8536L10.3536 8.85355C10.5488 8.65829 10.5488 8.34171 10.3536 8.14645C10.1583 7.95118 9.84171 7.95118 9.64645 8.14645L8.5 9.29289V5.5C8.5 5.22386 8.27614 5 8 5C7.72386 5 7.5 5.22386 7.5 5.5V9.29289L6.35355 8.14645C6.15829 7.95118 5.84171 7.95118 5.64645 8.14645C5.45118 8.34171 5.45118 8.65829 5.64645 8.85355L7.64645 10.8536Z"
                  fill="white"
                />
                <path
                  d="M4.40576 3.34182C5.31176 2.56046 6.57359 2 8 2C10.6902 2 12.9233 3.99944 13.1657 6.57898C14.7581 6.80411 16 8.13656 16 9.77273C16 11.5695 14.5023 13 12.6875 13H3.78125C1.70754 13 0 11.366 0 9.31818C0 7.55511 1.26586 6.09512 2.94223 5.725C3.08479 4.8617 3.63985 4.00237 4.40576 3.34182ZM5.05886 4.09909C4.3023 4.75157 3.90625 5.5383 3.90625 6.15455V6.6026L3.46088 6.65155C2.06371 6.80512 1 7.95266 1 9.31818C1 10.7849 2.23059 12 3.78125 12H12.6875C13.9793 12 15 10.9884 15 9.77273C15 8.55703 13.9793 7.54545 12.6875 7.54545H12.1875V7.04545C12.1875 4.8256 10.3273 3 8 3C6.83758 3 5.80253 3.45773 5.05886 4.09909Z"
                  fill="white"
                />
              </svg>
              <p>List of Events</p>
            </button>
          </CSVLink>
          <a
            style={{ textDecoration: "none" }}
            href="https://mailchimp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-info btn-data">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.35417 5.5H4C2.34315 5.5 1 6.84315 1 8.5C1 10.1569 2.34315 11.5 4 11.5H7C8.65685 11.5 10 10.1569 10 8.5C10 8.14936 9.93985 7.81278 9.82929 7.5H9C8.91376 7.5 8.83008 7.51092 8.75024 7.53144C8.90938 7.8184 9 8.14862 9 8.5C9 9.60457 8.10457 10.5 7 10.5H4C2.89543 10.5 2 9.60457 2 8.5C2 7.39543 2.89543 6.5 4 6.5H5.53513C5.75287 6.12359 6.03018 5.78596 6.35417 5.5Z"
                  fill="white"
                />
                <path
                  d="M9 5.5C7.34315 5.5 6 6.84315 6 8.5C6 8.85064 6.06015 9.18722 6.17071 9.5H7.26756C7.09739 9.20583 7 8.86429 7 8.5C7 7.39543 7.89543 6.5 9 6.5H12C13.1046 6.5 14 7.39543 14 8.5C14 9.60457 13.1046 10.5 12 10.5H10.4649C10.2471 10.8764 9.96982 11.214 9.64582 11.5H12C13.6569 11.5 15 10.1569 15 8.5C15 6.84315 13.6569 5.5 12 5.5H9Z"
                  fill="white"
                />
              </svg>
              <p>Mailchimp</p>
            </button>
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
          <h6>List of Lesbotoč Camp Participants</h6>
        </div>
      </div>

      <ReportBug />
    </Fragment>
  );
}
