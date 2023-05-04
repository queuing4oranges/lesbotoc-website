import React from "react";

export default function CalendarCategories({ events, setEvents, getEvents }) {
  const tempEvents = events.map((event) => event.event_type);
  const uniqueEvents = new Set(tempEvents);
  const uniEvents = [...uniqueEvents];
  console.log(uniEvents);

  const filterEvents = (event_type) => {
    const arr = events.filter((event) => uniEvents.includes(event_type));
    setEvents(arr);
    console.log(arr);
    // const arr = events.filter((event) => event.event_type === event_type);
    // setEvents(arr);
    // console.log(arr);
  };

  return (
    // <div className="calendar-subtitle-cont">
    //   {events &&
    //     uniEvents.map((event) => (
    //       <div className="categorie-event">
    //         <div className="square square-all"></div>
    //         <button onClick={filterEvents(event_type)}>{event}</button>
    //       </div>
    //     ))}
    {
      /* <div className="categorie-event">
        <div className="square square-all"></div>
        <button>All events </button>
      </div>
      <div className="categorie-event">
        <div className="square square-lesbotoc"></div>
        <button onClick={() => filterEvents(event.event_type)}>
          Lesbotoč events{" "}
        </button>
      </div>

      <div className="categorie-event">
        <div className="square square-dating"></div>
        <button>Lesbotoč Speed Dating </button>
      </div>

      <div className="categorie-event">
        <div className="square square-other"></div>
        <button>Other events </button>
      </div> */
    }
    // </div>
  );
}
