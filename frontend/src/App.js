import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import Navbar from './Components/Navbar/Navbar'
import Logout from './Pages/Logout/Logout'
import AdminLayout from './Components/Admin-Layout/Admin-Layout';
import AdminContacts from './Components/Admin-Contacts/Admin-Contacts';
import AdminServices from './Components/Admin-Services/Admin-Services';
import AdminUsers from './Components/Admin-Users/Admin-Users';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<PageNotFound />} />
          // Nested Route
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='users' element={<AdminUsers />} />
            <Route path='contacts' element={<AdminContacts />} />
            <Route path='services' element={<AdminServices />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
