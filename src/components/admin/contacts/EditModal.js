import React from 'react';
import axios from 'axios';


export default function EditModal({ show, closeModal, inputs, data, dataLoaded}) {

    const {name, email, phone, wherefrom, newsletter} = data

    const handleChange = (event) => {
        //when start typing - get rid of success message!
        const name = event.target.name;
        const value = event.target.value;
        // setInputs(values=> ({...values, [name]: value}));
        console.log(inputs)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('https://api.itisgoodtohave.me/contacts/update.php', inputs).then(function(response){
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

            {/* <div className="edit-input">
            <label>Where from?</label>
            <input defaultValue={wherefrom} type="text" name="phone" onChange={handleChange} />
            </div>

            <div className="edit-input">
            <label>Newsletter</label>
            <input defaultValue={newsletter} type="text" name="phone" onChange={handleChange} />
            </div> */}

           
            <div className="edit-modal-footer"> 
            <button className="btn btn-success" type="submit">Save</button>
            <button onClick={closeModal}  className="edit-button btn btn-danger ">Cancel</button>
            </div>

        </form>  }


        </div>
            
                
                
        </div> 


    </div>

  )  
        }
