import { useState } from "react";

import React from 'react'

export default function AddEvent() {
    const [name, setName] = useState("")
    const [locationAddress, setLocationAddress] = useState("")
    const [website, setWebsite] = useState("")
    const [description, setDescription] = useState("")
    const [inputs, setInputs] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name, locationAddress, website, description)

        // const data = {name, locationAddress, website, description} 
        // console.log(data)
    }


  return (
    <div>
        <button>Add an Event</button>

        <form onSubmit={handleSubmit}>
            <label>
                <span>Name of the event:</span>
                <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required />
            </label>

            <label>
                <span>Location of the venue:</span>
                <input 
                type="text"
                placeholder="for example: Opatovická 12, Praha 11000"
                onChange={(e) => setLocationAddress(e.target.value)}
                value={locationAddress} />
            </label>

            <label>
                <span>Website of the venue:</span>
                <input 
                type="text"
                onChange={(e) => setWebsite(e.target.value)}
                value={website} />
            </label>

            <label>
                <span>Description:</span>
                <textarea 
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                />
            </label>
                <button className="btn">Save event</button>
        </form>
        
    </div>
  )
}
