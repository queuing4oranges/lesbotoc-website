import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddContact from './AddContact';
import Searchbar from './Searchbar';
import { Link, useParams } from 'react-router-dom';
import SingleContact from './SingleContact';

export default function ContactsList() {
 const [contacts, setContacts] = useState([]);

 useEffect(() => {
   getContacts();
 }, [])
 
function getContacts() {
  axios.get('https://api.itisgoodtohave.me/contacts/read.php')
  .then(function(response) {
    console.log(response)
    setContacts(response.data)
  });
}


const deleteContact = (id) => {
  axios.delete(`https://api.itisgoodtohave.me/contacts/delete.php/${id}`).then(function(response){
    console.log(response.data)
    console.log(id)
  })
}


  return (
    <div className='contacts__container'>
      <AddContact/>
      <h3>Search a contact</h3>
      <Searchbar placeholder="Enter a contact..." data={contacts}/>

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
              <button id={contact.id} onClick={() =>deleteContact(contact.id)}>Delete</button>
            </li>
          </ul>

        
        </div>
      ))}
    </div>
  )
}
