import React from 'react';
import AdminNavbar from '../AdminNavbar';
import EventsList from './EventsList';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';

export default function Events() {
      const [events, setEvents] = useState([])
      const [eventsLoaded, setEventsLoaded] = useState(false)

    useEffect(() => {
      getEvents();
     }, [])
    

    function getEvents() {
        axios.get('https://api.itisgoodtohave.me/events/read.php')
        .then(function(response) {
           console.log(response)
           setEvents(response.data);
           console.log(events)
           setEventsLoaded(true)
        })
        .catch(function(error) {
            if (error.response) {
            console.log(error.response.data);
        }}) 
    } 


  return (   
    <Fragment>

      <AdminNavbar/>

      <h3 className="events-title">Events</h3>
      {/* {successMsg && <p className="alert alert-success alert" >{successMsg}</p>}  */}

{/* List of events */}
      <div className="events-container">
        {eventsLoaded &&
        <EventsList events={events} setEventsLoaded={setEventsLoaded}/>}
      </div>
      
      
      
      
      





    </Fragment>

  )
}
