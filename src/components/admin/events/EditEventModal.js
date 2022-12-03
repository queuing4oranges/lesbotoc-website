import React from 'react'; 
import { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default function EditEvent({ data, getEvents, setOpenModal }) {

    const [name, setName] = useState("")
    const [locationName, setLocationName] = useState("")
    const [locationAddress, setLocationAddress] = useState("")
    const [website, setWebsite] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventTime, setEventTime] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [capacity, setCapacity] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    
useEffect(() => {


    setName(data.name)
    setLocationName(data.loc_name)
    setLocationAddress(data.loc_address)
    setWebsite(data.loc_website)
    setEventDate(data.date)
    setEventTime(data.time)
    setDescription(data.description)
    setPrice(data.price)
    setCapacity(data.capacity)

}, [data])

   

    const handleSubmit = async (e) => {

        setErrorMsg(null)
        e.preventDefault()

        if(!name) {
            setErrorMsg("Please provide a name.")
            return
        }

        axios.put(`https://api.itisgoodtohave.me/events/update.php/${data.id}`, {

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
                swal("YEAH BABY!", "You edited this event.", "success");
                getEvents()

            } else if (response.status === 500) {
                setErrorMsg("Could not edit this event.")
            }
        })
        resetInputs()
        setOpenModal(false)
        
         
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

    function abortEditing() {
      setOpenModal(false)
      resetInputs()
    }


  return (
    <div className="edit-modal edit-event-modal" onClick={abortEditing} >
      
      <div className="edit-modal-content">
          
        <div className="edit-modal-header">
          <h4 className="edit-modal-header">Edit an event</h4>
        </div>

        <div className="edit-modal-body edit-event-body">
          <form id="edit-event-form" onSubmit={handleSubmit}>

              <div className="edit-cont-top">

                    <div className="edit-cont-top-left">
                          <div className="edit-input-cont">
                          <label htmlFor="name">Event: *</label>
                          <input
                          className="edit-input event-input"
                          name="name" 
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          />
                          </div>

                          <div className="edit-date-time">         
                            <div className="edit-input-cont">
                            <label htmlFor="date">Date: *</label>
                            <input 
                            className="edit-input event-input"
                            name="date"
                            type="date"
                            onChange={(e) => setEventDate(e.target.value)}
                            value={eventDate} />
                            </div>


                            <div className="edit-input-cont">
                            <label htmlFor="time">Time:</label>
                            <input 
                            className="edit-input event-input"
                            name="time"
                            type="time"
                            onChange={(e) => setEventTime(e.target.value)}
                            value={eventTime} />
                            </div>
                          </div>

                          <div className="edit-price-cap">
                            <div className="edit-input-cont">
                            <label htmlFor="price">Price:</label>
                            <input
                            className="edit-input event-input" 
                            name="price"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price} />
                            </div>
                                        
                            <div className="edit-input-cont">
                            <label htmlFor="capacity">Capacity:</label>
                            <input
                            className="edit-input event-input" 
                            name="capacity"
                            onChange={(e) => setCapacity(e.target.value)}
                            value={capacity} />
                            </div>
                          </div>

                      </div>

                    <div className="edit-cont-top-right">
                              <div className="edit-input-cont">
                                <label htmlFor="loc_name">Name of the venue:</label>
                                <input 
                                className="edit-input event-input"
                                name="loc_name"
                                type="text"
                                placeholder="example: Cafe XY"
                                onChange={(e) => setLocationName(e.target.value)}
                                value={locationName} />
                              </div>

                              <div className="edit-input-cont">
                                <label htmlFor="loc_address">Address:</label>
                                <input 
                                className="edit-input event-input"
                                name="loc_address"
                                type="text"
                                placeholder="example: Opatovická 12, Praha 11000"
                                onChange={(e) => setLocationAddress(e.target.value)}
                                value={locationAddress} />
                              </div>

                              <div className="edit-input-cont">
                                <label htmlFor="loc_website">Website:</label>
                                <input 
                                className="edit-input event-input"
                                name="loc_website"
                                type="text"
                                onChange={(e) => setWebsite(e.target.value)}
                                value={website} />
                              </div>
                    </div>
              </div>

              <div className="edit-cont-bottom">
                            <div className="edit-input-cont description-cont">
                                <label htmlFor="description">Description:</label>
                                <textarea
                                className="edit-input event-input" 
                                name="description"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description} />
                            </div>
          
                            <div className="edit-cont-btn">
                                <button className="btn btn-success edit-btn">Save</button>
                                <button className="btn btn-danger edit-btn"onClick={()=>abortEditing()}>Cancel</button>
                            </div>
                </div>
          
          </form>
        </div>

      </div>
  </div>
  )
}


// axios.get(`https://api.itisgoodtohave.me/events/single_read.php/${id}`)