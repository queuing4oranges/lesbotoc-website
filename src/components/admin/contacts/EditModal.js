import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function EditModal({ id, show, onClose, inputs }) {
console.log(id)
console.log(inputs)
// const [inputs, setInputs] = useState([]) //rename in data??
  const navigate = useNavigate();

 useEffect(() => {
    showContact();
    // eslint-disable-next-line
 }, [])

function showContact() {
    axios.get(`https://api.itisgoodtohave.me/contacts/single_read.php/?id=${id}`)  
    .then(function(response) {
        // setInputs(response.data);
    })
}

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
        navigate('/admin/contacts')
        
    })
    }
  if(!show) {
    return null
  }


  return (
    <div className="edit-modal" onClick={onClose} >
        <div className="edit-modal-content" onClick={e=>e.stopPropagation()}>
            <div className="edit-modal-header">
                <h4 className="edit-modal-title">This is the Edit Modal</h4>
            </div>
            <div className="edit-modal-body">
      <form onSubmit={handleSubmit}>
            
            <label>Name</label>
            <input defaultValue={inputs.name} type="text" name="name" onChange={handleChange} />
            <br />

            <label>Email</label>
            <input defaultValue={inputs.email} type="text" name="email"  onChange={handleChange} />
            <br />

            <label>Phone</label>
            <input defaultValue={inputs.phone} type="text" name="phone" onChange={handleChange} />
            <br />

            <button type="submit">Save</button>

        </form> 






                This is the modal content
            </div>
            <div className="edit-modal-footer">
                <button onClick={onClose} className="edit-modal-button">
                    Close
                </button>
            </div>
                
                
        </div> 


    </div>

  )  
{/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Edit Contact</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
              <form onSubmit={handleSubmit}>
            
            <label>Name</label>
            <input defaultValue={inputs.name} type="text" name="name" onChange={handleChange} />
            <br />

            <label>Email</label>
            <input defaultValue={inputs.email} type="text" name="email"  onChange={handleChange} />
            <br />

            <label>Phone</label>
            <input defaultValue={inputs.phone} type="text" name="phone" onChange={handleChange} />
            <br />

            <button type="submit">Save</button>

        </form>  
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-success">Save</button>
      </div>
    </div>
  </div>
</div>
    </div> */}
  
}
