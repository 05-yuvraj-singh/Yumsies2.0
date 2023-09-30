import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipies from './pages/Recipies';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
// import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/recipie" element={<Recipies/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
