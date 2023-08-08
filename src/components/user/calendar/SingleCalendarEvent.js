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
  const {
    name,
    date,
    time,
    loc_name,
    loc_website,
    price,
    capacity,
    description,
    event_type,
    image_path,
    image_alt,
    latitude,
    longitude,
    loc_address,
    instructions,
  } = oneEvent;

  const { id } = useParams();

  useEffect(() => {
    showEvent(id);
  }, []);

  if (error) {
    return console.log(error);
  }

  return (
    <div className="user-container">
      <Navbar />
      {oneEvent && (
        <div className="user-container single-cal-cont">
          <h2 className="user-title">{name}</h2>

          <div className="single-cal-event-bg">
            <div className="user-cal-cont">
              <div className="single-cal-event-left">
                <div className="info-container">
                  {/* /*lkjlkj*/}
                  <ul className="list-group">
                    <li className="list-group-item d-flex align-items-center">
                      <div className="cal-icon-container">
                        <Kalender width={16} height={16} fill="#003243" />
                      </div>
                      <p className="ml-0 mb-0">
                        <Moment format="D.MM.YYYY">{date}</Moment>
                      </p>
                    </li>

                    <li className="list-group-item d-flex align-items-center">
                      <div className="cal-icon-container">
                        <Clock width={16} height={16} fill="#003243" />
                      </div>
                      <p className="ml-0 mb-0">{time}</p>
                    </li>

                    <li className="list-group-item d-flex align-items-center">
                      <div className="cal-icon-container">
                        <AddressPin width={14} height={20} fill="#003243" />
                      </div>
                      <p className="ml-0 mb-0">{loc_name}</p>
                    </li>

                    {loc_website && (
                      <li className="list-group-item d-flex align-items-center">
                        <div className="cal-icon-container">
                          <Globe height={16} width={16} fill="#003243" />
                        </div>
                        {/* <p className="ms-3 mb-0"> */}
                        <div className="link-container">
                          <a
                            href={loc_website}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {loc_website}
                          </a>
                        </div>
                        {/* </p> */}
                      </li>
                    )}

                    {price && (
                      <li className="list-group-item d-flex align-items-center">
                        <div className="cal-icon-container">
                          <Money width={16} height={16} fill="#003243" />
                        </div>
                        <p className="ml-0 mb-0">{price} CZK</p>
                      </li>
                    )}

                    {capacity && (
                      <li className="list-group-item d-flex align-items-center">
                        <div className="cal-icon-container">
                          <People width={16} height={16} fill="#003243" />
                        </div>
                        <p className="ml-0 mb-0">max. {capacity} lidí</p>
                      </li>
                    )}
                  </ul>

                  <div className="cal-event-description">
                    <p>{description}</p>
                  </div>

                  <div className="single-cal-event-button">
                    <Link to={"/kalendar"}>
                      <button className="button btn sm single-event-button">
                        Zpět
                      </button>
                    </Link>
                    {event_type === "Speed Dating" ? (
                      <Link>
                        <button
                          onClick={() => setShowMod(!showMod)}
                          className="button btn sm single-event-button orange-btn"
                        >
                          Přihlášeni
                        </button>
                      </Link>
                    ) : (
                      ""
                    )}

                    {event_type === "Lesbotoc Camp" ? (
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
              </div>

              <div className="single-cal-event-right">
                <img
                  className="single-cal-img"
                  src={`https://api.lesbotoc.com/events/images/${image_path}`}
                  alt={image_alt}
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
            src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`}
          ></iframe>

          {loc_address && (
            <div className="gmaps-info">
              <div className="gmaps-address">
                <StreetMap width={16} height={16} fill="#003243" />
                <p>{loc_address}</p>
              </div>

              <div className="gmaps-instructions">
                <p>{instructions}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {showMod && (
        <SpeedDating
          date={date}
          time={time}
          location={loc_name}
          setShowMod={setShowMod}
        />
      )}
      <Footer />
    </div>
  );
}
