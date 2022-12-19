import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import AddContact from './AddContact';
import Searchbar from '../Searchbar';
import AdminNavbar from '../AdminNavbar';
import EditModal from './EditModal';
import swal from "sweetalert";
import Moment from "react-moment";
import { CSVLink } from 'react-csv'
import ReportBug from '../../includes/ReportBug';


export default function ContactsList() {
  const [emails, setEmails] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [nameInput, setNameInput] = useState("")
  const [buttonText, setButtonText] = useState("New Contact")
  const [contacts, setContacts] = useState([]);
  const [contactsLoaded, setContactsLoaded] = useState(false)
  const [addField, setAddField] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")
  const [formError, setFormError] = useState(null)
  const [inputs, setInputs] = useState({
    newsletter : false, 
    name: "",
    wherefrom: "",
    email: "",
    phone: "",
  })

  const [show, setShow] = useState(false)
  const [data, setData] = useState({  //uncontrolled-controlled issue
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
    swal({
      title: "Sure?", 
      text: "Do you REALLY want to delete this precious contact?", 
      icon: "warning", 
      dangerMode: true,
    })
    .then(willDelete => {
      if(willDelete) {
        axios.delete(`https://api.itisgoodtohave.me/contacts/delete.php/${id}`)
        .then(function(response) {
          if (response.status === 200) {
            swal("Deleted!", "It will never bother you again. Promised.", "success")
            setContactsLoaded(false)
          } else if (response.status === 500) {
            swal("Wellllllll...", "Something went wrong here.", "error")
          }
        })
      }
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

  function emptyInputs () {
    //emptying input field
    let elements = document.querySelectorAll(".input-item")
    elements.forEach((element) =>{
    element.value = "";
    })
    //emptying inputs
    setInputs({
      name: "",
      wherefrom: "",
      email: "",
      phone: "",
      newsletter : false, //default value of newsletter
     });
  }

  const showContact = (id) => {
    // handleScrollPosition()
    setShow(true)
    console.log(id)
    axios.get(`https://api.itisgoodtohave.me/contacts/single_read.php/${id}`)  
    .then(function(response) {
      setData(response.data)
      setContactsLoaded(true)
    })
  }

  const closeModal =() => {
    setShow(false)
    setContactsLoaded(false)
  }

  return (
    <Fragment>

    <AdminNavbar />
            
    <h3 className="admin-page-title">Contacts</h3>
    {successMsg && <p className="alert alert-success alert" >{successMsg}</p>}  
    <div className="table__container-top">

{/* Searchbar */}
      <div  className="searchbar-cont">
        <Searchbar 
        nameInput={nameInput} 
        setNameInput={setNameInput} 
        filteredData={filteredData} 
        setFilteredData={setFilteredData} 
        id={contacts.id} 
        deleteContact={deleteContact} 
        setSuccessMsg={setSuccessMsg} 
        showContact={showContact}  
        placeholder="Enter a contact..." 
        contacts={contacts}/>
      </div>

      <div className="add-contact-btn-cont">
      <button onClick={toggleAddField} className="btn btn-success btn-create btn-sm">{buttonText}</button>
      <CSVLink data={contacts} filename="lesbotoč_contacts"><button className="btn btn-info btn-create btn-export btn-sm">Export Data</button></CSVLink> 
      {/* <CSVLink onClick={getOnlyEmail} data={emails} filename="lesbotoč_contacts"><button className="btn btn-info btn-create btn-sm">Export Data</button></CSVLink>  */}
      </div>


{/* Adding a contact */}
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

{/* List of contacts */}
    </div>
    {contactsLoaded &&
    
    <div className="table__container-bottom">
          
          <table 
          className="table table-sm table-bordered contacts__table table-hover"
          id="contacts-table" 
          >
           
            <thead>
              <tr>
              <th scope="col">Name</th>
              <th scope="col">Where from?</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Newsletter</th>
              <th scope="col">Age</th>
              <th scope="col">Updated</th>
              <th scope="col">Edit / Delete</th>
              </tr>
            </thead>

            <tbody className="table-body table-body-contacts">
              {contacts.map((contact, key) => (
              <tr className="table-row" key={key}>   
              <td className="td td-name">{contact.name}</td>
              <td className="td td-wherefrom">{contact.wherefrom}</td>
              <td className="td td-email">{contact.email}</td>
              <td className="td td-phone">{contact.phone}</td>
              <td className="td td-newsletter">{(contact.newsletter === 0) ? "no" : "yes"}</td>
              <td className="td td-age">{contact.age}</td>
              <td className="td td-age">{(!contact.updated_at) ? "" : <Moment format="D. MMMM YYYY">{contact.updated_at}</Moment> }</td>
              <td className="td td-crud">
              
{/* Editing a contact */}

              <button 
              onClick={() =>showContact(contact.id)} 
              type="button" 
              className="btn btn-sm pencil-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-pencil pencil-item" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
            </button>
            
                {show && 
                <EditModal 
                show={show}
                setShow={setShow}
                closeModal={closeModal}
                data={data}
                id={contact.id}                 
                setFilteredData={setFilteredData}
                setNameInput={setNameInput} 
                // handleScrollPosition={handleScrollPosition}
                />
                }


{/* Deleting a contact */}
                <button type="button" className="btn btn-danger btn-sm trash-item" onClick={() =>deleteContact(contact.id)}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-trash trash-item" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                </button>
              </td>
              </tr>
              ))}
            </tbody>

          </table>
    </div>
    }

    <ReportBug/> 

    </Fragment>
  )
}

