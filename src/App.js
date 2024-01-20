import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";
import Contact from "./components/contact/ContactModal";
import Calendar from "./components/calendar/Calendar";
import SingleCalendarEvent from "./components/calendar/SingleCalendarEvent";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
