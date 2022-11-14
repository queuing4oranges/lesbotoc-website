import React from 'react'; 
import { Fragment } from 'react';
import dateFormat from 'dateformat';



export default function EventsList({ events }) {

    // let date = new Date();


   
  return (
    <Fragment>
           
            
                {events.map((event, key) => (
                   <button className='btn eventlist-btn' key={key}>
                    <h6>{event.name}</h6>
                    <p>{dateFormat(event.date, "dd. mmmm yyyy")}</p>
                   </button> 
                ))}             



    </Fragment>
  )
}
