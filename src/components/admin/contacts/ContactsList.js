import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import AddContact from './AddContact';
import Searchbar from '../Searchbar';
import { Link } from 'react-router-dom';
import SingleContact from './SingleContact';
import EditContact from './EditContact';
import AdminNavbar from '../AdminNavbar';


export default function ContactsList() {
  const [buttonText, setButtonText] = useState("New Contact")
  const [contacts, setContacts] = useState([]);
  const [contactsLoaded, setContactsLoaded] = useState(false)
  const [addField, setAddField] = useState(false)
  const [editField, setEditField] = useState(false)
  const [sortData, setSortData] = useState([])

  useEffect(() => {
    getContacts();
  }, [])  
 
  function getContacts() {
    axios.get('https://api.itisgoodtohave.me/contacts/read.php')
    .then(function(response) {
      console.log(response.data)
      setContacts(response.data);
      setContactsLoaded(true);
    })
  }

  const deleteContact = (id) => {
    axios.delete(`https://api.itisgoodtohave.me/contacts/delete.php/${id}`)
    .then(function(response){
      console.log(response.data);
      alert("Do you want to delete that contact?");  //needs a cancel opt!
      getContacts();
      setContactsLoaded(false);

    })
  }


  function toggleAddField () {
    if (addField === true) {
      setAddField(false);
      setButtonText("New Contact")
      } else {
      setAddField(true);
      setButtonText("Cancel")
      }
    }

  function toggleEditField () {
    if (editField === true) {
      setEditField(false);
    } else {
      setEditField(true)
    }
  }

      function emptyInputs () {
    let elements = document.querySelectorAll(".input-item")
    elements.forEach((element) =>{
         element.value = "";
    })
    }

  return (
    <Fragment>
    <AdminNavbar />
    <h3 className="contacts-title">Contacts</h3>
      
    <div className="table__container-top">

      <div  className="searchbar-cont"><Searchbar toggleEditField={toggleEditField} placeholder="Enter a contact..." contacts={contacts}/></div>
      <button onClick={toggleAddField} className="btn btn-success btn-create btn-sm">{buttonText}</button>
      
      <div className="create-cont">
        <div className={addField ? "show" : "hide"}><AddContact emptyInputs={emptyInputs} toggleAddField={toggleAddField}/></div>
      </div>
    
      <div className="edit-cont">
        <div className={editField ? "show" : "hide"}><EditContact  />

        </div>

      </div>

    </div>

    {contactsLoaded &&
    <div className="table__container-bottom">
          
          <table className="table table-sm table-striped table-bordered contacts__table">
           
            <thead>
              <tr>
              <th scope="col">Name</th>
              <th scope="col">Where from?</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Newsletter</th>
              <th scope="col">Age</th>
              <th scope="col">Edit / Delete</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact, key) => (
              <tr key={key}>   
              <td className="td td-name">{contact.name}</td>
              <td className="td td-wherefrom">{contact.wherefrom}</td>
              <td className="td td-email">{contact.email}</td>
              <td className="td td-phone">{contact.phone}</td>
              <td className="td td-newsletter">{(contact.newsletter === 0) ? "no" : "yes"}</td>
              <td className="td td-age">{contact.age}</td>
              <td className="td td-crud">
                <Link to={`${contact.id}/edit`}><button className="btn btn-info">Edit</button></Link>
                <button className="btn btn-danger" id={contact.id} onClick={() =>deleteContact(contact.id)}>Delete</button>
              </td>
              </tr>
              ))}
            </tbody>

          </table>
    </div>
    }
    </Fragment>
  )
}

  // function getContacts() {
  //   axios.get('https://api.itisgoodtohave.me/contacts/read.php')
  //   .then(function(response) {
  //     setContacts(response.data);
  //     setContactsLoaded(true);
  //   })
  // }