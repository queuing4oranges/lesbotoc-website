import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddContact from './AddContact';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import SingleContact from './SingleContact';

export default function ContactsList() {
 const [contacts, setContacts] = useState([]);

 useEffect(() => {
   getContacts();
 }, [])
 
function getContacts() {
  axios.get('http://localhost:8080/api')
  .then(function(response) {
    console.log(response)
    setContacts(response.data)
  });
}


  return (
    <div className='contacts__container'>
      <AddContact/>
      <h3>Search a contact</h3>
      <Searchbar placeholder="Enter a contact..." data={contacts}/>
      {/* <Searchbar placeholder="Enter another contact..."/> */}

      <h3>List of contacts</h3>
     
      <button>New Contact</button>
      {contacts.map((contact, key) => (
        <div key={key} className="contact__cont">
          <ul className="list-group">
            <li className="list-group-item">
              <div>{contact.name}</div>
              <div>{contact.email}</div>
              <div>{contact.phone}</div>
              <Link to={`${contact.id}/edit`}>Edit</Link>
              <button>Delete</button>
            </li>
          </ul>

        
        </div>
      ))}

      

{/* here formular in case someone wants to add contact! (on one page); edit contact should lead to other site?! or redirect with self?!*/}

    </div>
  )
}
