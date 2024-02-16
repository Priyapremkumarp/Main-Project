import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Userdashboard from './components/UserDashboard/Userdashboard';
import UserProfile from './components/Userprofile/Userprofile';
import About from './components/About/About';
import Admindashboard from './components/Admindashboard/Admindashboard';
import Appointment from './components/Appointment/Appointment';
import Adminprofile from './components/Admin/Adminprofile';
import Booking from './components/Booking/Booking';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/admin-signup" element={<Register />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/admin-login" element={<Login />} />
        <Route path="/dashboard" element={<Userdashboard/>}/>
        <Route path="/user-profile" element={<UserProfile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/admin" element={<Admindashboard/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/admin-profile" element={<Adminprofile/>}/>
        <Route path="/booking" element={<Booking/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
