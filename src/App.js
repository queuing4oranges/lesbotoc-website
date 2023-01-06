import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Admin from "./components/admin/Admin";
import ContactsList from './components/admin/contacts/ContactsList';
import Events from './components/admin/events/Events';
import EventsArchive from './components/admin/events/EventsArchive';
import ImageUpload from './components/admin/pictures/ImageUpload';
import Newsletter from './components/admin/newsletter/Newsletter';
import AdminLogin from './components/user/AdminLogin';



function App() {

  return (
    <div className="App"> 

      <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<AdminLogin/>}/>
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
