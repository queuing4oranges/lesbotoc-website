import React from 'react'; 
import { Fragment } from 'react';
import dateFormat, { masks } from 'dateformat';



export default function EventsList({ events }) {


   
  return (
    <Fragment>
           
            <div className="events-cont-left">
                {events.map((event, key) => (
                   <button className='btn eventlist-btn' key={key}>
                    <h6>{event.name}</h6>
                    <p>{event.date}</p>
                   </button> 
                ))}             

            </div>

    </Fragment>
  )
}
