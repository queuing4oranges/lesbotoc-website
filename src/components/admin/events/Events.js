import React from 'react';
import AdminNavbar from '../AdminNavbar';
import EventsList from './EventsList';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import AddEvent from './AddEvent';
import EditEvent from './EditEvent';

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
        <EventsList events={events} setEventsLoaded={setEventsLoaded} getEvents={getEvents}/>}
        </div>

   
        <div className="events-cont-right">
          <AddEvent getEvents={getEvents} />
          <EditEvent getEvents={getEvents}/>
        </div>

          
      </div>
      
      
      
      
      





    </Fragment>

  )
}
