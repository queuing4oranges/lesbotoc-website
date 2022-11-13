import React from 'react';
import axios from 'axios';
import { useState } from 'react';


export default function EditModal({ show, closeModal, data, dataLoaded, setSuccessMsg, setContactsLoaded, getContacts, contactsLoaded }) {

    const {name, email, phone, id} = data
    const [inputs, setInputs] = useState("")

    const handleChange = (event) => {
        setSuccessMsg(false)
        const target = event.target
        const name = target.name;
        const value = target.value;
        // setInputs(values=> ({...values, [name]: value}));
        setInputs({
            ...inputs, [name]:value
     });
        console.log(inputs)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`https://api.itisgoodtohave.me/contacts/update.php/${id}`, inputs).then(function(response){
        console.log(response.data);
        })
        closeModal();
        
    }
    
    if(!show) {
        return null
    }


  return (
    <div className="edit-modal" onClick={closeModal} >
        <div className="edit-modal-content" onClick={e=>e.stopPropagation()}>
            <div className="edit-modal-header">
                <h4 className="edit-modal-title">Edit a contact</h4>
            </div>
            <div className="edit-modal-body">
        
    {dataLoaded &&
      <form onSubmit={handleSubmit}>
            
            <div className="edit-input-cont">
            <label>Name</label>
            <input className="edit-input" defaultValue={name} type="text" name="name" onChange={handleChange} />
            </div>

            <div className="edit-input-cont">
            <label>Email</label>
            <input className="edit-input" defaultValue={email} type="text" name="email"  onChange={handleChange} />
            </div>

            <div className="edit-input-cont">
            <label>Phone</label>
            <input className="edit-input" defaultValue={phone} type="text" name="phone" onChange={handleChange} />
            </div>

            <div className="edit-input-cont">
            <label>ID</label>
            <input className="edit-input" defaultValue={id} type="text" name="id" readOnly  />
            </div>


            {/* <div className="edit-input">
            <label>Where from?</label>
            <input defaultValue={wherefrom} type="text" name="phone" onChange={handleChange} />
            </div>

            <div className="edit-input">
            <label>Newsletter</label>
            <input defaultValue={newsletter} type="text" name="phone" onChange={handleChange} />
            </div> */}

           
            <div className="edit-modal-footer">
            <button onClick={closeModal}  className="edit-button btn btn-danger edit-btn">Cancel</button> 
            <button className="btn btn-success edit-btn" type="submit">Save</button>

            </div>

        </form>  }


        </div>
            
                
                
        </div> 


    </div>

  )  
        }
