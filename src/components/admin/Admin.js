import React from 'react';
import { Link } from 'react-router-dom';


export default function Admin() {
  return (
    <div>
      here navbar
      <br />
      <br />
        What would you like to do 
      <br />
      <Link to={"/admin/contacts"}>Contacts</Link>
      <br />
      Events
      <br />
      Newsletter
      <br />
      <br />
      here footer
    </div>
  )
}
