import './App.css';
import ContactsList from './components/admin/ContactsList';
import EventsList from './components/admin/ContactsList';
import Home from './components/user/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import AddContact from './components/admin/AddContact';
import EditContact from './components/admin/EditContact';
import SingleContact from './components/admin/SingleContact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App"> 

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="admin/contacts" element={<ContactsList/>}/>
        <Route path="admin/contacts/:id/edit" element={<EditContact/>}/>
        <Route path="admin/contacts/:id/one" element={<SingleContact/>}/>
        <Route path="admin/events" element={<EventsList/>}/>

      </Routes>  
      
      </BrowserRouter>
    </div>
  );
}

export default App;
