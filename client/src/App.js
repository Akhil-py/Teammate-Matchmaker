import './App.css';
import React, { useEffect, useState } from 'react'

import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from './Contact';
import MemberLogin from './MemberLogin';
import Team from './Team';
import Profile from './Profile';
import Register from './Register';
import MemberLanding from './Member_Landing';
import Dota from './Dota';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
const [isLoggedIn, setLoggedIn] = useState(false);

const sendData = (data) => {
  setLoggedIn(true);
  console.log("logged in: ", isLoggedIn);
}

useEffect(() =>{
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
    if(storedLoggedInStatus){
      setLoggedIn(JSON.parse(storedLoggedInStatus));
    }
}, []);

const handleLogin = (user_id) => {
  setLoggedIn(true);
  localStorage.setItem('isLoggedIn', true);
  console.log('stored user id: ', user_id)
  localStorage.setItem('userid', user_id);
};

const handleLogout = () => {
  setLoggedIn(false);
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userid')
}

  return (
    <main>
      <div className="App">
        <Navbar values={isLoggedIn} logout={handleLogout}/>

        <BrowserRouter>
          <Routes>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<MemberLogin sendData={handleLogin}/>} />
            <Route path="/team" element={<Team />} />
            <Route path="/" element={ isLoggedIn ? <MemberLanding  /> : <Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/memberlanding" element={<MemberLanding />}/>
            <Route path="/dota" element={<Dota />} />
          </Routes>
      </BrowserRouter>
     </div>
    </main>
  );
}

export default App;
