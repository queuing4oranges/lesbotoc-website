import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddContact({handleToggle}) {
    const [inputs, setInputs] = useState([])
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=> ({...values, [name]: value}));
        console.log(inputs)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://api.itisgoodtohave.me/contacts/create.php', inputs).then(function(response){
            console.log(response.data);
            clearForm();
            navigate('/admin/contacts')
        })
    }

    const clearForm = () => {
        const el = document.querySelectorAll(".input-field");
        el.value="";
    }
  return (
    <div>
        <h4>Add a contact</h4>
        <form className="form-field" onSubmit={handleSubmit}>
            
            <label>Name</label>
            <input className="input-field" type="text" name="name" onChange={handleChange} />
            <br />

            <label>Email</label>
            <input className="input-field" type="text" name="email" onChange={handleChange} />
            <br />

            <label>Phone</label>
            <input className="input-field" type="text" name="phone" onChange={handleChange} />
            <br />

            <button className="btn btn-success" onClick={handleToggle} type='submit'>Save</button>

        </form>
    </div>
  )
}
