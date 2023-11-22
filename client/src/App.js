import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipies from './pages/Recipies';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ContactUs from './pages/Contactus';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Search from './pages/Search';
import FindUsers from './pages/FindUsers';
import AddRecipie from './pages/AddRecipie';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/recipie" element={<Recipies/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/find-users" element={<FindUsers/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/new-recipie" element={<AddRecipie/>}/>
        <Route path="/home" element={<LandingPage/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
      
    </Router>
  );
}

export default App;
