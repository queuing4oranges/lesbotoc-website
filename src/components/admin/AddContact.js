import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddContact() {
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
    
            navigate('/admin/contacts')

        })
    }

  return (
    <div>
        <h3>Add a contact</h3>
        <form onSubmit={handleSubmit}>
            
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} />
            <br />

            <label>Email</label>
            <input type="text" name="email" onChange={handleChange} />
            <br />

            <label>Phone</label>
            <input type="text" name="phone" onChange={handleChange} />
            <br />

            <button type='submit'>Save</button>

        </form>
    </div>
  )
}
