import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import AddContact from './AddContact';
import Searchbar from './Searchbar';
import { Link, useParams } from 'react-router-dom';
import SingleContact from './SingleContact';

export default function ContactsList() {
 const [contacts, setContacts] = useState([]);
 const [addField, setAddField] = useState(false)

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
    getContacts()

  })
}

function handleToggle () {
  if (addField === true) {
    setAddField(false)
  }else setAddField(true)
}


  return (
    <Fragment>
      {/* 
      <h3>Search a contact</h3>
      <Searchbar placeholder="Enter a contact..." data={contacts}/> */}
      <div className="table__container-top">
      <h3 className="contacts-title">Contacts</h3>
      <button onClick={handleToggle} className="btn btn-primary btn-create">Create</button>
      <div className={addField ? "show" : "hide"}><AddContact /></div>
      </div>

          <table className="table table-sm table-striped table-bordered contacts__table">
           
            <thead>
              <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Newsletter</th>
              <th scope="col">Edit / Delete</th>
              </tr>
            </thead>

            <tbody>
            {contacts.map((contact, key) => (
            
              <tr key={key}>   

              <td className="td td-name">{contact.name}</td>
              <td className="td td-email">{contact.email}</td>
              <td className="td td-phone">{contact.phone}</td>
              <td className="td td-newsletter">yes/no</td>
              <td className="td td-crud"><Link to={`${contact.id}/edit`}>Edit</Link><button id={contact.id} onClick={() =>deleteContact(contact.id)}>Delete</button></td>

              </tr>
            ))}</tbody>

        
        
            </table>
</Fragment>
  )
}
