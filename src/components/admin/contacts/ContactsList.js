import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import AddContact from './AddContact';
import Searchbar from '../Searchbar';
import { Link } from 'react-router-dom';
import EditContact from './EditContact';
import AdminNavbar from '../AdminNavbar';


export default function ContactsList() {
  const [buttonText, setButtonText] = useState("New Contact")
  const [contacts, setContacts] = useState([]);
  const [contactsLoaded, setContactsLoaded] = useState(false)
  const [addField, setAddField] = useState(false)
  const [editField, setEditField] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")
  const [formError, setFormError] = useState(null)
  const [inputs, setInputs] = useState({
    newsletter : false, 
    name: "",
    wherefrom: "",
    email: "",
    phone: "",

})

  useEffect(() => {
    getContacts();
  }, [contactsLoaded])  
 
  function getContacts() {
    axios.get('https://api.itisgoodtohave.me/contacts/read.php')
    .then(function(response) {
      setContacts(response.data);
      setContactsLoaded(true);    
    })
    setSuccessMsg("");
  }

  const deleteContact = (id) => {
    axios.delete(`https://api.itisgoodtohave.me/contacts/delete.php/${id}`).then(function(response){
      setContactsLoaded(false)
    })
  }

  function toggleAddField () {
    if (addField === true) {
      setAddField(false);
      setButtonText("New Contact")
      emptyInputs();
      } else {
      setFormError(null)
      setAddField(true);
      setButtonText("Cancel")
      emptyInputs();
      }  

      getContacts();   
      setContactsLoaded(false)
  }

  function toggleEditField () {
    if (editField === true) {
      setEditField(false);
    } else {
      setEditField(true)
    }
  }

  function emptyInputs () {
    //emptying input field
    let elements = document.querySelectorAll(".input-item")
    elements.forEach((element) =>{
    element.value = "";
    })
    //emptying inputs
    setInputs({
      newsletter : false, //default value of newsletter
      name: "",
      wherefrom: "",
      email: "",
      phone: "",
    });
  }

  return (
    <Fragment>
    <AdminNavbar />
            
    <h3 className="contacts-title">Contacts</h3>
    {successMsg && <p className="alert alert-success" >{successMsg}</p>}  
    <div className="table__container-top">

{/* Searchbar */}
      <div  className="searchbar-cont"><Searchbar toggleEditField={toggleEditField} placeholder="Enter a contact..." contacts={contacts}/>
      </div>
      <button onClick={toggleAddField} className="btn btn-success btn-create btn-sm">{buttonText}</button>

{/* Adding a contact       */}
      <div className="create-cont">
        
        <div className={addField ? "show" : "hide"}>
          
          {formError && <p className="alert alert-danger alert-message">{formError}</p>}
         
          <AddContact 
          setAddField={setAddField} 
          emptyInputs={emptyInputs} 
          toggleAddField={toggleAddField} 
          setSuccessMsg={setSuccessMsg}
          setButtonText={setButtonText}
          setFormError={setFormError}
          setInputs={setInputs}
          inputs={inputs}
          />
        </div>

      </div>

{/* Editing a contact */}
      <div className="edit-cont">
        <div className={editField ? "show" : "hide"}><EditContact /></div>
      </div>

    </div>

{/* Contacts container - bottom 
Contactslist */}

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
              <th scope="col">Last Update</th>
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
              <td className="td td-age">{contact.updated_at}</td>
              <td className="td td-crud">
                <Link to={`${contact.id}/edit`}><button className="btn btn-info btn-sm">Edit</button></Link>
                <button className="btn btn-danger btn-sm" id={contact.id} onClick={() =>deleteContact(contact.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
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

