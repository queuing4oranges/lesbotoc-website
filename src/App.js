import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Admin from "./components/admin/Admin";
import ContactsList from "./components/admin/contacts/ContactsList";
import Events from "./components/admin/events/Events";
import EventsArchive from "./components/admin/events/EventsArchive";
import ImageUpload from "./components/admin/pictures/ImageUpload";
// import Newsletter from "./components/admin/newsletter/More";
import AdminLogin from "./components/admin/AdminLogin";
import Home from "./components/user/home/Home";
import Gallery from "./components/user/gallery/Gallery";
import About from "./components/user/about/About";
import Contact from "./components/user/contact/ContactModal";
import Calendar from "./components/user/calendar/Calendar";
import SingleCalendarEvent from "./components/user/calendar/SingleCalendarEvent";
import More from "./components/admin/more/More";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/kalendar" element={<Calendar />} />
          <Route path="/kalendar/:id" element={<SingleCalendarEvent />} />
          <Route path="/about" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          {/* <Route path="/login" element={<AdminLogin />} /> */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/contacts" element={<ContactsList />} />
          <Route path="/admin/events" element={<Events />} />
          <Route path="/admin/events/archive" element={<EventsArchive />} />
          <Route path="/admin/pictures" element={<ImageUpload />} />
          <Route path="/admin/more" element={<More />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <Route path="/events/:id" element={<EventDetail />} />; */
}
