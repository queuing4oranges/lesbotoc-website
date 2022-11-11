import React from 'react';
import axios from 'axios';
import { useState } from 'react';


export default function EditModal({ show, closeModal, data, dataLoaded }) {

    const {name, email, phone, id} = data
    const [inputs, setInputs] = useState("")

    const handleChange = (event) => {
        //when start typing - get rid of success message!
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
            
            <div className="edit-input">
            <label>Name</label>
            <input defaultValue={name} type="text" name="name" onChange={handleChange} />
            </div>

            <div className="edit-input">
            <label>Email</label>
            <input defaultValue={email} type="text" name="email"  onChange={handleChange} />
            </div>

            <div className="edit-input">
            <label>Phone</label>
            <input defaultValue={phone} type="text" name="phone" onChange={handleChange} />
            </div>

            <div className="edit-input">
            <label>ID</label>
            <input defaultValue={id} type="text" name="id" readOnly  />
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
