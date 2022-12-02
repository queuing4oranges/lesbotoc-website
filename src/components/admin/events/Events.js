import React from 'react';
import AdminNavbar from '../AdminNavbar';
import EventsList from './EventsList';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import AddEvent from './AddEvent';
import EditEventModal from './EditEventModal';

export default function Events() {
  const [events, setEvents] = useState([])
  const [eventsLoaded, setEventsLoaded] = useState(false)
  const [success, setSuccess] = useState(false)
  
  useEffect(() => {
    getEvents();
    }, [success])
    

  function getEvents() {
    axios.get('https://api.itisgoodtohave.me/events/read.php')
    .then(function(response) {
        console.log(response)
        setEvents(response.data);
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

      <h3 className="admin-page-title">Events</h3>
      {/* {successMsg && <p className="alert alert-success alert" >{successMsg}</p>}  */}

{/* List of events */}
      <div className="events-container">

        <div className="events-cont-left">
        {eventsLoaded &&
        <EventsList 
          events={events} 
          setEventsLoaded={setEventsLoaded} 
          getEvents={getEvents} 
          setSuccess={setSuccess} 
          success={success}/>}
        </div>

   
        <div className="events-cont-right">
          <AddEvent getEvents={getEvents} />
          {/* <EditEventModal 
            getEvents={getEvents}
            events={events}
          /> */}
        </div>

          
      </div>
      

    </Fragment>

  )
}
