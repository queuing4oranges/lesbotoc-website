import React from 'react';
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className="user-title-container">
      <h2 className="user-title">Building the Admin Panel right now. Have a look here:</h2>
      <button className='btn'><Link to={"/admin"}>Admin</Link></button>
    </div>
   
  )
}
