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
