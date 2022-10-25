import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddContact from './AddContact';

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
      <h3>List of contacts</h3>
      <input type="search" />
      <button>New Contact</button>
      {contacts.map((contact, key) => (
        <div key={key} className="contact__cont">
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <button>Delete</button>
        <button>Edit</button>
        </div>
      ))}

      

{/* here formular in case someone wants to add contact! (on one page); edit contact should lead to other site?! or redirect with self?!*/}

    </div>
  )
}
