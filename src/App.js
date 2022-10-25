import './App.css';
import ContactsList from './components/admin/ContactsList';
import EventsList from './components/admin/ContactsList';
import Home from './components/user/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddContact from './components/admin/AddContact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="admin/contacts" element={<ContactsList/>}/>
        {/* <Route path="admin/contacts/add" element={<AddContact/>}/> */}
        <Route path="admin/events" element={<EventsList/>}/>

      </Routes>  
      
      </BrowserRouter>
    </div>
  );
}

export default App;
