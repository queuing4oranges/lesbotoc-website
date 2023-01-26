import React, { Fragment, useState, useEffect } from "react";
import AdminNavbar from "../AdminNavbar";
import axios from "axios";
import { CSVLink } from "react-csv";
import ReportBug from "../../includes/ReportBug";

export default function Newsletter() {
  const [contacts, setContacts] = useState([]);
  const [successMsg, setSuccessMsg] = useState(false);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    getContacts();
  }, [successMsg]);

  const getContacts = () => {
    axios
      .get("https://api.itisgoodtohave.me/contacts/read.php")
      .then(function (response) {
        setContacts(response.data);
        setSuccessMsg(true);
        console.log(contacts);
      })
      //filtering the mail adresses for newsletter subscription
      .then(function () {
        let result = contacts.filter(function (contact) {
          return contact.newsletter === 1;
        });
        setSubscribers(result);
        console.log(result);
      })
      .then(function () {
        let subs = subscribers.map((subscriber) => subscriber.email);
      });
  };

  return (
    <Fragment>
      <AdminNavbar />

      <h3 className="admin-page-title">Newsletter</h3>

      <div className="table-container-top newsletter-container">
        <CSVLink data={subscribers} filename="newsletter_subscribers">
          <button className="btn btn-info btn-news">
            Export Newsletter Subscribers
          </button>
        </CSVLink>
        <a href="https://mailchimp.com/" target="_blank" rel="noreferrer">
          <button className="btn btn-info btn-news">Go to mailchimp</button>
        </a>
      </div>

      <ReportBug />
    </Fragment>
  );
}
