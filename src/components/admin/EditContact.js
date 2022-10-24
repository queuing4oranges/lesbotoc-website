import React from 'react';
import axios from 'axios'; 
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditContact() {
 const navigate = useNavigate();
 const [inputs, setInputs] = useState([])

 const { id } = useParams();

 useEffect(() => {
    showContact();
 }, [])

function showContact() {
    axios.get(`http://localhost:8080/api/${id}`)
    .then(function(response) {
        console.log(response);
    })
}
  return (
    <div>EditContact</div>
  )
}
