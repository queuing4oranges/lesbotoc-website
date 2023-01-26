import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import BubbleGrid6x7 from "../includes/BubbleGrid6x7";
import Moment from "react-moment";
import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";

export default function SingleCalendarEvent() {
  const [data, setData] = useState([]);
  const [oneEventLoaded, setOneEventLoaded] = useState(false);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const lat = data.latitude;
    const lon = data.longitude;
    console.log(lat, lon);
    const iframeData = document.getElementById("iframeId");
    iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });

  useEffect(() => {
    showEvent(id);
  }, []);

  const showEvent = (id) => {
    axios
      .get(`https://api.itisgoodtohave.me/events/single_read.php/${id}`)
      .then(function (response) {
        setData(response.data);
        console.log(data);
        setOneEventLoaded(true);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  };

  return (
    <div className="user-container">
      <Navbar />
      {oneEventLoaded && (
        <div className="user-container">
          <h2 className="user-title">{data.name}</h2>

          <div className="single-cal-event-bg">
            <div className="user-cal-cont">
              <div className="single-cal-event-left">
                <div className="single-cal-event">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 0H2C0.89543 0 0 0.89543 0 2V14C0 15.1046 0.89543 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.89543 15.1046 0 14 0ZM1 3.85714C1 3.38376 1.44772 3 2 3H14C14.5523 3 15 3.38376 15 3.85714V14.1429C15 14.6162 14.5523 15 14 15H2C1.44772 15 1 14.6162 1 14.1429V3.85714Z"
                      fill="#003243"
                    />
                    <path
                      d="M6.5 7C7.05228 7 7.5 6.55228 7.5 6C7.5 5.44772 7.05228 5 6.5 5C5.94772 5 5.5 5.44772 5.5 6C5.5 6.55228 5.94772 7 6.5 7Z"
                      fill="#003243"
                    />
                    <path
                      d="M9.5 7C10.0523 7 10.5 6.55228 10.5 6C10.5 5.44772 10.0523 5 9.5 5C8.94772 5 8.5 5.44772 8.5 6C8.5 6.55228 8.94772 7 9.5 7Z"
                      fill="#003243"
                    />
                    <path
                      d="M12.5 7C13.0523 7 13.5 6.55228 13.5 6C13.5 5.44772 13.0523 5 12.5 5C11.9477 5 11.5 5.44772 11.5 6C11.5 6.55228 11.9477 7 12.5 7Z"
                      fill="#003243"
                    />
                    <path
                      d="M3.5 10C4.05228 10 4.5 9.55228 4.5 9C4.5 8.44772 4.05228 8 3.5 8C2.94772 8 2.5 8.44772 2.5 9C2.5 9.55228 2.94772 10 3.5 10Z"
                      fill="#003243"
                    />
                    <path
                      d="M6.5 10C7.05228 10 7.5 9.55228 7.5 9C7.5 8.44772 7.05228 8 6.5 8C5.94772 8 5.5 8.44772 5.5 9C5.5 9.55228 5.94772 10 6.5 10Z"
                      fill="#003243"
                    />
                    <path
                      d="M9.5 10C10.0523 10 10.5 9.55228 10.5 9C10.5 8.44772 10.0523 8 9.5 8C8.94772 8 8.5 8.44772 8.5 9C8.5 9.55228 8.94772 10 9.5 10Z"
                      fill="#003243"
                    />
                    <path
                      d="M12.5 10C13.0523 10 13.5 9.55228 13.5 9C13.5 8.44772 13.0523 8 12.5 8C11.9477 8 11.5 8.44772 11.5 9C11.5 9.55228 11.9477 10 12.5 10Z"
                      fill="#003243"
                    />
                    <path
                      d="M3.5 13C4.05228 13 4.5 12.5523 4.5 12C4.5 11.4477 4.05228 11 3.5 11C2.94772 11 2.5 11.4477 2.5 12C2.5 12.5523 2.94772 13 3.5 13Z"
                      fill="#003243"
                    />
                    <path
                      d="M6.5 13C7.05228 13 7.5 12.5523 7.5 12C7.5 11.4477 7.05228 11 6.5 11C5.94772 11 5.5 11.4477 5.5 12C5.5 12.5523 5.94772 13 6.5 13Z"
                      fill="#003243"
                    />
                    <path
                      d="M9.5 13C10.0523 13 10.5 12.5523 10.5 12C10.5 11.4477 10.0523 11 9.5 11C8.94772 11 8.5 11.4477 8.5 12C8.5 12.5523 8.94772 13 9.5 13Z"
                      fill="#003243"
                    />
                  </svg>
                  <p>
                    <Moment format="D.MM.YYYY">{data.date}</Moment>
                  </p>
                </div>

                <div className="single-cal-event">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.5C8 3.22386 7.77614 3 7.5 3C7.22386 3 7 3.22386 7 3.5V9C7 9.17943 7.09614 9.3451 7.25193 9.43412L10.7519 11.4341C10.9917 11.5711 11.2971 11.4878 11.4341 11.2481C11.5711 11.0083 11.4878 10.7029 11.2481 10.5659L8 8.70984V3.5Z"
                      fill="#003243"
                    />
                    <path
                      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                      fill="#003243"
                    />
                  </svg>
                  <p>{data.time}</p>
                </div>

                <div className="single-cal-event">
                  <svg
                    width="14"
                    height="20"
                    viewBox="0 0 14 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 20C7 20 0 12.8921 0 7.5C0 3.35786 3.13402 0 7 0C10.866 0 14 3.35786 14 7.5C14 12.8921 7 20 7 20ZM7 11.25C8.93299 11.25 10.5 9.57106 10.5 7.5C10.5 5.42894 8.93299 3.75 7 3.75C5.06701 3.75 3.5 5.42894 3.5 7.5C3.5 9.57106 5.06701 11.25 7 11.25Z"
                      fill="#003243"
                    />
                  </svg>
                  <p>{data.loc_name}</p>
                </div>

                <div className="single-cal-event">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM7.5 1.07655C6.83057 1.28128 6.16462 1.89722 5.61275 2.93199C5.43997 3.25594 5.283 3.61363 5.14499 3.99999H7.5V1.07655ZM4.08954 3.99999C4.26796 3.44139 4.48325 2.92479 4.73039 2.4614C4.90911 2.1263 5.10862 1.81241 5.32726 1.52835C4.08119 2.04354 3.01629 2.90813 2.25469 3.99999H4.08954ZM3.50845 7.49999C3.53819 6.62317 3.6457 5.7817 3.82001 4.99999H1.67363C1.30933 5.76687 1.08035 6.61049 1.01758 7.49999H3.50845ZM4.84686 4.99999C4.66006 5.76497 4.54152 6.60778 4.50906 7.49999H7.5V4.99999H4.84686ZM8.5 4.99999V7.49999H11.4909C11.4585 6.60778 11.3399 5.76497 11.1531 4.99999H8.5ZM4.50906 8.49999C4.54152 9.39221 4.66006 10.235 4.84686 11H7.5V8.49999H4.50906ZM8.5 8.49999V11H11.1531C11.3399 10.235 11.4585 9.39221 11.4909 8.49999H8.5ZM5.14499 12C5.283 12.3864 5.43997 12.744 5.61275 13.068C6.16462 14.1028 6.83057 14.7187 7.5 14.9234V12H5.14499ZM5.32726 14.4716C5.10863 14.1876 4.90911 13.8737 4.73039 13.5386C4.48325 13.0752 4.26796 12.5586 4.08954 12H2.25469C3.01629 13.0919 4.08119 13.9565 5.32726 14.4716ZM3.82001 11C3.6457 10.2183 3.53819 9.37682 3.50845 8.49999H1.01758C1.08035 9.3895 1.30933 10.2331 1.67363 11H3.82001ZM10.6727 14.4716C11.9188 13.9565 12.9837 13.0919 13.7453 12H11.9104C11.732 12.5586 11.5167 13.0752 11.2696 13.5386C11.0909 13.8737 10.8914 14.1876 10.6727 14.4716ZM8.5 12V14.9234C9.16942 14.7187 9.83537 14.1028 10.3872 13.068C10.56 12.744 10.717 12.3864 10.855 12H8.5ZM12.18 11H14.3264C14.6907 10.2331 14.9196 9.3895 14.9824 8.49999H12.4915C12.4618 9.37682 12.3543 10.2183 12.18 11ZM14.9824 7.49999C14.9196 6.61049 14.6907 5.76687 14.3264 4.99999H12.18C12.3543 5.7817 12.4618 6.62317 12.4915 7.49999H14.9824ZM11.2696 2.4614C11.5167 2.92479 11.732 3.44139 11.9104 3.99999H13.7453C12.9837 2.90812 11.9188 2.04353 10.6727 1.52835C10.8914 1.81241 11.0909 2.1263 11.2696 2.4614ZM10.855 3.99999C10.717 3.61363 10.56 3.25594 10.3872 2.93199C9.83537 1.89722 9.16942 1.28128 8.5 1.07655V3.99999H10.855Z"
                      fill="#003243"
                    />
                  </svg>

                  <a href={data.loc_website} target="_blank" rel="noreferrer">
                    {data.loc_website}
                  </a>
                </div>

                {data.price ? (
                  <div className="single-cal-event">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#003243"
                      class="bi bi-currency-exchange"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z" />
                    </svg>
                    <p>{data.price} CZK</p>
                  </div>
                ) : (
                  ""
                )}

                {data.capacity ? (
                  <div className="single-cal-event">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#003243"
                      class="bi bi-people-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>
                    <p>max. {data.capacity} lidí</p>
                  </div>
                ) : (
                  ""
                )}

                <div className="cal-event-description">
                  <p>{data.description}</p>
                </div>

                <div className="single-cal-event-button">
                  <Link to={"/kalendar"}>
                    <button className="button btn sm single-event-button">
                      Back
                    </button>
                  </Link>
                  {data.event_type === "Speed Dating" ? (
                    <Link>
                      <button className="button btn sm single-event-button orange-btn">
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
                  src={`https://api.itisgoodtohave.me/events/images/${data.image_path}`}
                  alt={data.image_alt}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="gmaps-container">
        <div className="gmaps-cont">
          <iframe id="iframeId" height="300px" width="50%"></iframe>

          <div className="gmaps-info">
            <div className="gmaps-address">
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
                  d="M15.817 0.113333C15.9328 0.208303 16 0.350208 16 0.500004V14.5C16 14.7383 15.8318 14.9436 15.5981 14.9903L10.5981 15.9903C10.5333 16.0032 10.4667 16.0032 10.4019 15.9903L5.5 15.0099L0.598058 15.9903C0.45117 16.0197 0.29885 15.9816 0.183006 15.8867C0.0671615 15.7917 0 15.6498 0 15.5V1.5C0 1.26166 0.16823 1.05646 0.401942 1.00971L5.40194 0.00971396C5.46667 -0.00323223 5.53333 -0.00323223 5.59806 0.00971396L10.5 0.990102L15.4019 0.00971396C15.5488 -0.0196636 15.7012 0.0183639 15.817 0.113333ZM10 1.90991L6 1.10991V14.0901L10 14.8901V1.90991ZM11 14.8901L15 14.0901V1.10991L11 1.90991V14.8901ZM5 14.0901V1.10991L1 1.90991V14.8901L5 14.0901Z"
                  fill="#003243"
                />
              </svg>
              <p>{data.loc_address}</p>
            </div>

            <div className="gmaps-instructions">
              <p>{data.instructions}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque id fuga illum dignissimos facilis earum vero ipsum expedita voluptatum magnam. Temporibus nulla hic sed sapiente quis, architecto aliquam minima ratione.
