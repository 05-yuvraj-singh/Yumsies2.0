import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipies from './pages/Recipies';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ContactUs from './components/Contactus';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/recipie" element={<Recipies/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        
        <Route path="/search" element={<Search/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
      
    </Router>
  );
}

export default App;
