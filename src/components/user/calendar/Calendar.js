import React, { useState, useEffect } from "react";
import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import axios from "axios";
import Moment from "react-moment";

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
        console.log(response);
        setEvents(response.data);
        setEventsLoaded(true);
        console.log(events);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  };

  // const userName = document.getElementsByClassName("user-event-name");
  // console.log(userName);

  return (
    <div className="user-calendar-container">
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
              <div
                style={{
                  backgroundColor:
                    event.name === "Speed Dating" ? "#ed7f71" : "#7ab6cb",
                }}
                key={key}
                className="user-single-event"
              >
                <p>
                  {event.date === "0000-00-00" ? (
                    ""
                  ) : (
                    <p>
                      <Moment format="D. MMMM YYYY">{event.date}</Moment> /{" "}
                      {event.time === "00:00:00" ? "" : event.time}
                    </p>
                  )}
                </p>
                <p>{event.name}</p>
                <p>{event.loc_name}</p>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
