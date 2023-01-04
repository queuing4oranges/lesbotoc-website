import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

export default function AddEvent({ getEvents }) {
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
     
    useEffect(() => {
      getEvents();
    }, [success])
    

    const handleSubmit = (e) => {
        setSuccess(false);
        setErrorMsg(null);
        e.preventDefault();

        //making a form object to send to the DB
        const form = document.getElementById('add-event-form');
        const formData = new FormData(form);

        axios.post('https://api.itisgoodtohave.me/events/create.php', formData) 
        .then(function(response){
            if(response.status === 200) {
                swal("YEAH BABY!", "You added a new event.", "success");
                setSuccess(true)
            } else if (response.status === 500) {
                swal("DAMN!", "Could not add event. Something is  missing here.", "error");
            }
        })
        .catch((err) => {
            console.log(err);
        })
        resetInputs();
        getEvents();
         
    }

    //looping through inputs value to reset
    const resetInputs = () => {
        let elements = document.querySelectorAll(".input-item");
            elements.forEach((element) =>{
            element.value = "";
            })
    }

  return (

    <Fragment>
        <h5 className="add-event-title">Add an event</h5>

        {errorMsg &&  
        <p className="alert alert-danger">{errorMsg}</p>}

        <form className="add-event-form" id="add-event-form" encType="multipart/form-data" onSubmit={handleSubmit}>

            <div className="event-title">
                <label className="form-label" htmlFor="name">Name of event *</label>
                <input
                className="form-control input-item"
                name="name" 
                id="name"
                type="text"
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
                    />
                </div>
               
               <div className="venue-details-website">
                    <label className="form-label" htmlFor="loc_website">Website of the venue</label>
                    <input 
                    className="form-control input-item"
                    name="loc_website"
                    id="loc_website"
                    type="text"
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
                        required />
                    </div>

                    <div className="time-date-time">
                        <label className="form-label" htmlFor="time">Time *</label>
                        <input 
                        className="form-control input-item"
                        name="time"
                        id="time"
                        type="time"
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
                        />   
                    </div>

                    <div className="price-capac-price">
                        <label className="form-label" htmlFor="capacity">Capacity</label>
                        <input
                        className="form-control input-item" 
                        name="capacity"
                        id="capacity"
                        />
                    </div>                    
                </div>

                    <div className="event-pic">
                        <label htmlFor="image_path">Chose an image * (1MB / jpeg, jpg, png, gif)</label>
                        <input type="file" 
                        className="input-item event-upload-btn"
                        name="image_path"
                        id="image_path"
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
                />
            </div>
        </div>

            
                <button className="btn btn-success add-event-save">Save event</button>
        </form>
        
    </Fragment>
  )
  
}
