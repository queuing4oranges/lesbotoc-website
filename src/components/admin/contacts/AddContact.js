import React from "react";
import axios from "axios";
import swal from "sweetalert";

export default function AddContact({ toggleAddField, setAddField, setFormError, setInputs, inputs, emptyInputs }) {

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
   
        setInputs({
        ...inputs,
        [name]: value });
    }

    const handleSubmit = (event) => { 
        //when submit - reset all errors first
        setFormError(null);
        event.preventDefault();
       
        //check that inputs arent null (!null in DB)
        if (!inputs.name) {
            setAddField(true);
            setFormError("Please provide a name.");
            return
        } if (!inputs.email) {
            setAddField(true);
            setFormError("Please provide a valid email.");
           return
        }

        //execute post request
        axios.post("https://api.itisgoodtohave.me/contacts/create.php", inputs)
        .then(function(response){
            console.log(response.data.message);
            swal("YEAH BABY!", "You added a new contact.", "success");
            })
        emptyInputs();       
        toggleAddField();    
    }


  return (

    
    <div className="form-container">
        <div className="form-cont"> 
        
     
        <form onSubmit={handleSubmit}>

            <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input 
            className="input-item" 
            id="name" 
            name="name"
            type="text" 
            placeholder="first Name / last Name / nickname" 
            onChange={handleChange} 
            required
            />
            </div>
       
            <div className="form-group">
            <label htmlFor="wherefrom">Where did we meet?</label>
            <input 
            className="input-item" 
            id="wherefrom" 
            name="wherefrom" 
            list="places" 
            type="text" 
            onChange={handleChange} 
            />
            <datalist id="places">
                <option value="Bowling s Lesboto??em"></option>
                <option value="Kn????n?? Klub"></option>
                <option value="Lesboto?? MUSIC KV??Z"></option>
                <option value="Prague Pride"></option>
                <option value="Speed Dating"></option>              
            </datalist>
            </div>

            <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input 
            className="input-item" 
            id="email" 
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="someone@email.cz" 
            type="text" 
            onChange={handleChange} 
            />
            </div>

            <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input 
            className="input-item" 
            id="phone" 
            name="phone" 
            type="text" 
            onChange={handleChange} 
            />
            </div>

            <div className="form-group">
            <label htmlFor="age">Age Group</label>
            <input 
            className="input-item" 
            id="age" 
            list="ages"
            name="age"
            type="text" 
            onChange={handleChange} 
            />
                <datalist id="ages">
                    <option value="20-25"></option>
                    <option value="26-30"></option>
                    <option value="31-35"></option>
                    <option value="36-40"></option>
                    <option value="41-45"></option>              
                    <option value="46-50"></option>              
                    <option value="50+"></option>              
                </datalist>
            </div>
            
            <div className="form-group checkbox-cont">
            <label htmlFor="newsletter">Newsletter?</label>
            <input 
            className="input-item checkbox" 
            id="newsletter"
            name="newsletter"  
            type="checkbox" 
            value="0" 
            checked={inputs.newsletter}
            onChange={handleChange} 
            />
            </div>

            <div className="form-group btn-cont">
            <button className="btn btn-success save-btn"  type='submit'>Save</button>
            </div>
        </form>
    </div>
    </div>
  )
}

