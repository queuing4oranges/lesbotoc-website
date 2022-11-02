import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import AddContact from './AddContact';
import Searchbar from '../Searchbar';
import { Link } from 'react-router-dom';
import SingleContact from './SingleContact';


export default function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [addField, setAddField] = useState(false)
  const [dataLoaded, setDataLoaded] = useState(false)

 useEffect(() => {
   getContacts();
 }, [])  
 
  function getContacts() {
    axios.get('https://api.itisgoodtohave.me/contacts/read.php')
    .then(function(response) {
      console.log(response.data)
      setContacts(response.data)
      setDataLoaded(true)
    });
  }

  const deleteContact = (id) => {
    axios.delete(`https://api.itisgoodtohave.me/contacts/delete.php/${id}`)
    .then(function(response){
      console.log(response.data)
      getContacts();
      setDataLoaded(false)



    
    // getContacts()  //will lead to ever loading
    //instead i need to get contacts and look if they are still the same and filter!
    //maybe use useeffect

  })
}

function handleToggle () {
  if (addField === true) {
    setAddField(false)
  }else setAddField(true)
}


  return (
    <Fragment>
    <h3 className="contacts-title">Contacts</h3>
      
    <div className="table__container-top">

      <div className="searchbar-cont"><Searchbar placeholder="Enter a contact..." data={contacts}/></div>
        
      {/* <div className="single-cont"><SingleContact/></div> */}

      <div className="create-cont">
        <button onClick={handleToggle} className="btn btn-success btn-create">Create</button>
        <div className={addField ? "show" : "hide"}><AddContact handleToggle={handleToggle}/></div>
      </div>
    
    </div>

    {dataLoaded &&
    <div className="table__container-bottom">
          
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
