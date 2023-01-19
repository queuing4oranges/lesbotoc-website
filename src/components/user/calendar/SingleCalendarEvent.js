import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      });
  };

  showEvent();

  return <div>{data && <p>{data}</p>}</div>;
}

//   https://api.itisgoodtohave.me/events/single_read.php/78
// const response = await fetch("/api/events/" + id);
