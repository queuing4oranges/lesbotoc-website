import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function AddContact({toggleAddField, setAddField, setSuccessMsg, setFormError}) {
    
    const [inputs, setInputs] = useState({
        newsletter : false, //newsletter
        name: "",
        wherefrom: "",
        email: "",
        phone: "",

    })

    const handleChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.type == "checkbox" ? target.checked : target.value
   

        setInputs({
            ...inputs,
        [name]: value })
    }

    //when submit - reset all errors first
    const handleSubmit = (event) => { 
        setFormError(null)
        event.preventDefault();
       
        //check that non-nullable inputs are provided
        if (!inputs.name) {
            setAddField(true)
            setFormError("Please provide a name.")
            return
        } if (!inputs.email) {
            setAddField(true)
            setFormError("Please provide a valid email.")
           return
        }
    console.log(inputs)
        //execute post request
        axios.post('https://api.itisgoodtohave.me/contacts/create.php', inputs)
        .then(function(response){
            console.log(response.data.message)
            setSuccessMsg(response.data.message)

            })
        setInputs({
        newsletter : false, //newsletter
        name: "",
        wherefrom: "",
        email: "",
        phone: "",

    });          //empty Inputs
        toggleAddField();       //close field
    }


  return (

    
    <div className="form-container">
        <div className="form-cont"> 
        
     
        <form onSubmit={handleSubmit}>

            <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input className="input-item" id="name" type="text" name="name" onChange={handleChange} placeholder="first Name / last Name / nickname"  />
            </div>
       
            <div className="form-group">
            <label htmlFor="wherefrom">Where did we meet?</label>
            <input className="input-item" id="wherefrom" type="text" name="wherefrom" onChange={handleChange} />
            </div>

            <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input className="input-item" id="email" type="text" name="email" onChange={handleChange} placeholder="someone@email.cz" />
            </div>

            <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input className="input-item" id="phone" type="text" name="phone" onChange={handleChange} />
            </div>
            
            <div className="form-group checkbox-cont">
            <label htmlFor="newsletter">Newsletter?</label>
            <input className="input-item checkbox" id="newsletter" type="checkbox" 
            name="newsletter" value="0" checked={inputs.newsletter}
            onChange={handleChange} />
            </div>

            <div className="form-group btn-cont">
            <button className="btn btn-success save-btn"  type='submit'>Save</button>
            </div>
        </form>
    </div>
    </div>
  )
}

    // const handleNewsletter = (event) => {
    //     let checkbox = document.getElementsByClassName(".checkbox")
    //     if (event.target.checked) {
    //         console.log('checked')
    //         checkbox.value = "1"
    //         // event.target.value = 1
    //     } else {
    //         console.log('NOT checked')
    //         checkbox.value = "0"
    //         // event.target.value = 0
    //     } 
    //     setNewsletter(current => !current)
  
    // }