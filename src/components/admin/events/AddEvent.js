import { useState } from "react";
import React from 'react';
import axios from "axios";
import { Fragment } from "react";
import { useEffect } from "react";
import swal from "sweetalert";

export default function AddEvent({ getEvents }) {
    // const [name, setName] = useState("")
    // const [locationName, setLocationName] = useState("")
    // const [locationAddress, setLocationAddress] = useState("")
    // const [website, setWebsite] = useState("")
    // const [eventDate, setEventDate] = useState("")
    // const [eventTime, setEventTime] = useState("")
    // const [description, setDescription] = useState("")
    // const [image, setImage] = useState("")
    // const [price, setPrice] = useState("")
    // const [capacity, setCapacity] = useState("")
    const [success, setSuccess] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
     
    useEffect(() => {
        //problem with dependency array - use getEvents inside useEffect??
      getEvents();
    }, [success])
    

    function handleSubmit(e) {
        setSuccess(false)
        setErrorMsg(null)
        e.preventDefault()

        const form = document.getElementById('add-event-form')
        const formData = new FormData(form);
        console.log([...formData]);

        // if(!name) {
        //     setErrorMsg("Please provide a name.")
        //     return
        // }

        axios.post('https://api.itisgoodtohave.me/events/create.php', formData) 
        .then(function(response){
            if(response.status === 200) {
                swal("YEAH BABY!", "You added a new event.", "success");
                setSuccess(true)
            } else if (response.status === 500) {
                swal("DAMN!", "Could not add event. Something is  missing here.", "error")
            }
        })
        .catch((err) => {
            console.log(err)
        })
        resetInputs()
        getEvents()
         
    }

    function resetInputs() {
        let elements = document.querySelectorAll(".input-item");
        elements.forEach((element) =>{
            element.value = "";
        })
    }



    // function resetInputs() {
    // return (
    // setName(""),
    // setLocationName(""), 
    // setLocationAddress(""),
    // setWebsite(""),
    // setEventDate(""),
    // setEventTime(""),
    // setDescription(""),
    // setPrice(""),
    // setCapacity("")
    // )}


  return (

    <Fragment>
        <h5 className="add-event-title">Add an event</h5>

        {errorMsg &&  
        <p className="alert alert-danger">{errorMsg}</p>}
        {/* {successMsg ? <p onMouseOver={(e) => setSuccessMsg(false)} className="alert alert-success">{successMsg}</p> : ""} */}

        <form className="add-event-form" id="add-event-form" encType="multipart/form-data" onSubmit={handleSubmit}>

            <div className="event-title">
                <label className="form-label" htmlFor="name">Name of event *</label>
                <input
                className="form-control input-item"
                name="name" 
                id="name"
                type="text"
                // onChange={(e) => setName(e.target.value)}
                // value={name}
                required
                />
            </div>

            <div className="venue-details">
                <div className="venue-details-name">
                    <label className="form-label" htmlFor="loc_name">Name of the venue *</label>
                    <input 
                    className="form-control input-item"
                    name="loc_name"
                    id="loc_name"
                    type="text"
                    placeholder="example: Cafe XY"
                    // onChange={(e) => setLocationName(e.target.value)}
                    // value={locationName}
                    required />
                </div>

                <div className="venue-details-address">
                    <label className="form-label" htmlFor="loc_address">Address of the venue</label>
                    <input 
                    className="form-control input-item"
                    name="loc_address"
                    id="loc_address"
                    type="text"
                    placeholder="example: Opatovická 12, Praha 11000"
                    // onChange={(e) => setLocationAddress(e.target.value)}
                    // value={locationAddress} 
                    />
                </div>
               
               <div className="venue-details-website">
                    <label className="form-label" htmlFor="loc_website">Website of the venue</label>
                    <input 
                    className="form-control input-item"
                    name="loc_website"
                    id="loc_website"
                    type="text"
                    // onChange={(e) => setWebsite(e.target.value)}
                    // value={website} 
                    />
                </div>
            </div>


        <div className="specifics-cont">
            <div className="specifics">
                <div className="time-date">
                    <div className="time-date-date">
                        <label className="form-label" htmlFor="date">Date *</label>
                        <input 
                        className="form-control input-item"
                        name="date"
                        id="date"
                        type="date"
                        // onChange={(e) => setEventDate(e.target.value)}
                        // value={eventDate}
                        required />
                    </div>

                    <div className="time-date-time">
                        <label className="form-label" htmlFor="time">Time *</label>
                        <input 
                        className="form-control input-item"
                        name="time"
                        id="time"
                        type="time"
                        // onChange={(e) => setEventTime(e.target.value)}
                        // value={eventTime}
                        required />
                    </div>
                </div>

                <div className="price-capac">
                    <div className="price-capac-price">
                        <label className="form-label" htmlFor="price">Price in CZK</label>
                        <input
                        className="form-control input-item" 
                        name="price"
                        id="price"
                        // onChange={(e) => setPrice(e.target.value)}
                        // value={price} 
                        />   
                    </div>

                    <div className="price-capac-price">
                        <label className="form-label" htmlFor="capacity">Capacity</label>
                        <input
                        className="form-control input-item" 
                        name="capacity"
                        id="capacity"
                        // onChange={(e) => setCapacity(e.target.value)}
                        // value={capacity} 
                        />
                    </div>                    
                </div>

                    <div className="event-pic">
                        <label htmlFor="image_path">Chose an image * (1MB / jpeg, jpg, png, gif)</label>
                        <input type="file" 
                        className="input-item event-upload-btn"
                        name="image_path"
                        id="image_path"
                        // onChange={(e) =>setImage(e.target.files[0])}
                        required
                        />
                    </div>
            </div>   

            <div className="description">
                <label className="form-label" htmlFor="description">Description:</label>
                <textarea
                className="form-control input-item add-event-description" 
                name="description"
                id="description"
                // onChange={(e) => setDescription(e.target.value)}
                // value={description} 
                />
            </div>
        </div>

            
                <button className="btn btn-success">Save event</button>
        </form>
        
    </Fragment>
  )
  
}


        // {
        //     name: name,
        //     loc_name: locationName,
        //     loc_address: locationAddress, 
        //     loc_website: website, 
        //     date: eventDate,
        //     time: eventTime,
        //     description: description,
        //     price: price,
        //     capacity: capacity,
        //     image: image
        // }