import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//components
import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import Loading from "../includes/Loading";

//libraries
import Moment from "react-moment";

//images
import bgImage from "../../../assets/calendar_images/pride-flag-house-bg.png";
import AddressPin from "../../../assets/svg-icons/AddressPin";

//hooks
import useGetEvents from "../../../hooks/useGetEvents";

export default function Calendar() {
  const { events, loading, error, getEvents } = useGetEvents();

  useEffect(() => {
    getEvents(300);
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) {
    return console.log(error);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "repeat",
        height: "fit-content",
      }}
      className="user-container calendar-container"
    >
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
          {events &&
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
                      event.event_type === "Speed Dating"
                        ? "#ed7f71"
                        : event.event_type === "Other Event"
                        ? "#A5B8BC"
                        : event.event_type === "Lesbotoc Camp"
                        ? "#EC9704"
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

                    <p>{event.time === "00:00:00" ? "" : event.time}</p>
                  </div>

                  <div className="cal-name">
                    <h3>{event.name}</h3>
                  </div>

                  <div className="cal-address-cont">
                    <AddressPin width={14} height={20} fill="#f5efea" />

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
