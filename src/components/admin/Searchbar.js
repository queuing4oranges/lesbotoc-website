import React from 'react';
import { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import SingleContact from './contacts/SingleContact';

export default function Searchbar({placeholder, data}) {  //passing in placeholder to customize searchbar and data from api of parent
  const [filteredData, setFilteredData] = useState([])
  const [nameInput, setNameInput] = useState("")
  
const handleFilter = (event) => {
  const searchName = event.target.value;
  setNameInput(searchName);
  const newFilter = data.filter((value) => {
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
        
        <div className="search-input">
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
            return <div>
              <a 
                key={key} 
                className="contact-name"
                href={`${contact.id}`}
                > 
                {contact.name} 
              </a>
            {/* <Link to={`${contact.id}/one`}>{contact.name}</Link> */}
        </div>
          })}
              
             
        </div>
         }

        </div>
  )
}

