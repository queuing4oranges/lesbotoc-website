import React from 'react';
import axios from 'axios';
import swal from "sweetalert";

export default function AddContact({toggleAddField, setAddField, setSuccessMsg, setFormError, setInputs, inputs, emptyInputs}) {

    const handleChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.type === "checkbox" ? target.checked : target.value
   
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

        //execute post request
        axios.post("https://api.itisgoodtohave.me/contacts/create.php", inputs)
        .then(function(response){
            console.log(response.data.message)
            // setSuccessMsg(response.data.message)
            swal("YEAH BABY!", "You added a new contact.", "success")
            })
        emptyInputs();       
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
            <input className="input-item" id="wherefrom" type="text" name="wherefrom" list="places" onChange={handleChange} />
            <datalist id="places">
                <option value="Bowling s Lesbotočem"></option>
                <option value="Knížní Klub"></option>
                <option value="Lesbotoč MUSIC KVÍZ"></option>
                <option value="Prague Pride"></option>
                <option value="Speed Dating"></option>              

            </datalist>
            </div>

            <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input 
            className="input-item" 
            id="email" 
            type="text" 
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
            onChange={handleChange} 

            placeholder="someone@email.cz" />
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

