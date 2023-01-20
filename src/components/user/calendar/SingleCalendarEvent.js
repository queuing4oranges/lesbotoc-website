import React, { useState, useEffect } from "react";
import { isRouteErrorResponse, useParams } from "react-router-dom";
import axios from "axios";

export default function SingleCalendarEvent() {
  const [data, setData] = useState([]);
  const [oneEventLoaded, setOneEventLoaded] = useState(false);

  const { id } = useParams();
  console.log(id);

  //   useEffect(() => {
  //     showEvent();
  //   }, []);

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
      <button onClick={() => showEvent()}>Get one event</button>
      {data && <p>{data}</p>}
    </div>
  );
}

//   https://api.itisgoodtohave.me/events/single_read.php/78
// const response = await fetch("/api/events/" + id);
