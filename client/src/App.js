import './App.css';
import React, { useState } from 'react'

import Navbar from "./Navbar";
import Home from "./Navbar/Home";
import AboutUs from "./Navbar/AboutUs";
import Contact from './Navbar/Contact';
import MemberLogin from './Navbar/MemberLogin';
import Team from './Navbar/Team';
import Profile from './Navbar/Profile';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './Navbar/Register';

function App() {
const [isLoggedIn, setLoggedIn] = useState(false);

const sendData = (data) => {
  setLoggedIn(true);
  console.log(isLoggedIn);
}

  return (
    <main>
      <div className="App">
        <Navbar values={isLoggedIn}/>

        <BrowserRouter>
          <Routes>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<MemberLogin sendData={sendData}/>} />
            <Route path="/team" element={<Team />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </BrowserRouter>
     </div>
    </main>
  );
}

export default App;
