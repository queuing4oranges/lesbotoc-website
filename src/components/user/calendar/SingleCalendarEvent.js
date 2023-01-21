import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BubbleGrid6x7 from "../includes/BubbleGrid6x7";

export default function SingleCalendarEvent() {
  const [data, setData] = useState([]);
  const [oneEventLoaded, setOneEventLoaded] = useState(false);

  const { id } = useParams();
  console.log(id);

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
    <div>
      {oneEventLoaded && (
        <div className="user-container">
          <h2 className="user-title">{data.name}</h2>

          <div className="single-cal-event-bg">
            <div className="single-cal-event-left">
              <div className="single-cal-event">
                <p>{data.date}</p>
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
                      fill="black"
                    />
                    <path
                      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                      fill="black"
                    />
                  </svg>
                <p>{data.time}</p>
              </div>
              <div className="single-cal-event">
                <p>{data.loc_name}</p>
              </div>
              <div className="single-cal-event">
                <p>{data.loc_website}</p>
              </div>
              <div className="single-cal-event">
                <p>{data.description}</p>
              </div>
              <button className="button btn sm">Back</button>
            </div>

            <div className="single-cal-event-right">
              <img src="" alt="" />
              <BubbleGrid6x7 color="#4d8eb5" />
              <BubbleGrid6x7 color="#b84639" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

//   https://api.itisgoodtohave.me/events/single_read.php/78
// const response = await fetch("/api/events/" + id);
