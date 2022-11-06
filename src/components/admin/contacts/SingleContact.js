import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

export default function SingleContact() {
 const [contact, setContact] = useState([])
    const { id } = useParams();

    // useEffect(() => {
    //   showContact();
    // }, [])
    
//     function showContact() {
//     axios.get(`https://api.itisgoodtohave.me/contacts/single_read.php/${id}`)
//     .then(function(response) {
//       setContact(response.data)
//       console.log(contact)
//       console.log(contact.id)
//     })
// }

//  needs to be invoked somehow?!? like on click it gets a single contact or something??

  return (
    <div>
      <h4>Show one Contact:</h4>
      <div> <ul className="list-group">
            <li className="list-group-item">
              <div>{contact.name}</div>
              <div>{contact.email}</div>
              <div>{contact.phone}</div>
              <Link to={`${contact.id}`}>Edit</Link>
              <button>Delete</button>
            </li>
          </ul></div>
    </div>
  )
}

