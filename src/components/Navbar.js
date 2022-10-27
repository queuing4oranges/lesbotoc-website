import React from 'react';
import ContactsList from './admin/ContactsList';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <h2>this is the navbar</h2>
         <Link to="admin/contacts">Admin Contacs</Link>
    </div>
  )
}
