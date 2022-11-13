import React from 'react';
import { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';


export default function Searchbar({placeholder, contacts, toggleEditField, deleteContact, id, showContact, setSuccessMsg}) {  //passing in placeholder to customize searchbar and data from api of parent
  const [filteredData, setFilteredData] = useState([])
  const [nameInput, setNameInput] = useState("")
  
const handleFilter = (event) => {

  setSuccessMsg(false)
  const searchName = event.target.value;
  setNameInput(searchName);
  const newFilter = contacts.filter((value) => {
    return value.name.toLowerCase().includes(searchName.toLowerCase());   //if the value incl the search word, we want to keep/return it
  });
      if (searchName === "") {
        setFilteredData([]); //if input is empty, set to empty array
      } else {
        setFilteredData(newFilter);
      }
}

const clearInput = () => {
  setFilteredData([]);
  setNameInput("")
}

  return (
    <div className='search__container'>
        
        <div className="search-input input-item">
            <input 
            type="text" 
            placeholder={placeholder}
            value={nameInput}
            onChange={handleFilter}
            /> 
        <div className="search-icon">
          {filteredData.length === 0  ? <FaSearch/> 
                                      : <FaWindowClose onClick={clearInput}/>}
        </div>

        
        </div>
        {filteredData.length !==0 && //only show when sth is typed
        <div className="search-result">
          {filteredData.map((contact, key) => {
            return <div key={key}>
              <ul className="edit-list">
                <li className="edit-list-item" key={key}>{contact.name}</li>
                <li className="edit-list-item">{contact.email}</li>
                {/* <li className="edit-list-item">{contact.phone}</li> */}
                <button className="btn btn-sm add-modal" onClick={() =>showContact(contact.id)}>Show</button>               
                {/* <button className="btn btn-danger btn-sm" id={contact.id} onClick={() =>deleteContact(contact.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg></button>                */}
              </ul>
              

            {/* <Link to={`${contact.id}/one`}>{contact.name}</Link> */}
        </div>
          })}
              
             
        </div>
         }

        </div>
  )
}

