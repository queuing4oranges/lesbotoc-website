import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function AddContact({toggleAddField, emptyInputs}) {
    
    const [inputs, setInputs] = useState([])
    const [resetInputs, setResetInputs] = useState("")
    const [newsletter, setNewsletter] = useState(false)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=> ({...values, [name]: value}));
    }

    const handleNewsletter = (event) => {
        let checkbox = document.getElementsByClassName(".checkbox")
        if (event.target.checked) {
            console.log('checked')
            checkbox.value = "1"
            // event.target.value = 1
        } else {
            console.log('NOT checked')
            checkbox.value = "0"
            // event.target.value = 0
        } 
        setNewsletter(current => !current)
        console.log(newsletter)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        axios.post('https://api.itisgoodtohave.me/contacts/create.php', inputs)
        .then(function(response){
        console.log(response.data);
        })
        emptyInputs();
    }


  return (
    <div className="form-container">
        
        <form className="form-cont" onSubmit={handleSubmit}>
            
            <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input className="input-item" id="name" type="text" name="name" onChange={handleChange} placeholder="first Name / last Name / nickname" required />
            </div>
       
            <div className="form-group">
            <label htmlFor="wherefrom">Where did we meet?</label>
            <input className="input-item" id="wherefrom" type="text" name="wherefrom" onChange={handleChange} />
            </div>

            <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input className="input-item" id="email" type="email" name="email" onChange={handleChange} placeholder="someone@email.cz" />
            </div>

            <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input className="input-item" id="phone" type="text" name="phone" onChange={handleChange} />
            </div>
            
            <div className="form-group checkbox-cont">
            <label htmlFor="newsletter">Newsletter?</label>
            <input className="input-item checkbox" id="newsletter" type="checkbox" name="newsletter" onChange={handleNewsletter}  />
            </div>

            <div className="form-group btn-cont">
            <button className="btn btn-success save-btn" onClick={toggleAddField} type='submit'>Save</button>
            </div>
        </form>
    </div>
  )
}
