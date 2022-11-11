import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Admin from "./components/admin/Admin";
import ContactsList from './components/admin/contacts/ContactsList';
import EventsList from './components/admin/events/EventsList';
import AdminNavbar from './components/admin/AdminNavbar';
import User from './components/user/User';



function App() {

  return (
    <div className="App"> 

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<User/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/contacts" element={<ContactsList/>}/>
        <Route path="/admin/events" element={<EventsList/>}/> 
        <Route path="/admin/newsletter" element={<AdminNavbar/>}/> 



      </Routes>  
      
      </BrowserRouter>
    </div>
  );
}

export default App;


        // <Route path="admin/contacts/:id/edit" element={<EditContact/>}/>
        // {/* <Route path="admin/contacts/:id" element={<SingleContact/>}/> */}
        // <Route path="admin/events" element={<EventsList/>}/>