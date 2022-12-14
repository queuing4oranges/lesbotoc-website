import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Admin from "./components/admin/Admin";
import ContactsList from './components/admin/contacts/ContactsList';
import Events from './components/admin/events/Events';
import EventsArchive from './components/admin/events/EventsArchive';
import ImageUpload from './components/admin/pictures/ImageUpload';
import Newsletter from './components/admin/newsletter/Newsletter';
import AdminLogin from './components/admin/AdminLogin';
import Home from './components/user/home/Home';
import Event from './components/user/event/SingleEvent';
import Gallery from './components/user/gallery/Gallery';
import About from './components/user/about/About';
import Contact from './components/user/contact/ContactModal';
import Calendar from './components/user/calendar/Calendar';




function App() {

  return (
    <div className="App"> 

      <BrowserRouter basename="/">
        
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route path="/event" element={<SingleEvent/>}/> */}
        <Route path="/galerie" element={<Gallery/>}/>
        <Route path="/kalendar" element={<Calendar/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/kontakt" element={<Contact/>}/>

        <Route path="/login" element={<AdminLogin/>}/>
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
