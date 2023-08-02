import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
//libraries
import Moment from "react-moment";
//components
import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import SpeedDating from "./SpeedDating";
//hooks
import useShowEvent from "../../../hooks/useShowEvent";
//icons
import Kalender from "../../../assets/svg-icons/Kalender";
import Clock from "../../../assets/svg-icons/Clock";
import AddressPin from "../../../assets/svg-icons/AddressPin";
import Globe from "../../../assets/svg-icons/Globe";
import Money from "../../../assets/svg-icons/Money";
import People from "../../../assets/svg-icons/People";
import StreetMap from "../../../assets/svg-icons/StreetMap";

export default function SingleCalendarEvent() {
  const [showMod, setShowMod] = useState(false);
  const { oneEvent, loading, error, showEvent } = useShowEvent();

  const { id } = useParams();

  useEffect(() => {
    showEvent(id);
  }, []);

  if (error) {
    return console.log(error);
  }

  // useEffect(() => {
  //   if (showMod) {
  //     document.querySelector(".single-cal-cont").classList.add("blur");
  //   } else {
  //     document.querySelector(".single-cal-cont").classList.remove("blur");
  //   }
  // });

  return (
    <div className="user-container">
      <Navbar />
      {oneEvent && (
        <div className="user-container single-cal-cont">
          <h2 className="user-title">{oneEvent.name}</h2>

          <div className="single-cal-event-bg">
            <div className="user-cal-cont">
              <div className="single-cal-event-left">
                <div className="single-cal-event">
                  <Kalender width={16} height={16} fill="#003243" />
                  <p>
                    <Moment format="D.MM.YYYY">{oneEvent.date}</Moment>
                  </p>
                </div>

                <div className="single-cal-event">
                  <Clock width={16} height={16} fill="#003243" />
                  <p>{oneEvent.time}</p>
                </div>

                <div className="single-cal-event">
                  <AddressPin width={14} height={20} fill="#003243" />
                  <p>{oneEvent.loc_name}</p>
                </div>

                <div className="single-cal-event">
                  <Globe height={16} width={16} fill="#003243" />
                  <a
                    href={oneEvent.loc_website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {oneEvent.loc_website}
                  </a>
                </div>

                {oneEvent.price ? (
                  <div className="single-cal-event">
                    <Money width={16} height={16} fill="#003243" />
                    <p>{oneEvent.price} CZK</p>
                  </div>
                ) : (
                  ""
                )}

                {oneEvent.capacity ? (
                  <div className="single-cal-event">
                    <People width={16} height={16} fill="#003243" />
                    <p>max. {oneEvent.capacity} lidí</p>
                  </div>
                ) : (
                  ""
                )}

                <div className="cal-event-description">
                  <p>{oneEvent.description}</p>
                </div>

                <div className="single-cal-event-button">
                  <Link to={"/kalendar"}>
                    <button className="button btn sm single-event-button">
                      Back
                    </button>
                  </Link>
                  {oneEvent.event_type === "Speed Dating" ? (
                    <Link>
                      <button
                        onClick={() => setShowMod(!showMod)}
                        className="button btn sm single-event-button orange-btn"
                      >
                        Sign Up
                      </button>
                    </Link>
                  ) : (
                    ""
                  )}

                  {oneEvent.event_type === "Lesbotoc Camp" ? (
                    <Link>
                      <button
                        // onClick={() => openModal()}
                        className="button btn sm single-event-button yellow-btn"
                      >
                        Sign Up
                      </button>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="single-cal-event-right">
                <img
                  className="single-cal-img"
                  src={`https://api.itisgoodtohave.me/events/images/${oneEvent.image_path}`}
                  alt={oneEvent.image_alt}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="gmaps-container">
        <div className="gmaps-cont">
          <iframe
            id="iframeId"
            height="300px"
            width="50%"
            src={`https://maps.google.com/maps?q=${oneEvent.latitude},${oneEvent.longitude}&hl=es;&output=embed`}
          ></iframe>

          <div className="gmaps-info">
            <div className="gmaps-address">
              <StreetMap width={16} height={16} fill="#003243" />
              <p>{oneEvent.loc_address}</p>
            </div>

            <div className="gmaps-instructions">
              <p>{oneEvent.instructions}</p>
            </div>
          </div>
        </div>
      </div>
      {showMod && (
        <SpeedDating
          date={oneEvent.date}
          time={oneEvent.time}
          location={oneEvent.loc_name}
          setShowMod={setShowMod}
        />
      )}
      <Footer />
    </div>
  );
}
