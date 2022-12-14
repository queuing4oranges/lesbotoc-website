import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';

export default function EditModal({ show, closeModal, data, setContactsLoaded, id,  setFilteredData, setNameInput }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [wherefrom, setWherefrom] = useState("")
    const [newsletter, setNewsletter] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        setName(data.name)
        setEmail(data.email)
        setPhone(data.phone)
        setWherefrom(data.wherefrom)
        setNewsletter(data.newsletter)
    }, [data])
    

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`https://api.itisgoodtohave.me/contacts/update.php/${data.id}`, {
            name: name, 
            email: email, 
            phone: phone,
            wherefrom: wherefrom, 
            newsletter: newsletter
        })
        .then(function(response){
            if(response.status === 200) {
                swal("YEAH BABY!", "You edited this Contact.", "success");
                console.log(response.data)
            } else if (response.data === 500) {
                swal("Wellllllll...", "Something went wrong here.", "error")
            }
        })
        closeModal();   
        setFilteredData([])
        setNameInput('')  
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
            setFilteredData([])
            setNameInput('')  
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
                            <label>ID</label>
                            <input 
                            className="edit-input" 
                            value={data.id} type="text" 
                            name="id" 
                            readOnly  />
                        </div>
                        
                        <div className="edit-input-cont">
                            <label>Name</label>
                            <input 
                            className="edit-input" 
                            defaultValue={name} 
                            type="text" 
                            name="name"
                            required 
                            onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="edit-input-cont">
                            <label>Email</label>
                            <input 
                            className="edit-input" 
                            defaultValue={email} 
                            type="text" 
                            name="email" 
                            required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            placeholder="must be valid email address"
                            onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="edit-input-cont">
                            <label>Phone</label>
                            <input 
                            className="edit-input" 
                            defaultValue={phone == null ? "": phone} 
                            type="text" 
                            name="phone" 
                            onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <div className="edit-input-cont">
                            <label>Where from?</label>
                            <input 
                            defaultValue={wherefrom} 
                            type="text" 
                            name="phone" 
                            onChange={(e) => setWherefrom(e.target.value)} />
                        </div> 

                        <div className="edit-input-cont">
                            <label>Newsletter</label>
                            <input 
                            defaultValue={newsletter} 
                            type="text" 
                            name="phone" 
                            onChange={(e) => setNewsletter(e.target.value)} />
                            
                        </div>
                        <button className="btn btn-success edit-btn" type="submit">Save</button>

                </form>                         
                
                <div className="edit-modal-footer">
                                    <button className="edit-button btn btn-danger edit-btn" onClick={() =>deleteContact(data.id)}>Delete</button>
                                   
                        </div>
                </div> 
                }
            </div>
        </div> 
    </div>

  )  
}


  // const handleChange = (event) => {
    //     setSuccessMsg(false)
    //     // const target = event.target
    //     const name = event.target.name;
    //     const value = event.target.value
    //     setInputs({
    //         ...inputs, 
    //         [name]:value
    //  });
    // }