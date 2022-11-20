// import React from 'react';
// import axios from 'axios'; 
// import { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// export default function EditContact() {
//   const [inputs, setInputs] = useState([])
//   const navigate = useNavigate();
//   const { id } = useParams();
  

//  useEffect(() => {
//     showContact();
//     // eslint-disable-next-line
//  }, [])

//   function showContact() {
//     // axios.get(`https://api.itisgoodtohave.me/contacts/single_read.php/?id=${id}`)  
//     axios.get(`https://api.itisgoodtohave.me/contacts/single_read.php/${id}`)  
//     .then(function(response) {
//         setInputs(response.data);
//     })
//   }

//   const handleChange = (event) => {
//       const name = event.target.name;
//       const value = event.target.value;
//       setInputs(values=> ({...values, [name]: value}));
//       console.log(inputs)
//   }

//   const handleSubmit = (event) => {
//   event.preventDefault();
//   axios.put('https://api.itisgoodtohave.me/contacts/update.php', inputs).then(function(response){
//       console.log(response.data);
//       navigate('/admin/contacts')
//     })
//   }

//   return (
//     <div>
//       <h3>Edit Contact</h3>
//       <form onSubmit={handleSubmit}>
            
//             <label>Name</label>
//             <input value={inputs.name} type="text" name="name" onChange={handleChange} />
//             <br />

//             <label>Email</label>
//             <input defaultValue={inputs.email} type="text" name="email"  onChange={handleChange} />
//             <br />

//             <label>Phone</label>
//             <input defaultValue={inputs.phone} type="text" name="phone" onChange={handleChange} />
//             <br />

//             <button type="submit">Save</button>

//         </form>     

//     </div>
//   )
// }
