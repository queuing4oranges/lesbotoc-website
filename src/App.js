import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Admin from "./components/admin/Admin";
import ContactsList from './components/admin/contacts/ContactsList';
import Events from './components/admin/events/Events';
// import AdminNavbar from './components/admin/AdminNavbar';
import User from './components/user/User';
// import Pictures from './components/admin/pictures/Pictures';
import EventsArchive from './components/admin/events/EventsArchive';
import ImageUpload from './components/admin/pictures/ImageUpload';
import Newsletter from './components/admin/newsletter/Newsletter';



function App() {

  return (
    <div className="App"> 

      <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<User/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/contacts" element={<ContactsList/>}/>
        <Route path="/admin/events" element={<Events/>}/> 
        <Route path="/admin/events/archive" element={<EventsArchive/>}/> 
        <Route path="/admin/pictures" element={<ImageUpload/>}/> 
        <Route path="/admin/newsletter" element={<Newsletter/>}/> 




      </Routes>  
      
      </BrowserRouter>
    </div>
  );
}

export default App;
