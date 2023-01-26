import React, { useState, useEffect } from "react";
import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import axios from "axios";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [eventsLoaded, setEventsLoaded] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    axios
      .get("https://api.itisgoodtohave.me/events/read.php")
      .then(function (response) {
        setEvents(response.data);
        setEventsLoaded(true);
      })
      .catch(function (error) {
        if (error.response) {
        }
      });
  };

  return (
    <div className="user-container calendar-container">
      <Navbar />

      <div className="user-calendar-cont">
        <h2 className="user-title">Kalendář</h2>

        <div className="calendar-subtitle-cont">
          <div className="categorie-event">
            <div className="square square-lesbotoc"></div>
            <p>Lesbotoč events </p>
          </div>

          <div className="categorie-event">
            <div className="square square-other"></div>
            <p>Other events </p>
          </div>

          <div className="categorie-event">
            <div className="square square-dating"></div>
            <p>Lesbotoč Speed Dating </p>
          </div>
        </div>

        <div className="cal-events-container">
          {eventsLoaded &&
            events.map((event, key) => (
              <Link
                key={key}
                className="calendar-event-link"
                to={`/kalendar/${event.id}`}
              >
                <div
                  className="user-single-event"
                  style={{
                    backgroundColor:
                      // later change event.name to event.type or something here
                      //speed dating = red, other = grey, lesbotoc = lesbotoc color

                      event.event_type === "Speed Dating"
                        ? "#ed7f71"
                        : event.event_type === "Other Event"
                        ? "#A5B8BC"
                        : "#4d8eb5",
                    boxShadow: "3px 3px 3px 0px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="cal-date-time-cont">
                    {event.date === "0000-00-00" ? (
                      ""
                    ) : (
                      <p className="cal-date-time">
                        <Moment format="D.MM.YYYY">{event.date}</Moment> /
                        &nbsp;
                      </p>
                    )}

                    {event.time === "00:00:00" ? "" : event.time}
                  </div>

                  <div className="cal-name">
                    <p>{event.name}</p>
                  </div>

                  <div className="cal-address-cont">
                    <svg
                      width="14"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 20C7 20 0 12.8921 0 7.5C0 3.35786 3.13402 0 7 0C10.866 0 14 3.35786 14 7.5C14 12.8921 7 20 7 20ZM7 11.25C8.93299 11.25 10.5 9.57106 10.5 7.5C10.5 5.42894 8.93299 3.75 7 3.75C5.06701 3.75 3.5 5.42894 3.5 7.5C3.5 9.57106 5.06701 11.25 7 11.25Z"
                        fill="#f5efea"
                      />
                    </svg>

                    <p className="cal-address">{event.loc_name}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
