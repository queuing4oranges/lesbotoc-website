import { useState } from "react";
import React from 'react';
import axios from "axios";

export default function AddEvent() {
    const [name, setName] = useState("")
    const [locationAddress, setLocationAddress] = useState("")
    const [website, setWebsite] = useState("")
    const [description, setDescription] = useState("")
    

    console.log(name)
    console.log(locationAddress)
    console.log(website)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://api.itisgoodtohave.me/events/create.php', {
            name: name,
            loc_address: locationAddress, 
            loc_website: website, 
            description: description 
        })
        .then(function(response){
            resetInputs()
    })
}

    const resetInputs = () =>{
        let elements = document.querySelectorAll(".input-item")
        elements.forEach((element) => {
            element.value="";
        })

    }

  return (
    <div>
        <button>Add an Event</button>

        <form onSubmit={handleSubmit}>
            <label className="form-label">
                <span>Name of the event:</span>
                <input
                className="form-control input-item"
                name="name" 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required />
            </label>

            <label className="form-label">
                <span>Location of the venue:</span>
                <input 
                className="form-control input-item"
                name="loc_address"
                type="text"
                placeholder="for example: Opatovická 12, Praha 11000"
                onChange={(e) => setLocationAddress(e.target.value)}
                value={locationAddress} />
            </label>

            <label className="form-label">
                <span>Website of the venue:</span>
                <input 
                className="form-control input-item"
                name="loc_website"
                type="text"
                onChange={(e) => setWebsite(e.target.value)}
                value={website} />
            </label>

            <label className="form-label">
                <span>Description:</span>
                <textarea
                className="form-control input-item" 
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                />
            </label>
                <button className="btn">Save event</button>
        </form>
        
    </div>
  )
}
