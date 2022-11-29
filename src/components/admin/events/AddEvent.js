import { useState } from "react";
import React from 'react';
import axios from "axios";
import { Fragment } from "react";
import { useEffect } from "react";
import swal from "sweetalert";

export default function AddEvent({ getEvents }) {
    const [name, setName] = useState("")
    const [locationName, setLocationName] = useState("")
    const [locationAddress, setLocationAddress] = useState("")
    const [website, setWebsite] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventTime, setEventTime] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    const [capacity, setCapacity] = useState("")
    const [success, setSuccess] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
     
    useEffect(() => {
      getEvents();
    }, [success])
    

    const handleSubmit = async (e) => {
        setSuccess(false)
        setErrorMsg(null)
        e.preventDefault()

        if(!name) {
            setErrorMsg("Please provide a name.")
            return
        }

        axios.post('https://api.itisgoodtohave.me/events/create.php', {
            name: name,
            loc_name: locationName,
            loc_address: locationAddress, 
            loc_website: website, 
            date: eventDate,
            time: eventTime,
            description: description,
            price: price,
            capacity: capacity,
        })
        .then(function(response){
            if(response.status === 200) {
                swal("YEAH BABY!", "You added a new event.", "success");
                setSuccess(true)

            } else if (response.status === 500) {
                setErrorMsg("Could not add a new event.")
            }
        })
        resetInputs()
        getEvents()
         
    }

    function resetInputs() {
    return (
    setName(""),
    setLocationName(""), 
    setLocationAddress(""),
    setWebsite(""),
    setEventDate(""),
    setEventTime(""),
    setDescription(""),
    setPrice(""),
    setCapacity("")
    )}


  return (

    <Fragment>
        <h6 className="add-event-title">Add an event</h6>

        {errorMsg &&  
        <p className="alert alert-danger">{errorMsg}</p>}
        {/* {successMsg ? <p onMouseOver={(e) => setSuccessMsg(false)} className="alert alert-success">{successMsg}</p> : ""} */}

        <form className="add-event-form" id="add-event-form" onSubmit={handleSubmit}>

            <div className="event-title">
                <label className="form-label" htmlFor="name">Name of event:</label>
                <input
                className="form-control input-item"
                name="name" 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
            </div>

            <div className="venue-details">
                <div className="venue-details-name">
                    <label className="form-label" htmlFor="loc_name">Name of the venue:</label>
                    <input 
                    className="form-control input-item"
                    name="loc_name"
                    type="text"
                    placeholder="example: Cafe XY"
                    onChange={(e) => setLocationName(e.target.value)}
                    value={locationName} />
                </div>

                <div className="venue-details-address">
                    <label className="form-label" htmlFor="loc_address">Address of the venue:</label>
                    <input 
                    className="form-control input-item"
                    name="loc_address"
                    type="text"
                    placeholder="example: Opatovická 12, Praha 11000"
                    onChange={(e) => setLocationAddress(e.target.value)}
                    value={locationAddress} />
                </div>
               
               <div className="venue-details-website">
                    <label className="form-label" htmlFor="loc_website">Website of the venue:</label>
                    <input 
                    className="form-control input-item"
                    name="loc_website"
                    type="text"
                    onChange={(e) => setWebsite(e.target.value)}
                    value={website} />
                </div>
            </div>


        <div className="specifics-cont">
            <div className="specifics">
                <div className="time-date">
                    <div className="time-date-date">
                        <label className="form-label" htmlFor="date">Date:</label>
                        <input 
                        className="form-control input-item"
                        name="date"
                        type="date"
                        onChange={(e) => setEventDate(e.target.value)}
                        value={eventDate} />
                    </div>

                    <div className="time-date-time">
                        <label className="form-label" htmlFor="time">Time:</label>
                        <input 
                        className="form-control input-item"
                        name="time"
                        type="time"
                        onChange={(e) => setEventTime(e.target.value)}
                        value={eventTime} />
                    </div>
                </div>

                <div className="price-capac">
                    <div className="price-capac-price">
                        <label className="form-label" htmlFor="price">Price:</label>
                        <input
                        placeholder="*"
                        className="form-control input-item" 
                        name="price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price} />
                        
                        <span className="caption-price-capac">*If not valid, leave empty.</span>
                    </div>

                    <div className="price-capac-price">
                        <label className="form-label" htmlFor="capacity">Capacity:</label>
                        <input
                        placeholder="*"
                        className="form-control input-item" 
                        name="capacity"
                        onChange={(e) => setCapacity(e.target.value)}
                        value={capacity} />
                    </div>
                    
                </div>
            </div>   

            <div className="description">
                <label className="form-label" htmlFor="description">Description:</label>
                <textarea
                className="form-control input-item" 
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description} />
            </div>
        </div>

            
                <button className="btn btn-success">Save event</button>
        </form>
        
    </Fragment>
  )
  
}
