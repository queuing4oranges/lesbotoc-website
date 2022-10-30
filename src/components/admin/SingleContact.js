import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SingleContact() {
 const [inputs, setInputs] = useState([])
    const { id } = useParams();

    useEffect(() => {
      showContact();
    }, [])
    
    function showContact() {
    axios.get(`http://localhost:8080/api/${id}`)
    .then(function(response) {
      setInputs(response.data)
      console.log(inputs)
      console.log(id)
    })
}

  return (
    <div>
      <h3>Show one Contact:</h3>
      <div>          <ul className="list-group">
            <li className="list-group-item">
              <div>{inputs.name}</div>
              <div>{inputs.email}</div>
              <div>{inputs.phone}</div>
              <Link to={`${inputs.id}/edit`}>Edit</Link>
              <button>Delete</button>
            </li>
          </ul></div>
    </div>
  )
}

