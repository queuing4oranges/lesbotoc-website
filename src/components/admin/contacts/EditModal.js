import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';

export default function EditModal({ show, closeModal, data, getContacts, setSuccessMsg, contactsLoaded, setContactsLoaded, id }) {
    const [inputs, setInputs] = useState("")

    //get contacts w useeffect and also close modal!

    //     useEffect(() => {
    //   getContacts();

    // }, [contactsLoaded])

    const handleChange = (event) => {
        setSuccessMsg(false)
        // const target = event.target
        const name = event.target.name;
        const value = event.target.value
        setInputs({
            ...inputs, 
            [name]:value
     });
    }

    const handleSubmit = (event) => {
        console.log(inputs)
        event.preventDefault();
        axios.put(`https://api.itisgoodtohave.me/contacts/update.php/${id}`, inputs)
        .then(function(response){
        console.log(response.data);
        })
        closeModal();   
    }
    
    if(!show) {
        return null
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
            closeModal()
            }
        })
    }


  return (
    <div className="edit-modal" onClick={closeModal} >
        <div className="edit-modal-content" onClick={e=>e.stopPropagation()}>
            <div className="edit-modal-header">
                <h4 className="edit-modal-title">Edit a contact</h4>
            </div>
        
            <div className="edit-modal-body">
                {data &&
                <div>
                
                <form onSubmit={handleSubmit}>
                        
                        <div className="edit-input-cont">
                            <label>Name</label>
                            <input className="edit-input" value={data.name} type="text" name="name" onChange={handleChange} />
                        </div>

                        {/* <input className="edit-input" defaultValue={name} type="text" name="name" onChange={(e) => setName(e.target.value)} /> */}

                        <div className="edit-input-cont">
                            <label>Email</label>
                            <input className="edit-input" value={data.email} type="text" name="email"  onChange={handleChange} />
                        </div>

                        <div className="edit-input-cont">
                            <label>Phone</label>
                            <input className="edit-input" value={data.phone == null ? "": data.phone} type="text" name="phone" onChange={handleChange} />
                        </div>

                        <div className="edit-input-cont">
                            <label>ID</label>
                            <input className="edit-input" value={data.id} type="text" name="id" readOnly  />
                        </div>


                        {/* <div className="edit-input">
                            <label>Where from?</label>
                            <input defaultValue={wherefrom} type="text" name="phone" onChange={handleChange} />
                        </div>

                        <div className="edit-input">
                            <label>Newsletter</label>
                            <input defaultValue={newsletter} type="text" name="phone" onChange={handleChange} />
                        </div> */}

                </form> 
                
                    
                <div className="edit-modal-footer">
                            <button className="edit-button btn btn-danger edit-btn" onClick={() =>deleteContact(data.id)}>Delete</button>
                            <button className="btn btn-success edit-btn" type="submit">Save</button>
                </div>
                
                </div> 
                }
            </div>
        </div> 
    </div>

  )  
}
