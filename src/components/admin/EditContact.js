import React from 'react';
import axios from 'axios'; 
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditContact() {
  const [inputs, setInputs] = useState([])
  const navigate = useNavigate();
  const { id } = useParams();

 useEffect(() => {
    showContact();
 }, [])

function showContact() {
    axios.get(`http://localhost:8080/api/${id}`)
    .then(function(response) {
        setInputs(response.data);
        console.log(inputs)
    })
}

const handleChange = (event) => {  //need this, so val can be modified
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
  console.log(inputs)
}

const handleSubmit = (event) => {
  event.preventDefault();
  axios.put(`http://localhost:8080/api/${id}`, inputs)
  .then(function(response) {
    console.log(response)
    navigate('/admin/contacts')
  })

}

  return (
    <div>
      <h3>Edit Contact</h3>
      <form onSubmit={handleSubmit}>
            
            <label>Name</label>
            <input value={inputs.name} type="text" name="name" onChange={handleChange} />
            <br />

            <label>Email</label>
            <input value={inputs.email} type="text" name="email" onChange={handleChange} />
            <br />

            <label>Phone</label>
            <input value={inputs.phone} type="text" name="phone" onChange={handleChange} />
            <br />

            <button>Save</button>
            <button>Cancel</button>

        </form>     

    </div>
  )
}
